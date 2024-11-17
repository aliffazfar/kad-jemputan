import { db } from '@/firebase/index'
import { RsvpData } from '@/store/rsvps.store'
import dayjs from 'dayjs'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { NextRequest } from 'next/server'

const headers = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
  Pragma: 'no-cache',
  Expires: '0',
}

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, 'rsvps'))
    const dataArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as RsvpData),
    }))
    dataArray.sort((a, b) =>
      dayjs(b.timestamp).isBefore(dayjs(a.timestamp)) ? -1 : 1
    )
    return new Response(JSON.stringify(dataArray), { status: 200, headers })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error fetching RSVPs' }), {
      status: 500,
    })
  }
}

export async function POST(request: NextRequest) {
  try {
    const newRsvp = await request.json()
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
