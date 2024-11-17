import {
  Container,
  VStack,
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
  icon?: React.ReactNode
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
      sx={{ background: 'rgba(255, 255, 255, 0.29)' }}
      borderRadius={20}
      py={4}
      my={8}
      boxShadow='xl'
    >
      <VStack color='brand.100' gap={1}>
        {icon}
        <Text align='center' fontSize='lg' mb={2}>
          {title.toUpperCase()}
        </Text>
        <HStack fontSize='xl'>
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
              <Text fontSize='3xl'>{tanggal}</Text>
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
        <Text align='center' fontSize='sm'>
          <span>{lokasi}</span>
        </Text>
        <Text align='center' fontSize='sm' marginBottom={4} px={12}>
          {alamat}
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
