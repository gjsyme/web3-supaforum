import { Flex, FlexProps, Heading } from '@chakra-ui/react'
import { DarkModeSwitch } from '../components/DarkModeSwitch'

export const Header = (props: FlexProps) => (
  <Flex as="header" py="8rem" {...props}>
    <Heading>Supaforum</Heading>
    <DarkModeSwitch />
  </Flex>
)
