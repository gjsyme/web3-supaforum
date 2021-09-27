import {
  Box,
  Button,
  Flex,
  Link as ChakraLink,
  Text
} from '@chakra-ui/react'
import { useRouter } from 'next/router';

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'

import { useWallet } from 'use-wallet';
import { useEffect } from 'react';
import { supabase } from '../supabase';

const Index = () => {
  const wallet = useWallet();
  const blockNumber = wallet.getBlockNumber();
  const router = useRouter();

  const activate = (connector) => wallet.connect(connector)

  useEffect(() => {
    if(wallet.status==='connected'){
      console.log('connection made, look up user and make decision');
      queryWalletUser();
    }
  },[wallet.status]);

  const queryWalletUser = async () => {
    const { data, error } = await supabase.from('accounts').select('email').eq('wallet_id', wallet.account).limit(1);
    if(error){
      console.log('error fetching account by wallet id',error);
      return;
    }
    console.log('got data',data);
    if(!data || data.length===0){
      // redirect
      router.push('/signup');
    }else{
      router.push('/forums');
    }
  }

  return (
    <Container height="100vh">
      <Hero title="Welcome"/>
      <Main>
        <Box>
          {wallet.status === 'connected' ? (
            <Box>
              <Box>Account: {wallet.account}</Box>
              <Button onClick={() => wallet.reset()}>disconnect</Button>
            </Box>
          ) : (
            <Box>
              Connect:
              <Flex justifyContent="space-between">
                <Button onClick={() => activate('injected')}>injected (metamask)</Button>
                <Button onClick={() => activate('frame')}>frame</Button>
                {/* require API key */}
                {/* <Button onClick={() => activate('portis')}>portis</Button> */}
                {/* require API key */}
                {/* <Button onClick={() => activate('fortmatic')}>fortmatic</Button> */}
                <Button onClick={() => activate('torus')}>torus</Button>
                <Button onClick={() => activate('walletconnect')}>
                  walletconnect
                </Button>
                {/* requires  chainId to be 1*/}
                {/* <Button onClick={() => activate('walletlink')}>walletlink</Button> */}
              </Flex>
            </Box>
          )}
        </Box>
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
   </Container>
  )
}

export default Index
