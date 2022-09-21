import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../utils/theme";
import { CssBaseline } from "@mui/material";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Netflix - MUI</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp;
