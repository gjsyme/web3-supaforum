// to address 0.1 signup
import {
  Container,
  Link as ChakraLink,
  Text
} from '@chakra-ui/react';

import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero';
import { Main } from '../components/Main';

const Signup = () => {

  return (
    <Container>
      {/* either use heros or sort out Main having the -45px margin top */}
      <Hero title="Sign Up"/>
      <Main>
        <Text>Form here</Text>>
      </Main>
      
      <DarkModeSwitch />
      <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
    </Container>
  )
}

export default Signup;