import { Box, Heading, Container, Center, VStack } from '@chakra-ui/react'
import { Fragment, useEffect } from 'react'
import { AttentionSeeker, Fade } from 'react-awesome-reveal'
import WishCount from '@/components/moleculs/WishCount'
import WishListItem from '@/components/moleculs/WishListItem'
import { useRsvpStore } from '@/store/rsvps.store'
import CustomPrimaryButton from '@/components/atoms/Button'

export default function WishSection() {
  const { rsvps, setRsvps, onOpen } = useRsvpStore((state) => state)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/rsvps')
      const data = await response.json()
      if (data.length > 0) {
        setRsvps(data)
      }
    }
    fetchData()
  }, [])

  const totalKehadiran = () => {
    const tidakHadirTotal = rsvps.filter((item) => {
      return item.isComing == false
    })
    const hadirTotal = rsvps.reduce((acc, curr) => acc + curr.attendance, 0)
    return [tidakHadirTotal.length, hadirTotal]
  }

  const [tidakHadirTotal, hadirTotal] = totalKehadiran()

  return (
    <Fragment>
      <Fade duration={2000}>
        <AttentionSeeker effect='pulse'>
          <Heading textAlign='center' color='brand.100' bgColor={'#fafaf9'}>
            Kehadiran
          </Heading>
        </AttentionSeeker>
        <WishCount tidakHadirTotal={tidakHadirTotal} hadirTotal={hadirTotal} />
        <Center sx={{ background: '#fafaf9' }} gap={4} py={10}>
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
          <Box sx={{ background: '#fafaf9' }} px={6} pb={20} id='programme'>
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
          <VStack pb={20} sx={{ background: '#fafaf9' }} />
        )}
      </Fade>
    </Fragment>
  )
}
