import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState, useEffect } from "react";
import { signMessage, verifyMessage } from "ethers"

export const clicked = true;
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
  
  function App() {
    const handleVerifyMessage = async () => {
      const result = await verifyMessage(signMessage, message);
      if(result.success) {
        setVerificationResult(result.address);
      } else {
        alert(result.message);
      }
    };
}
