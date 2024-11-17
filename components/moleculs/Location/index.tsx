'use client'
import { VStack, Text, Flex } from '@chakra-ui/react'
import React, { Suspense } from 'react'
import { useDataStore } from '@/store/data.store'
import { CommonDrawer } from '../../atoms/Custom/CommonDrawer'
import CustomPrimaryButton from '@/components/atoms/Button'
import { FaGoogle } from 'react-icons/fa'
import { LiaWaze } from 'react-icons/lia'
import { openInNewTab } from '@/utils/index'

export default function LocationDrawer({ onClose, isOpen }: any) {
  const data = useDataStore((state) => state.data)

  return (
    <Suspense>
      <CommonDrawer
        title='Lokasi'
        isOpen={isOpen}
        onClose={onClose}
        imageUrl={'location.webp'}
        imagePostion='center 50%'
        theme='black'
      >
        <VStack
          my={6}
          spacing={5}
          textAlign={'center'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <VStack lineHeight={'18px'}>
            <Text
              fontFamily='Cinzel Decorative'
              fontSize={16}
              color={'white'}
              fontWeight={'bold'}
            >
              {data.weddingCeremony?.addressLocation}
            </Text>
            <Text align='center' fontSize='sm' textColor='white' mx={20}>
              {data.weddingCeremony?.address}
            </Text>
          </VStack>
          <Flex flexDirection={'row'} flex={1} width={'100%'} gap={2} px={5}>
            <CustomPrimaryButton
              flex={1}
              size='sm'
              title=' Maps'
              bgColor={'brand.200'}
              textColor={'brand.100'}
              onClick={() => openInNewTab(data.weddingCeremony?.mapLink)}
              icon={<FaGoogle color='white' size={'13px'} />}
            />
            <CustomPrimaryButton
              flex={1}
              size='sm'
              title='Waze'
              bgColor={'brand.200'}
              textColor={'brand.100'}
              onClick={() => openInNewTab(data.weddingCeremony?.wazeLink)}
              icon={<LiaWaze color='white' size={'19px'} />}
            />
          </Flex>
        </VStack>
      </CommonDrawer>
    </Suspense>
  )
}
