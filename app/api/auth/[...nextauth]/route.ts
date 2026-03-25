import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { sql } from '@/lib/db'
import { verifyPassword } from '@/lib/auth'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please enter email and password')
        }

        try {
          const result = await sql`
            SELECT u.*, a.first_name, a.last_name 
            FROM users u
            LEFT JOIN alumni a ON u.id = a.user_id
            WHERE u.email = ${credentials.email}
          `

          if (result.rows.length === 0) {
            throw new Error('No user found with this email')
          }

          const user = result.rows[0]

          if (user.status === 'pending') {
            throw new Error('Account pending admin verification')
          }

          const isValid = await verifyPassword(credentials.password, user.password)

          if (!isValid) {
            throw new Error('Invalid password')
          }

          return {
            id: user.id.toString(),
            email: user.email,
            name: `${user.first_name} ${user.last_name}`,
            role: user.role,
            status: user.status
          }
        } catch (error: any) {
          throw new Error(error.message)
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google') {
        try {
          // Check if user exists
          const existingUser = await sql`
            SELECT * FROM users WHERE email = ${user.email}
          `

          if (existingUser.rows.length === 0) {
            // Create new user with Google
            const newUser = await sql`
              INSERT INTO users (email, password, role, status)
              VALUES (${user.email}, '', 'alumni', 'active')
              RETURNING id
            `

            const userId = newUser.rows[0].id

            // Create alumni profile
            const names = user.name?.split(' ') || ['', '']
            await sql`
              INSERT INTO alumni (user_id, first_name, last_name, profile_image)
              VALUES (${userId}, ${names[0]}, ${names[1] || ''}, ${user.image})
            `
          }
          return true
        } catch (error) {
          console.error('Google sign-in error:', error)
          return false
        }
      }
      return true
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
      }
      return session
    }
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
