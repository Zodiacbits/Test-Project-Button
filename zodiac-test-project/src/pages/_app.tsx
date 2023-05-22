import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState, useEffect } from "react";
import { signMessage, verifyMessage } from "ethers"

export const clicked = true;
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
  
  function App() {
    const [clicked, setClicked] = useState(false);
    const []

    const handleClick = () =>
    //Handle button click logic here
    setClicked(true);
    console.log("Button clicked");
  }
}
