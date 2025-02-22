import { Spacer, Text, VStack, Center, Stack, Heading } from '@chakra-ui/react'
import { AttentionSeeker, Fade } from 'react-awesome-reveal'
import { FaBookOpen } from 'react-icons/fa'
import CustomPrimaryButton from '@/components/atoms/Button'

import { useDataStore } from '@/store/data.store'
import { useMusicStore } from '@/store/music.store'
import { Suspense } from 'react'

export default function ModalItem({ onClose, isOpen }: any) {
  const data = useDataStore((state) => state.data)
  const music = useMusicStore((state) => state)

  const handleOpenInvitation = () => {
    onClose()
    music.setToggleMusic(true)
  }

  if (!isOpen) return null
  return (
    <Suspense>
      <VStack
        h='100vh'
        w='100%'
        align='center'
        justify='center'
        bg='brand.200'
        backgroundImage="url('/bg.webp')"
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundPosition='center'
      >
        <Fade duration={2000}>
          <AttentionSeeker effect='pulse'>
            <VStack gap={0}>
              <Text align='center' fontSize='lg' my={6}>
                {data.eventType.toUpperCase()}
              </Text>
              <Stack direction='column' gap={4}>
                <Center>
                  <VStack spacing={4}>
                    <Heading
                      as='h2'
                      size='3xl'
                      color={'brand.100'}
                      textAlign='center'
                    >
                      {data.brides.nick}
                    </Heading>
                    <Heading
                      as='h2'
                      size='3xl'
                      textAlign='center'
                      color={'brand.100'}
                    >
                      &
                    </Heading>
                    <Heading
                      as='h2'
                      size='3xl'
                      textAlign='center'
                      color={'brand.100'}
                    >
                      {data.grooms.nick}
                    </Heading>
                  </VStack>
                </Center>
                <Center>
                  <VStack mt={3} mb={6}>
                    <Text fontSize='xs' align='center'>
                      Kepada Ybhg.
                      <br />
                      Dato' | Datin | Tuan | Puan | Encik | Cik <br />
                    </Text>
                  </VStack>
                </Center>
              </Stack>
              <Spacer />
              <CustomPrimaryButton
                icon={<FaBookOpen />}
                title='Buka Undangan'
                onClick={handleOpenInvitation}
                size='md'
              />
            </VStack>
          </AttentionSeeker>
        </Fade>
      </VStack>
    </Suspense>
  )
}
