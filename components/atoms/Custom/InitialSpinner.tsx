import { Text, VStack, Spinner } from '@chakra-ui/react'

export default function InitialSpinner() {
  return (
    <VStack
      h='100vh'
      w='100vw'
      align='center'
      justify='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      backgroundPosition='center'
      sx={{
        backgroundColor: '#fafaf9',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Spinner color='brand.100' mb={2} size={'md'} />
      <Text color='brand.100'>Sabaq sat nah...</Text>
    </VStack>
  )
}
