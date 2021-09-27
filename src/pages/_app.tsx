import { ChakraProvider } from '@chakra-ui/react'
import { UseWalletProvider } from 'use-wallet'

import theme from '../theme'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UseWalletProvider connectors={{
      injected: {
        //allows you to connect and switch between mainnet and rinkeby within Metamask.
        chainId: [1, 4],
      },
      fortmatic: {
        chainId: [1],
        apiKey: '',
      },
      portis: {
        dAppId: '',
        chainId: [1],
      },
      walletconnect: {
        chainId: [1],
        rpcUrl: 'https://mainnet.eth.aragon.network/',
      },
      walletlink: {
        chainId: [1],
        url: 'https://mainnet.eth.aragon.network/',
      },
    }}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </UseWalletProvider>
  )
}

export default MyApp
