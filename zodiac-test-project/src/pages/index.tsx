import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getAccountPath, verifyMessage } from 'ethers'

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
      <script>
        element.addEventListener("click", function() {document.getElementById("myBtn").innerHTML = "Ownership Verified"});
      </script></>
  )
}
