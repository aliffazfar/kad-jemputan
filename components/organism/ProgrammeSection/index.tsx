/* eslint-disable react/no-unescaped-entities */
import { Container, Box, Text, VStack, Heading } from '@chakra-ui/react'
import { Fade } from 'react-awesome-reveal'
import { useDataStore } from '@/store/data.store'

export default function ProgrammeSection() {
  const data = useDataStore((state) => state.data)
  if (!data.programme) return null
  return (
    <Box sx={{ background: '#fafaf9' }} p={6} id='programme'>
      <Container
        sx={{ background: 'rgba(255, 255, 255, 0.29)' }}
        borderRadius={20}
        py={10}
        my={10}
        boxShadow='lg'
        flexDirection={'column'}
      >
        <Fade duration={2000}>
          <Heading textAlign='center' mb={8} color='brand.100'>
            Atur Cara Majlis
          </Heading>
          {data.programme.map((item, index) => (
            <VStack key={index} gap={0} mb={6}>
              <Text align='center' fontSize={14} margin={0}>
                {item.title}
              </Text>
              <Text align='center' fontSize={14} margin={0}>
                {item.description}
              </Text>
            </VStack>
          ))}
        </Fade>
      </Container>
    </Box>
  )
}
