import { RsvpData } from '@/store/rsvps.store'
import { HStack, Text, VStack, Box } from '@chakra-ui/react'
import React from 'react'

interface WishListProps {
  wishes: RsvpData[]
}

function WishListItem({ wishes }: WishListProps) {
  return (
    <Box height='400px' position='relative' width='100%'>
      <Box
        position='absolute'
        top={0}
        bottom={0}
        left={0}
        right={0}
        overflowY='auto'
        px={3}
        py={4}
        borderRadius='xl'
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'gray.300',
            borderRadius: '24px',
          },
          scrollBehavior: 'smooth',
          maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 85%, transparent 100%)',
        }}
      >
        {wishes.map((wish, index) => (
          <HStack
            key={index}
            p={3}
            borderRadius='lg'
            spacing={3}
            mb={2}
            align='center'
            _hover={{ transform: 'translateX(4px)' }}
            transition='transform 0.2s ease'
          >
            <VStack spacing={0.5} align='center' flex={1}>
              <Text
                fontSize='sm'
                color='gray.600'
                lineHeight='tall'
                fontStyle={'italic'}
                textAlign={'center'}
              >
                {`"${wish.wish}"`}
              </Text>
              <Text
                fontSize='sm'
                fontWeight='bold'
                color='gray.700'
                textAlign={'center'}
              >
                {wish.name}
              </Text>
            </VStack>
          </HStack>
        ))}
      </Box>
    </Box>
  )
}

export default WishListItem
