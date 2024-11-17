import { db } from '@/firebase/index'
import { RsvpData } from '@/store/rsvps.store'
import { addDoc, collection, getDocs, orderBy, query } from 'firebase/firestore'
import { NextRequest } from 'next/server'

const headers = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
  Pragma: 'no-cache',
  Expires: '0',
}

export async function GET() {
  try {
    const q = query(collection(db, 'rsvps'), orderBy('timestamp', 'desc'))
    const querySnapshot = await getDocs(q)
    if (querySnapshot.empty) {
      return new Response(JSON.stringify({ data: [] }), {
        status: 200,
        headers,
      })
    }

    const dataArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as RsvpData),
    }))

    return new Response(JSON.stringify(dataArray), {
      status: 200,
      headers,
    })
  } catch (error) {
    console.error('Error fetching RSVPs:', error)
    return new Response(
      JSON.stringify({
        error: 'Error fetching RSVPs',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers,
      }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const newRsvp = await request.json()

    const timestamp = new Date().toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    newRsvp.timestamp = timestamp

    await addDoc(collection(db, 'rsvps'), newRsvp)

    return new Response(
      JSON.stringify({ message: 'RSVP added successfully' }),
      {
        status: 201,
      }
    )
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to add RSVP' }), {
      status: 500,
    })
  }
}

export const revalidate = 0
