import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { userId, status } = body
    const eventId = params.id

    const existing = await sql`
      SELECT * FROM event_rsvps 
      WHERE event_id = ${eventId} AND user_id = ${userId}
    `

    if (existing.rows.length > 0) {
      const result = await sql`
        UPDATE event_rsvps 
        SET status = ${status}
        WHERE event_id = ${eventId} AND user_id = ${userId}
        RETURNING *
      `
      return NextResponse.json({ rsvp: result.rows[0] })
    } else {
      const result = await sql`
        INSERT INTO event_rsvps (event_id, user_id, status)
        VALUES (${eventId}, ${userId}, ${status})
        RETURNING *
      `
      return NextResponse.json({ rsvp: result.rows[0] })
    }
  } catch (error) {
    console.error('Error creating RSVP:', error)
    return NextResponse.json({ error: 'Failed to create RSVP' }, { status: 500 })
  }
}
