import {Text} from '@chakra-ui/react'

interface TitleProps {
  children: string
}

export function Title({children}: TitleProps) {
  return (
    <Text fontSize="3xl" fontWeight="bold">
      {children}
    </Text>
  );
}