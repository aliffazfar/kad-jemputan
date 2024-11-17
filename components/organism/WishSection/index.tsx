import { Box, Heading, Container, Center, VStack } from '@chakra-ui/react'
import { Fragment } from 'react'
import { AttentionSeeker, Fade } from 'react-awesome-reveal'
import WishCount from '@/components/moleculs/WishCount'
import WishListItem from '@/components/moleculs/WishListItem'
import { useRsvpStore } from '@/store/rsvps.store'
import CustomPrimaryButton from '@/components/atoms/Button'
import { useDataStore } from '@/store/data.store'

export default function WishSection() {
  const data = useDataStore((state) => state.data)
  const { rsvps, onOpen } = useRsvpStore((state) => state)

  const totalKehadiran = () => {
    const tidakHadirTotal = rsvps.filter((item) => {
      return item.isComing == false
    })
    const reservedPax = data.reservedPax
    const hadirTotal =
      rsvps.reduce((acc, curr) => acc + curr.attendance, 0) +
      Number(reservedPax)
    return [tidakHadirTotal.length, hadirTotal]
  }

  const [tidakHadirTotal, hadirTotal] = totalKehadiran()

  return (
    <Fragment>
      <Fade duration={2000}>
        <AttentionSeeker effect='pulse'>
          <Heading
            textAlign='center'
            color='brand.100'
            bgColor={'#fffbf3'}
            id='ucapan'
          >
            Kehadiran
          </Heading>
        </AttentionSeeker>
        <WishCount tidakHadirTotal={tidakHadirTotal} hadirTotal={hadirTotal} />
        <Center sx={{ background: '#fffbf3' }} gap={4} py={10}>
          <CustomPrimaryButton
            size='sm'
            title='Sahkan Kehadiran'
            onClick={onOpen}
          />
          <CustomPrimaryButton
            size='sm'
            title='Tulis Ucapan'
            onClick={onOpen}
          />
        </Center>
        {rsvps.length > 0 ? (
          <Box sx={{ background: '#fffbf3' }} px={6} pb={20} id='programme'>
            <Container
              sx={{ background: 'rgba(255, 255, 255, 0.29)' }}
              borderRadius={20}
              py={10}
              boxShadow='lg'
              flexDirection={'column'}
            >
              <Fade duration={2000}>
                <Heading textAlign='center' color='brand.100'>
                  Ucapan
                </Heading>
                <WishListItem wishes={rsvps} />
              </Fade>
            </Container>
          </Box>
        ) : (
          <VStack pb={20} sx={{ background: '#fffbf3' }} />
        )}
      </Fade>
    </Fragment>
  )
}
