import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import {Layout} from "../Layout";

const roboto = Roboto({
  weight: '400',
})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={roboto.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </main>
}
