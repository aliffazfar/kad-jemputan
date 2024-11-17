import { Button, ButtonProps, Flex } from '@chakra-ui/react'
import React, { ReactElement, useState } from 'react'
interface Props extends ButtonProps {
  title: string
  size: string
  onClick?: () => void
  icon?: React.ReactNode
}
export default function CustomPrimaryButton({
  title,
  onClick,
  size,
  icon: Icon,
  color,
  bgColor,
  ...props
}: Props) {
  const [isHovered, setIsHovered] = useState(false)

  const IconWithHover = Icon
    ? React.cloneElement(Icon as unknown as ReactElement, {
        color: isHovered ? '#64332e' : 'brand.200',
      })
    : null

  return (
    <Button
      size={size}
      bg={bgColor || 'brand.100'}
      color={color || 'brand.200'}
      _hover={{
        bg: 'brand.200',
        color: 'brand.100',
        borderColor: 'brand.100',
        border: '2px',
      }}
      onClick={onClick}
      borderRadius='40'
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Flex gap={2} alignItems='center'>
        {IconWithHover} {title}
      </Flex>
    </Button>
  )
}
