import CustomPrimaryButton from '@/components/atoms/Button'
import { CommonDrawer } from '@/components/atoms/Custom/CommonDrawer'
import { useDataStore } from '@/store/data.store'
import { openInNewTab } from '@/utils/index'
import { Box, Center, Text, Image, VStack, Flex } from '@chakra-ui/react'
import { Fragment } from 'react'
import {
  MdOutlineContentCopy,
  MdOutlineFileDownload,
  MdChevronRight,
} from 'react-icons/md'

interface GiftModalProps {
  onClose: () => void
  isOpen: boolean
}

const GiftModal = ({ onClose, isOpen }: GiftModalProps) => {
  const data = useDataStore((state) => state.data)
  if (!data.gift) return null

  const bank = data.gift.bank
  const wishlist = data.gift?.wishlist

  const handleDownload = (index: number) => {
    const link = document.createElement('a')
    link.href = bank[index].qrDownloadImg
    link.download = `${bank[index].accountName.replaceAll(' ', '')}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Nombor akaun telah di copy!')
    })
  }

  const bankMap = {
    maybank: {
      logo: '/qr/maybank.png',
      title: 'Maybank',
    },
    tng: {
      logo: '/qr/tng.png',
      title: `Touch 'n Go`,
    },
  }

  return (
    <CommonDrawer
      title='Hadiah'
      isOpen={isOpen}
      onClose={onClose}
      isFixedHeight
    >
      <Center flexDir='column' my={5}>
        {bank.map((item, index) => {
          const currentBank = bankMap[item.bankName.toLowerCase()]
          return (
            <Fragment key={index}>
              <Box
                my={index > 0 ? 5 : 0}
                borderBottomWidth={index > 0 ? 1 : 0}
                width={'100%'}
                borderBottomColor={'white'}
              />
              <VStack
                flexDirection={'row'}
                width={'100%'}
                justifyContent={'center'}
                mb={2}
              >
                <Image
                  src={currentBank.logo || ''}
                  width={'25px'}
                  alt='currentBank'
                />
                <Text fontWeight='bold' color={'white'} fontSize={'16px'}>
                  {currentBank.title}
                </Text>
              </VStack>
              <Box
                bg='white'
                overflow='hidden'
                width={'210px'}
                alignItems={'center'}
              >
                <Image src={item.qrImg} objectFit='contain' alt='' />
              </Box>
              <Box my={2} w='100%' textAlign={'center'}>
                <Text fontWeight='bold' color={'white'} mb={1}>
                  {item.accountName}
                </Text>
                {item.bankNo ? (
                  <Text
                    as='button'
                    onClick={() => handleCopy(item.bankNo!)}
                    color='white'
                    borderRadius='md'
                    fontWeight='bold'
                    fontSize='sm'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    width={'100%'}
                    mb={1}
                  >
                    <MdOutlineContentCopy
                      size={16}
                      style={{ marginRight: '5px' }}
                    />
                    {item.bankNo}
                  </Text>
                ) : null}
              </Box>
              <CustomPrimaryButton
                title={'Muat turun'}
                size={'xs'}
                borderWidth={1}
                borderRadius={5}
                px={4}
                py={3}
                icon={<MdOutlineFileDownload color='white' size={22} />}
                onClick={() => handleDownload(index)}
              />
            </Fragment>
          )
        })}
        {wishlist && (
          <VStack
            mx={5}
            mt={5}
            pt={5}
            borderTopWidth={1}
            width={'100%'}
            px={4}
            borderBottomColor={'white'}
          >
            {wishlist.map((item, index) => (
              <Box
                key={index}
                as='button'
                onClick={
                  !item.hasReceived
                    ? () => openInNewTab(item.itemLink)
                    : undefined
                }
                width='100%'
                textAlign='left'
                my={1}
                px={3}
                py={1}
                borderWidth={1}
                borderRadius='md'
                bg={'#fafaf9'}
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                _hover={{
                  bg: item.hasReceived ? 'gray.200' : 'gray.100',
                  transform: item.hasReceived ? 'none' : 'scale(1.02)',
                }}
                opacity={item.hasReceived ? 0.6 : 1}
              >
                <Flex alignItems='center' gap={4}>
                  <Box
                    bg='gray.200'
                    overflow='hidden'
                    width='55px'
                    height='55px'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    borderRadius='md'
                  >
                    <Image
                      src={item.imgSrc}
                      objectFit='contain'
                      alt={item.itemName}
                    />
                  </Box>
                  <Box flex={1}>
                    <Text
                      fontWeight='semibold'
                      fontSize='12px'
                      color={item.hasReceived ? 'gray.500' : 'black'}
                      noOfLines={1}
                    >
                      {item.itemName}
                    </Text>
                    <Text
                      fontSize='12px'
                      color={item.hasReceived ? 'gray.400' : 'gray.600'}
                    >
                      {item.hasReceived ? 'Sudah Ditempah' : 'Beli Sekarang'}
                    </Text>
                  </Box>
                </Flex>
                <VStack width={'20px'}>
                  <MdChevronRight
                    color={item.hasReceived ? 'gray.400' : 'gray.600'}
                    size={24}
                  />
                </VStack>
              </Box>
            ))}
          </VStack>
        )}
      </Center>
    </CommonDrawer>
  )
}

export default GiftModal
