import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search') || ''
    const type = searchParams.get('type') || ''

    let query = `
      SELECT j.*, a.first_name, a.last_name
      FROM jobs j
      JOIN users u ON j.posted_by = u.id
      JOIN alumni a ON u.id = a.user_id
      WHERE j.status = 'active'
    `

    if (search) {
      query += ` AND (j.title ILIKE '%${search}%' OR j.company ILIKE '%${search}%')`
    }
    if (type) {
      query += ` AND j.job_type = '${type}'`
    }

    query += ' ORDER BY j.created_at DESC'

    const result = await sql.query(query)

    return NextResponse.json({ jobs: result.rows })
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, company, location, jobType, salary, description, skills, postedBy } = body

    const result = await sql`
      INSERT INTO jobs (posted_by, title, company, location, job_type, salary_range, description, skills, status)
      VALUES (${postedBy}, ${title}, ${company}, ${location}, ${jobType}, ${salary}, ${description}, ${skills}, 'active')
      RETURNING *
    `

    return NextResponse.json({ job: result.rows[0] })
  } catch (error) {
    console.error('Error creating job:', error)
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 })
  }
}
