import { useDataStore } from '@/store/data.store'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  VStack,
  Text,
  Box,
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import { ReactNode } from 'react'
import { IoClose } from 'react-icons/io5'

interface RsvpDrawerProps {
  onClose: () => void
  isOpen: boolean
  children: ReactNode
  title: string
  imageUrl?: string
  imagePostion?: string
}

export const CommonDrawer = ({
  onClose,
  isOpen,
  children,
  title,
  imageUrl,
  imagePostion,
}: RsvpDrawerProps) => {
  const data = useDataStore((state) => state.data)

  const imgSrc = imageUrl || 'bg.webp'

  return (
    <Drawer
      placement='bottom'
      onClose={onClose}
      isOpen={isOpen}
      blockScrollOnMount
      autoFocus={false}
      returnFocusOnClose={false}
    >
      <DrawerOverlay />
      <DrawerContent
        width='420px'
        mx='auto'
        // height='65vh !important'
        px={2}
        pt={2}
        pb={4}
      >
        <DrawerHeader
          borderBottomWidth='1px'
          fontSize='sm'
          textAlign='center'
          p={0}
          pb={2}
          mb={4}
        >
          <Flex flexDirection={'row'} alignItems={'center'}>
            <VStack width={'24px'} />
            <Text flex={1} textAlign={'center'}>
              {title}
            </Text>
            <IoClose color='black' size={'24px'} onClick={onClose} />
          </Flex>
        </DrawerHeader>
        <Box
          flexDirection='column'
          width='100%'
          mx='auto'
          flex={1}
          bgColor='brand.100'
          overflow='hidden'
          display='flex'
        >
          <Box
            sx={{
              width: '100%',
              height: '100px',
              backgroundSize: 'cover',
              backgroundPosition: imagePostion ? imagePostion : 'center 4%',
              backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.32), rgba(0, 0, 0, 0.68)), url('/${imgSrc}')`,
            }}
          >
            <VStack h='100%' color='white'>
              <Box marginTop='auto' textAlign='center'>
                <Text fontWeight='' fontSize='xs'>
                  {data?.eventType.toUpperCase()}
                </Text>
                <Text fontWeight='bold'>{data?.title}</Text>
                <Text fontSize='xs'>
                  {dayjs(data?.weddingCeremony?.date).format(
                    'dddd, DD MMMM YYYY'
                  )}
                </Text>
                <Text fontSize='xs' pb={2}>
                  {data.weddingCeremony?.addressLocation}
                </Text>
              </Box>
            </VStack>
          </Box>
          {children}
        </Box>
      </DrawerContent>
    </Drawer>
  )
}
