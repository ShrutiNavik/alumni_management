import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { verifyPassword, generateToken } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find user
    const result = await sql`
      SELECT u.*, a.first_name, a.last_name 
      FROM users u
      LEFT JOIN alumni a ON u.id = a.user_id
      WHERE u.email = ${email}
    `;

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const user = result.rows[0];

    // Verify password
    const isValidPassword = await verifyPassword(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Check if account is verified
    if (user.status === 'pending') {
      return NextResponse.json(
        { error: 'Account pending verification by admin' },
        { status: 403 }
      );
    }

    // Generate token
    const token = generateToken(user.id, user.email, user.role);

    return NextResponse.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        status: user.status,
        firstName: user.first_name,
        lastName: user.last_name,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}
