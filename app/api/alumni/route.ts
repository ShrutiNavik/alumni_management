import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search') || ''
    const year = searchParams.get('year') || ''
    const course = searchParams.get('course') || ''

    let query = `
      SELECT u.id, u.email, a.* 
      FROM users u
      JOIN alumni a ON u.id = a.user_id
      WHERE u.status = 'active'
    `

    if (search) {
      query += ` AND (a.first_name ILIKE '%${search}%' OR a.last_name ILIKE '%${search}%')`
    }
    if (year) {
      query += ` AND a.graduation_year = ${year}`
    }
    if (course) {
      query += ` AND a.course ILIKE '%${course}%'`
    }

    const result = await sql.query(query)

    return NextResponse.json({ alumni: result.rows })
  } catch (error) {
    console.error('Error fetching alumni:', error)
    return NextResponse.json({ error: 'Failed to fetch alumni' }, { status: 500 })
  }
}
