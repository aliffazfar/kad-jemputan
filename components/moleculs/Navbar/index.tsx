import { Box, Container, Flex, Fade, useDisclosure } from '@chakra-ui/react'
import { FaCalendarAlt, FaHome, FaPhotoVideo, FaGift } from 'react-icons/fa'
import { IoMailOpen } from 'react-icons/io5'
import NavbarItem from './NavbarItem'
import { useDataStore } from '@/store/data.store'
import RsvpForm from '../Rsvp'
import { useRsvpStore } from '@/store/rsvps.store'
import GiftModal from '../Gift'

export default function Navbar({ isShow }: Readonly<{ isShow: boolean }>) {
  const {
    isOpen: isGiftOpen,
    onOpen: onGiftOpen,
    onClose: onGiftClose,
  } = useDisclosure()
  const { onOpen, onClose, isOpen } = useRsvpStore((state) => state)
  const data = useDataStore((state) => state.data)
  const isGalleryAvailable = data?.galleries || false

  return (
    <Fade in={isShow}>
      <Container transitionDuration='800ms'>
        <Box
          boxShadow='xl'
          p={2}
          bgColor='brand.200'
          border='1px'
          borderColor='gray.200'
          borderRadius={8}
          color='white'
          pos='fixed'
          zIndex={9}
          bottom='3'
          left='50%'
          transform='translate(-50%, 0)'
        >
          <Flex gap={2}>
            <NavbarItem icon={<FaHome color='#fffbf3' />} href='#home' />
            <NavbarItem icon={<FaCalendarAlt color='#fffbf3' />} href='#akad' />
            {isGalleryAvailable && (
              <NavbarItem
                icon={<FaPhotoVideo color='#fffbf3' />}
                href='#gallery'
              />
            )}
            <NavbarItem
              icon={<FaGift color='#fffbf3' />}
              onClick={onGiftOpen}
            />
            <NavbarItem
              icon={<IoMailOpen color='#fffbf3' />}
              onClick={onOpen}
            />
          </Flex>
        </Box>
      </Container>
      <RsvpForm isOpen={isOpen} onClose={onClose} />
      <GiftModal isOpen={isGiftOpen} onClose={onGiftClose} />
    </Fade>
  )
}
