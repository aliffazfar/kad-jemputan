import { Text, VStack, Spinner } from '@chakra-ui/react'

export function InitialSpinner() {
  return (
    <VStack
      h='100vh'
      w='100%'
      align='center'
      justify='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      backgroundPosition='center'
      sx={{
        backgroundColor: 'brand.200',
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
