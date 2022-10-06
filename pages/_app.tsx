
import type { AppProps } from 'next/app'
import { initThinBackend } from 'thin-backend';
import { ThinBackend } from 'thin-backend-react';
import 'thin-backend-react/auth.css';
import { NextUIProvider, createTheme } from '@nextui-org/react';

import Layout from '../components/layout'

initThinBackend({ host: process.env.NEXT_PUBLIC_BACKEND_URL });

const theme = createTheme({
  type: "dark"
})

function MyApp({ Component, pageProps }: AppProps) {
  return <ThinBackend requireLogin>
    <NextUIProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  </ThinBackend>
}
export default MyApp
