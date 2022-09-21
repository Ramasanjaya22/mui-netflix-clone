import React from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document{
  render(){
    return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/nficon2016.ico" type="image/x-icon" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 
}