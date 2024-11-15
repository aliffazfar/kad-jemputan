'use client'
import React, { Fragment, useCallback, useEffect, useRef } from 'react'
import FloatNav from '@/components/moleculs/Navbar/FloatNav'
import ModalItem from '@/components/moleculs/ModalItem'
import MainSection from '@/components/organism/MainSection'
import { getData } from '@/services/data'
import { useDisclosure } from '@chakra-ui/react'
import { useDataStore, WeddingDetails } from '@/store/data.store'
import SalamSection from '@/components/organism/SalamSection'
import DateSection from '@/components/organism/DateSection'
import GallerySection from '@/components/organism/GallerySection'
import '../styles/globals.css'
import WishSection from '@/components/organism/WishSection'
import { useInView } from 'react-power-ups'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import ProgrammeSection from '@/components/organism/ProgrammeSection'
import dayjs from 'dayjs'
import 'dayjs/locale/ms'
import InitialSpinner from '@/components/atoms/Custom/InitialSpinner'

dayjs.locale('ms')

const Navbar = dynamic(() => import('@/components/moleculs/Navbar'), {
  ssr: false,
})

export default function HomePage() {
  const router = useRouter()
  const [ref] = useInView(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { setData } = useDataStore()

  const isFirstMount = useRef(true)

  const getWeddingData = useCallback(async () => {
    try {
      const data = await getData()
      setData(data as unknown as WeddingDetails)
    } catch (error) {
      router.push('/404')
    }
  }, [getData])

  useEffect(() => {
    getWeddingData()
    onOpen()
    isFirstMount.current = false
  }, [])

  if (isFirstMount.current) return <InitialSpinner />
  if (isOpen) return <ModalItem onClose={onClose} isOpen={isOpen} />
  return (
    <Fragment>
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
