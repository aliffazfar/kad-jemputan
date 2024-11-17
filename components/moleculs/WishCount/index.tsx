import { Box, HStack, Text } from '@chakra-ui/react'
import React, { Fragment } from 'react'

export default function WishCount({ tidakHadirTotal, hadirTotal }: any) {
  return (
    <Fragment>
      <HStack justifyContent={'center'} bgColor={'brand.200'}>
        <Box textAlign='center' padding={3} borderRadius={6} mx={4}>
          <Text fontSize={'4xl'}>{hadirTotal}</Text>
          <Text fontSize={14}>Hadir</Text>
        </Box>
        <Box textAlign='center' padding={3} borderRadius={6} mx={4}>
          <Text fontSize={'4xl'}>{tidakHadirTotal}</Text>
          <Text fontSize={14}>Tidak Hadir</Text>
        </Box>
      </HStack>
    </Fragment>
  )
}
