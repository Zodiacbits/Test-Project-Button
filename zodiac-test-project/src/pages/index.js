import Image from 'next/image'
import { Inter } from 'next/font/google'
import { verifyMessage } from 'ethers'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <button type='button'onClick="{Verify Message}">Verify Ownership</button>

  )
}
