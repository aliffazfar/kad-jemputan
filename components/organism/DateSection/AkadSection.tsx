import {
  Container,
  VStack,
  Heading,
  HStack,
  Text,
  Box,
  Divider,
  Flex,
} from '@chakra-ui/react'
import React from 'react'
import { FaSearchLocation } from 'react-icons/fa'
import CustomPrimaryButton from '../../atoms/Button'
import { useLocationStore } from '@/store/location.store'

interface AkadProps {
  icon: React.ReactNode
  title: string
  hari: string
  tanggal: string
  tahun: string
  bulan: string
  jam: string
  tamat?: string
  lokasi?: string
  alamat?: string
}
export default function AkadSection({
  icon,
  title,
  hari,
  tanggal,
  tahun,
  bulan,
  jam,
  tamat,
  lokasi,
  alamat,
}: Readonly<AkadProps>) {
  const { onOpen } = useLocationStore()

  return (
    <Container
      sx={{ background: '#fff' }}
      borderRadius={20}
      py={4}
      my={8}
      boxShadow='xl'
      opacity={0.9}
    >
      <VStack color='brand.100' gap={1}>
        {icon}
        <Heading fontFamily='Niconne' fontWeight='light'>
          {title}
        </Heading>
        <HStack fontFamily='Libre Baskerville' fontSize='2xl'>
          <Flex w='33%'>
            <Text>{hari}</Text>
          </Flex>
          <Flex align='center' gap={4}>
            <Divider
              orientation='vertical'
              height={50}
              borderColor='brand.100'
              borderStartWidth={2}
            />
            <Box lineHeight={9} textAlign='center'>
              <Text fontSize='4xl'>{tanggal}</Text>
              <Text fontSize='2xl'>{tahun}</Text>
            </Box>
            <Divider
              orientation='vertical'
              height={50}
              borderColor='brand.100'
              borderStartWidth={2}
            />
          </Flex>
          <Flex w='33%'>
            <Text>{bulan}</Text>
          </Flex>
        </HStack>
        <Text fontWeight='bold' fontSize='sm' marginTop={2}>
          Masa
        </Text>
        <Text fontWeight='bold' fontSize='sm'>
          {jam} - {tamat ? tamat : 'Selesai'}
        </Text>
        <Text fontWeight='bold' fontSize='sm' marginTop={2}>
          Tempat
        </Text>
        <Text align='center' fontSize='sm' marginBottom={4}>
          <span>{lokasi}</span>
          <br /> {alamat}
        </Text>
        <CustomPrimaryButton
          onClick={onOpen}
          size='sm'
          icon={<FaSearchLocation />}
          title='Maps'
        />
      </VStack>
    </Container>
  )
}
