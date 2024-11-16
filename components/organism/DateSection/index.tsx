import { Box, Heading } from '@chakra-ui/react'
import { FaHandHoldingHeart } from 'react-icons/fa'
import AkadSection from './AkadSection'
import { GiBigDiamondRing } from 'react-icons/gi'
import { AttentionSeeker, Fade } from 'react-awesome-reveal'
import { useDataStore } from '@/store/data.store'
import dayjs from 'dayjs'

export default function DateSection() {
  const data = useDataStore((state) => state.data)
  const isAkadAvailable = data?.weddingCeremony || false
  const isReceptionAvailable = data?.weddingReception || false

  return (
    <Box
      sx={{
        backgroundColor: '#fafaf9',
        backgroundImage: "url('/bg.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      p={6}
      py={28}
      id='akad'
      alignItems={'center'}
      justifyContent={'center'}
      alignContent={'center'}
      height='100vh'
    >
      <Fade duration={2000}>
        <AttentionSeeker effect='pulse'>
          <Heading textAlign='center' my={8} color='brand.100'>
            Simpan Tarikh
          </Heading>
        </AttentionSeeker>
        {isAkadAvailable ? (
          <AkadSection
            // icon={
            //   <FaHandHoldingHeart
            //     style={{ color: '#4F6057', fontSize: '2.4rem' }}
            //   />
            // }
            title={data.eventType}
            hari={dayjs(data.weddingCeremony?.date).format('dddd')}
            tanggal={dayjs(data.weddingCeremony?.date).format('DD')}
            tahun={dayjs(data.weddingCeremony?.date).format('YYYY')}
            bulan={dayjs(data.weddingCeremony?.date).format('MMMM')}
            jam={dayjs(data.weddingCeremony?.date).format('hh:mm A')}
            tamat={dayjs(data.weddingCeremony?.endDate).format('hh:mm A')}
            lokasi={data?.weddingCeremony?.addressLocation}
            alamat={data?.weddingCeremony?.address}
          />
        ) : null}
        {isReceptionAvailable ? (
          <AkadSection
            icon={
              <GiBigDiamondRing
                style={{ color: '#4F6057', fontSize: '2.4rem' }}
              />
            }
            title='Resepsi'
            hari={dayjs(data.weddingReception?.date).format('dddd')}
            tanggal={dayjs(data.weddingReception?.date).format('DD')}
            tahun={dayjs(data.weddingReception?.date).format('YYYY')}
            bulan={dayjs(data.weddingReception?.date).format('MMMM')}
            jam={dayjs(data.weddingCeremony?.date).format('hh:mm A')}
            tamat={dayjs(data.weddingCeremony?.endDate).format('hh:mm A')}
            lokasi={data?.weddingReception?.addressLocation}
            alamat={data?.weddingReception?.address}
          />
        ) : null}
      </Fade>
    </Box>
  )
}
