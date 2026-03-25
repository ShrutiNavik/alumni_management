import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') || ''

    let query = `
      SELECT e.*, COUNT(er.id) as attendee_count
      FROM events e
      LEFT JOIN event_rsvps er ON e.id = er.event_id
      WHERE e.event_date >= CURRENT_DATE
    `

    if (type) {
      query += ` AND e.event_type = '${type}'`
    }

    query += ` GROUP BY e.id ORDER BY e.event_date ASC`

    const result = await sql.query(query)

    return NextResponse.json({ events: result.rows })
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, description, eventDate, location, eventType, createdBy } = body

    const result = await sql`
      INSERT INTO events (title, description, event_date, location, event_type, created_by)
      VALUES (${title}, ${description}, ${eventDate}, ${location}, ${eventType}, ${createdBy})
      RETURNING *
    `

    return NextResponse.json({ event: result.rows[0] })
  } catch (error) {
    console.error('Error creating event:', error)
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 })
  }
}
