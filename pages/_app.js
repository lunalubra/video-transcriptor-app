import { ChakraProvider } from '@chakra-ui/react';

import { AuthProvider } from '../hooks';
import theme from '../styles/theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Head>
          <title>Video transcriptor app</title>
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
