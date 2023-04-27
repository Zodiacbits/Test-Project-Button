import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState } from "react";

export const clicked = true;
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
  
  function App() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () =>
    //Handle button click logic here
    setClicked(true);
    console.log("Button clicked");
  }
  return (
<div>
    {clicked ? "Ownership verified" : null}
  </div>
  
);  
  var document;
}
