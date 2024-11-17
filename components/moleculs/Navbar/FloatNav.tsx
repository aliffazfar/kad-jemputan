import { Box, Flex, Container } from '@chakra-ui/react'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { MdMusicNote, MdMusicOff } from 'react-icons/md'
import NavbarItem from './NavbarItem'
import { useDataStore } from '../../../store/data.store'
import { useAudio } from '@/components/hooks/useAudio'
import LocationDrawer from '../Location'
import { useLocationStore } from '@/store/location.store'

export default function FloatNav() {
  const { isOpen, onOpen, onClose } = useLocationStore()
  const data = useDataStore((state) => state.data)
  const { isPlay, toggle } = useAudio()
  return (
    <Container>
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
        right='3'
        top='40%'
      >
        <Flex gap={2} flexDirection='column'>
          <NavbarItem
            icon={<FaLocationDot color='#fffbf3' size={20} />}
            onClick={onOpen}
          />
          <NavbarItem
            icon={
              !isPlay ? (
                <MdMusicOff color='#fffbf3' />
              ) : (
                <MdMusicNote color='#fffbf3' />
              )
            }
            onClick={toggle}
          />
        </Flex>
      </Box>
      <LocationDrawer isOpen={isOpen} onClose={onClose} data={data} />
    </Container>
  )
}
