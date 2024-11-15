import { Button, ButtonGroup, Container, Center } from '@chakra-ui/react'

export default function Paginate({
  number,
  setNumber,
  tableData,
  postPerPage,
}: any) {
  const ChangePage = (pageNumber: number) => {
    setNumber(pageNumber)
  }

  const pageNumber: JSX.Element[] = []

  for (let i = 1; i <= Math.ceil(tableData.length / postPerPage); i++) {
    pageNumber.push(
      <Button
        key={i}
        onClick={() => ChangePage(i)}
        size='xs'
        variant='ghost'
        color='#4F6057'
        fontWeight={i === number ? 'bold' : 'normal'}
        borderBottom={i === number ? '2px solid #4F6057' : 'none'}
        _hover={{
          bg: 'transparent',
          opacity: 0.8,
        }}
      >
        {i}
      </Button>
    )
  }

  const Prev = () => {
    if (number !== 1) {
      setNumber(number - 1)
    } else {
      setNumber(number)
    }
  }

  const Next = () => {
    if (number < pageNumber.length) {
      setNumber(number + 1)
    } else {
      return null
    }
  }

  return (
    <Container>
      <Center>
        {pageNumber.length > 0 && (
          <ButtonGroup spacing='2'>
            <Button
              onClick={Prev}
              size='xs'
              variant='ghost'
              color='#4F6057'
              _hover={{
                bg: 'transparent',
                opacity: 0.8,
              }}
            >
              {'<'}
            </Button>
            {pageNumber}
            <Button
              onClick={Next}
              size='xs'
              variant='ghost'
              color='#4F6057'
              _hover={{
                bg: 'transparent',
                opacity: 0.8,
              }}
            >
              {'>'}
            </Button>
          </ButtonGroup>
        )}
      </Center>
    </Container>
  )
}
