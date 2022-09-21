import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../utils/theme'
import { CssBaseline } from '@mui/material'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Netflix - MUI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
