import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getAccountPath, verifyMessage } from 'ethers'
import { useState } from 'react'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })
const element = document.getElementById("myBtn");

export default function Home() {
  function handleVerifyClick() {
    //Code to run when button is clicked
    
  }
  return (

    <><div>
      <button type='button' onClick={handleVerifyClick}>Verify Ownership</button>
    </div>
    
    <div>
        <button id="myBtn">Verify Ownership</button>
        <p id="myBtn"></p>
      </div>
    </>
  )
}
