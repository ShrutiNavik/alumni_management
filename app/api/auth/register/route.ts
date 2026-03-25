import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { hashPassword, generateToken } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, firstName, lastName, graduationYear, course } = body;

    // Validate input
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await sql`
      SELECT * FROM users WHERE email = ${email}
    `;

    if (existingUser.rows.length > 0) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const userResult = await sql`
      INSERT INTO users (email, password, role, status)
      VALUES (${email}, ${hashedPassword}, 'alumni', 'pending')
      RETURNING id, email, role, status
    `;

    const user = userResult.rows[0];

    // Create alumni profile
    await sql`
      INSERT INTO alumni (
        user_id, first_name, last_name, graduation_year, course
      ) VALUES (
        ${user.id}, ${firstName}, ${lastName}, ${graduationYear || null}, ${course || null}
      )
    `;

    // Generate token
    const token = generateToken(user.id, user.email, user.role);

    return NextResponse.json({
      success: true,
      message: 'Registration successful. Your account is pending admin verification.',
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        status: user.status,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    );
  }
}
