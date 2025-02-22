import { Button } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
interface NavbarItemProps {
  icon: React.ReactNode
  href?: string
  onClick?: () => void
}

export default function NavbarItem({ icon, href, onClick }: NavbarItemProps) {
  return (
    <Button
      fontSize='2xl'
      border='1px'
      borderColor='brand.200'
      p={2}
      bg='brand.100'
      borderRadius={8}
      onClick={onClick}
      _hover={{
        color: 'brand.200',
      }}
    >
      <Link href={href}>{icon}</Link>
    </Button>
  )
}
