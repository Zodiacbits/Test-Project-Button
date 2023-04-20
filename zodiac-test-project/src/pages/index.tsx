import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getAccountPath, verifyMessage } from 'ethers'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const handleVerifyClick = () => {
    //Code to run when button is clicked
    console.log('Ownership verified!')
  }

  return (
    <div>
      <button type='button' onClick={handleVerifyClick}>Verify Ownership</button>
    </div>
  )
}
