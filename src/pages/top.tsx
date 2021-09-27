import {
  Box,
  Text
} from '@chakra-ui/react';

import { Container } from '../components/Container';
import { Hero } from '../components/Hero';

// corresponds to 2.0 in wireframes pt2
const Top = () => {
  const name: string = 'Demo Forum';

  return (
    <Container height="100vh">
      <Hero title={`Forum ${name}`}/>
      <Box>
        <Text>This is 2.0 - forum landing page</Text>
      </Box>
    </Container>
  )
}

export default Top;