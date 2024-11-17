import { NextRequest } from 'next/server'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '@/firebase/index'
import { WeddingDetails } from '@/store/data.store'
import { initialData } from './initialData'

const headers = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
  Pragma: 'no-cache',
  Expires: '0',
}

export async function GET() {
  try {
    const detailsRef = doc(db, 'wedding-details', 'current')
    const detailsSnap = await getDoc(detailsRef)
    if (!detailsSnap.exists()) {
      const initializeWeddingData = {
        ...initialData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      await setDoc(detailsRef, initializeWeddingData)
      return new Response(JSON.stringify(initializeWeddingData), {
        status: 200,
        headers,
      })
    }
    return new Response(JSON.stringify(detailsSnap.data()), {
      status: 200,
      headers,
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to fetch wedding details' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const details: WeddingDetails = await request.json()

    const detailsRef = doc(db, 'wedding-details', 'current')
    await setDoc(detailsRef, {
      ...details,
      updatedAt: new Date().toISOString(),
    })

    return new Response(
      JSON.stringify({ message: 'Wedding details updated successfully' }),
      {
        status: 200,
        headers,
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to update wedding details' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
