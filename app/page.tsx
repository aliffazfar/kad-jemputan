'use client'
import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import FloatNav from '@/components/moleculs/Navbar/FloatNav'
import ModalItem from '@/components/moleculs/ModalItem'
import MainSection from '@/components/organism/MainSection'
import { useDataStore } from '@/store/data.store'
import SalamSection from '@/components/organism/SalamSection'
import DateSection from '@/components/organism/DateSection'
import GallerySection from '@/components/organism/GallerySection'
import '../styles/globals.css'
import WishSection from '@/components/organism/WishSection'
import { useInView } from 'react-power-ups'
import dynamic from 'next/dynamic'
import ProgrammeSection from '@/components/organism/ProgrammeSection'
import dayjs from 'dayjs'
import 'dayjs/locale/ms'
import { InitialSpinner } from '@/components/atoms/Custom/InitialSpinner'
import { PetalBackground } from '@/components/atoms/Custom/ParticleBackground'
import { initialData } from './api/wedding-details/initialData'
import { useRsvpStore } from '@/store/rsvps.store'

dayjs.locale('ms')

const Navbar = dynamic(() => import('@/components/moleculs/Navbar'), {
  ssr: false,
})

export default function HomePage() {
  const [ref] = useInView(false)
  const { setData } = useDataStore()
  const { setRsvps } = useRsvpStore((state) => state)

  const [isLoading, setIsLoading] = useState(true)

  const [isOpen, setOpen] = useState(true)
  const isFirstMount = useRef(true)

  const getWeddingData = useCallback(async () => {
    try {
      const response = await fetch('/api/wedding-details', {
        cache: 'no-store',
      })
      const responseRsvp = await fetch('/api/rsvps', { cache: 'no-store' })
      if (!response.ok && !responseRsvp.ok) {
        throw new Error('Failed to fetch wedding details')
      }
      const data = await response.json()
      const rsvpData = await responseRsvp.json()
      setData(data)
      if (rsvpData.length > 0) setRsvps(rsvpData)
    } catch (err) {
      console.log('FAIL MAT')
      setData(initialData)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getWeddingData()
    isFirstMount.current = false
  }, [])

  if (isFirstMount.current || isLoading) return <InitialSpinner />
  if (isOpen)
    return <ModalItem onClose={() => setOpen(false)} isOpen={isOpen} />
  return (
    <Fragment>
      <PetalBackground />
      <FloatNav />
      <div ref={ref}>
        <MainSection />
      </div>
      <SalamSection />
      <DateSection />
      <ProgrammeSection />
      <GallerySection />
      <WishSection />
      <Navbar isShow />
    </Fragment>
  )
}
