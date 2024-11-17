'use client'
import {
  DrawerBody,
  VStack,
  Box,
  Text,
  Select,
  Input,
  Textarea,
  Stack,
  Flex,
} from '@chakra-ui/react'
import React, {
  Fragment,
  ReactNode,
  Suspense,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useDataStore } from '@/store/data.store'
import dayjs from 'dayjs'
import CustomPrimaryButton from '@/components/atoms/Button'
import { useRsvpStore } from '@/store/rsvps.store'
import { FaCheckCircle } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { MdCheck } from 'react-icons/md'
import { CommonDrawer } from '../../atoms/Custom/CommonDrawer'

interface RsvpFormProps {
  onClose: () => void
  isOpen: boolean
}

enum CURRENT_VIEW {
  KEHADIRAN = 'KEHADIRAN',
  UCAPAN_FORM = 'UCAPAN_FORM',
  SUCCESS_RSVP = 'SUCCESS_RSVP',
  SUBMITTED_RSVP = 'SUBMITTED_RSVP',
  CLOSED_RSVP = 'CLOSED_RSVP',
}

export default function RsvpForm({ onClose, isOpen }: RsvpFormProps) {
  const data = useDataStore((state) => state.data)
  const { rsvps, setRsvps } = useRsvpStore((state) => state)

  const [cView, setView] = useState<CURRENT_VIEW>(CURRENT_VIEW.KEHADIRAN)
  const [isClosedRsvp, setCloseRsvp] = useState(false)

  const [kehadiran, setKehadiran] = useState<'hadir' | 'tidakHadir' | ''>()
  const [attendance, setAttendance] = useState(0)
  const [name, setName] = useState('')
  const [mobileNo, setMobileNo] = useState<string>()
  const [wish, setWish] = useState('')

  const mobileNoErrorRef = useRef(false)

  useEffect(() => {
    if (!isOpen || rsvps.length === 0) return

    const submittedMobileNo = localStorage.getItem(data.title)
    if (submittedMobileNo) {
      const rsvp = rsvps.find((rsvp) => rsvp?.mobileNo === submittedMobileNo)
      if (rsvp) {
        setKehadiran(rsvp.isComing ? 'hadir' : 'tidakHadir')
        setName(rsvp.name)
        setView(CURRENT_VIEW.SUBMITTED_RSVP)
        return
      }
    }
    const reservedPax = data.reservedPax
    const hadirTotal =
      rsvps.reduce((acc, curr) => acc + curr.attendance, 0) +
      Number(reservedPax)
    if (hadirTotal > data.noOfPax) {
      setCloseRsvp(true)
      setView(CURRENT_VIEW.CLOSED_RSVP)
    } else {
      setCloseRsvp(false)
      setView(CURRENT_VIEW.KEHADIRAN)
    }
  }, [isOpen, rsvps, data.title, data.noOfPax])

  const handleKehadiran = (value: 'hadir' | 'tidakHadir') => {
    if (value === 'hadir') {
      setAttendance(1)
    } else {
      setAttendance(0)
    }
    setKehadiran(value)
    setView(CURRENT_VIEW.UCAPAN_FORM)
  }

  const onSubmit = () => {
    if (
      name.length > 0 &&
      wish.length > 0 &&
      kehadiran !== undefined &&
      mobileNo &&
      !mobileNoErrorRef.current
    ) {
      const existingIndex = rsvps.findIndex(
        (rsvp) => rsvp.mobileNo === mobileNo
      )

      if (existingIndex !== -1) {
        localStorage.setItem(data.title, rsvps[existingIndex].mobileNo)
        setKehadiran(rsvps[existingIndex].isComing ? 'hadir' : 'tidakHadir')
        setView(CURRENT_VIEW.SUBMITTED_RSVP)
        return
      }

      const newRsvp = {
        name,
        mobileNo,
        timestamp: new Date().toLocaleString(),
        wish: wish.replace(/[“”"]/g, ''),
        isComing: kehadiran === 'hadir',
        attendance: kehadiran === 'hadir' ? attendance : 0,
      }
      try {
        fetch('/api/rsvps', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newRsvp),
        })
        setRsvps([newRsvp, ...rsvps])
        localStorage.setItem(data.title, mobileNo)
      } catch (error) {
        console.error(error)
      } finally {
        setView(CURRENT_VIEW.SUCCESS_RSVP)
      }
    } else {
      alert('Eh, masih tak lengkap lah?')
    }
  }

  const handleDrawerClose = () => {
    if (cView === CURRENT_VIEW.SUCCESS_RSVP) {
      setView(CURRENT_VIEW.SUBMITTED_RSVP)
    }
    onClose()
  }

  const handleMobileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value ? e.target.value : ''
    if (inputValue?.startsWith('6')) {
      inputValue = inputValue.slice(1)
    }
    const isValidFormat = /^(01)[0-46-9]\d{7,8}$/.test(inputValue)
    const isFishy = inputValue.startsWith('012345')
    mobileNoErrorRef.current = isFishy || !isValidFormat
    setMobileNo(inputValue)
  }

  let currentView: ReactNode

  switch (cView) {
    case CURRENT_VIEW.KEHADIRAN:
      currentView = (
        <VStack
          my={6}
          spacing={5}
          textAlign={'center'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Text align='center' fontSize='sm' textColor='white'>
            Sila RSVP sebelum{' '}
            {dayjs(data.countDownDate)
              .subtract(15, 'days')
              .format('DD MMMM YYYY')}
            <br /> bagi memudahkan urusan kami.
          </Text>
          <Flex flexDirection={'row'} flex={1} width={'100%'} gap={2} px={5}>
            <CustomPrimaryButton
              flex={1}
              size='sm'
              title='Hadir'
              borderColor={'white'}
              borderWidth={1}
              onClick={() => handleKehadiran('hadir')}
              borderRadius={10}
              icon={<MdCheck color='white' size={'22px'} />}
            />
            <CustomPrimaryButton
              flex={1}
              size='sm'
              title='Tidak Hadir'
              borderColor={'white'}
              borderWidth={1}
              borderRadius={10}
              onClick={() => handleKehadiran('tidakHadir')}
              icon={<IoClose color='white' size={'22px'} />}
            />
          </Flex>
        </VStack>
      )
      break
    case CURRENT_VIEW.UCAPAN_FORM:
      currentView = (
        <Fragment>
          <Text align='center' fontSize='sm' textColor='white' pt={2}>
            Status:{' '}
            <Text as='span' fontWeight='bold'>
              {kehadiran === 'hadir' ? 'Hadir' : 'Tidak Hadir'}
            </Text>
          </Text>
          <DrawerBody
            margin={3}
            p={0}
            borderRadius={10}
            bgColor='white'
            overflowY='auto'
            flex={1}
          >
            <VStack h='100%'>
              <Box
                color='white'
                sx={{
                  width: '100%',
                }}
                p={4}
                textColor='black'
              >
                <Stack spacing={3}>
                  <Input
                    placeholder='Nama'
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    placeholder='Nombor Telefon'
                    value={mobileNo}
                    type={'number'}
                    required
                    onChange={handleMobileInputChange}
                  />
                  {mobileNoErrorRef.current && (
                    <Text fontSize={'11px'} color={'red'} p={0}>
                      *Nombor telefon yang dimasukkan tidak sah
                    </Text>
                  )}
                  {kehadiran == 'hadir' ? (
                    <Select
                      value={attendance}
                      autoFocus={false}
                      onChange={(e) => setAttendance(Number(e.target.value))}
                    >
                      <option value={1}>1 orang</option>
                      <option value={2}>2 orang</option>
                    </Select>
                  ) : null}
                  <Textarea
                    placeholder='Ucapan'
                    value={wish}
                    required
                    height='150px'
                    onChange={(e) => setWish(e.target.value)}
                  />
                  <Flex flexDirection={'row'} flex={1} width={'100%'} gap={2}>
                    <CustomPrimaryButton
                      flex={1}
                      size='sm'
                      title='Hantar'
                      borderRadius={10}
                      onClick={onSubmit}
                    />
                    <CustomPrimaryButton
                      flex={1}
                      size='sm'
                      title='Batal'
                      borderRadius={10}
                      onClick={() => {
                        setKehadiran('')
                        if (isClosedRsvp) {
                          setView(CURRENT_VIEW.CLOSED_RSVP)
                        } else {
                          setView(CURRENT_VIEW.KEHADIRAN)
                        }
                      }}
                    />
                  </Flex>
                </Stack>
              </Box>
            </VStack>
          </DrawerBody>
        </Fragment>
      )
      break
    case CURRENT_VIEW.SUCCESS_RSVP:
      currentView = (
        <VStack
          flexDirection={'row'}
          mx={2}
          my={10}
          textAlign={'center'}
          justifyContent={'center'}
        >
          <FaCheckCircle size={16} color='white' />
          <Text align='center' fontSize='sm' color='white'>
            Terima kasih! RSVP anda telah diterima.
          </Text>
        </VStack>
      )
      break
    case CURRENT_VIEW.CLOSED_RSVP:
      currentView = (
        <VStack
          mx={10}
          my={10}
          flex={1}
          textAlign={'center'}
          justifyContent={'center'}
        >
          <Text align='center' fontSize='sm' color='white' mb={2}>
            Maaf, RSVP telah ditutup :(
          </Text>
          <CustomPrimaryButton
            flex={1}
            size='sm'
            title='Berikan Ucapan'
            borderColor={'white'}
            borderWidth={1}
            onClick={() => handleKehadiran('tidakHadir')}
            borderRadius={10}
            width={'100%'}
            sx={{ paddingTop: '8px', paddingBottom: '8px' }}
          />
        </VStack>
      )
      break
    case CURRENT_VIEW.SUBMITTED_RSVP:
      currentView = (
        <VStack mx={2} my={6} textAlign={'center'} justifyContent={'center'}>
          <Text align='center' fontSize='sm' textColor='white'>
            Status:{' '}
            <Text as='span' fontWeight='bold'>
              {kehadiran === 'hadir' ? 'Hadir' : 'Tidak Hadir'}
            </Text>
          </Text>
          <Text align='center' fontSize='sm' color='white'>
            Hi {name}, anda telah mengisi RSVP. <br />
            Terima Kasih!
          </Text>
        </VStack>
      )
      break
  }

  return (
    <Suspense>
      <CommonDrawer
        title='RSVP & Ucapan'
        isOpen={isOpen}
        onClose={handleDrawerClose}
      >
        {currentView}
      </CommonDrawer>
    </Suspense>
  )
}
