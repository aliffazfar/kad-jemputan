import { Heading, VStack, Text, Center, Container } from '@chakra-ui/react'
import React from 'react'
import CustomPrimaryButton from '@/components/atoms/Button'
import { AttentionSeeker, Fade } from 'react-awesome-reveal'
import dynamic from 'next/dynamic'
import { useDataStore } from '@/store/data.store'
import dayjs from 'dayjs'

const TimeBoxWithNoSSR = dynamic(
  () => import('@/components/moleculs/TimeBox'),
  {
    ssr: false,
  }
)

export default function MainSection() {
  const data = useDataStore((state) => state.data)

  return (
    <Center
      id='home'
      height='100vh'
      sx={{
        backgroundColor: '#fafaf9',
        backgroundImage: "url('/bg.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Fade duration={2000}>
        <AttentionSeeker effect='pulse'>
          <VStack gap={6}>
            <Text align='center' fontSize='md'>
              {data.eventType.toUpperCase()}
            </Text>
            <Heading color='brand.100' size={'2xl'}>
              {data?.title}
            </Heading>
            <Container>
              <Text align='center' fontSize='xs'>
                Kami akan berkahwin, <br />
                dan ingin Anda menjadi sebahagian <br />
                dari hari istimewa kami!
              </Text>
              <TimeBoxWithNoSSR data={data.countDownDate} />
              <Text
                align='center'
                fontSize='xs'
                color='black'
                fontWeight='bold'
              >
                {dayjs(data?.weddingCeremony?.date).format(
                  'dddd, DD MMMM YYYY'
                )}
              </Text>
              <Text align='center' fontSize='xs' color='black' mt={2}>
                {data.weddingCeremony?.addressLocation}
              </Text>
            </Container>
            {/* <a href={'#akad'}>
              <CustomPrimaryButton size='sm' title='Simpan Tarikh' />
            </a> */}
          </VStack>
        </AttentionSeeker>
      </Fade>
    </Center>
  )
}
