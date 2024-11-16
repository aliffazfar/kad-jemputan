/* eslint-disable react/no-unescaped-entities */
import {
  Center,
  Container,
  Box,
  Text,
  VStack,
  Heading,
  Img,
} from '@chakra-ui/react'
import { Fade } from 'react-awesome-reveal'
import { useDataStore } from '@/store/data.store'

export default function SalamSection() {
  const data = useDataStore((state) => state.data)

  return (
    <Box sx={{ background: '#fafaf9' }} p={6} id='salam'>
      <Container
        sx={{ background: 'rgba(255, 255, 255, 0.29)' }}
        borderRadius={20}
        py={20}
        my={20}
        boxShadow='lg'
      >
        <Fade duration={2000}>
          <Center>
            <VStack gap={4}>
              <Img
                src='/salam.svg'
                alt='salam'
                width={150}
                height={30}
                loading='lazy'
                style={{ color: '#4F6057' }}
              />
              <Text fontSize={12} fontFamily='Poly' color='brand.100'>
                Assalamu'alaikum Wr. Wb.
              </Text>
              <Text
                align='center'
                fontSize={13}
                fontFamily='Poly'
                color='brand.100'
              >
                Dengan memohon rahmat dan kurniaan Allah <br /> Subhanahu Wa
                Ta'ala, insyaaAllah kami akan <br /> menjalankan majlis
                perkahwinan
              </Text>
              <VStack>
                <Text fontFamily='Cinzel Decorative' fontSize={26}>
                  {data.brides?.name}
                </Text>
                <Text align='center' fontSize={14} margin={0}>
                  Puteri kepada {data.brides?.fatherName} <br />
                  {data.brides?.motherName &&
                    `& Ibu ${data.brides?.motherName}`}
                </Text>
              </VStack>
              <Heading>&</Heading>
              <VStack>
                <Text fontFamily='Cinzel Decorative' fontSize={26}>
                  {data.grooms?.name}
                </Text>
                <Text align='center' fontSize={14} margin={0}>
                  Putera kepada {data.grooms?.fatherName} <br /> &{' '}
                  {data.grooms?.motherName}
                </Text>
              </VStack>
            </VStack>
          </Center>
        </Fade>
      </Container>
    </Box>
  )
}
