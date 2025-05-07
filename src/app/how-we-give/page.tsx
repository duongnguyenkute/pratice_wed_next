import { Header } from "@/components/Header"
import { Conference } from "@/components/Conference"
import { Footer } from "@/components/Footer"
import HowWeGive from "@/components/HowWeGive"


export default  function Page() {
  return (
    <div>
      <Header/>
      <HowWeGive/>
      <Conference/>
      <Footer/>
    </div>
  )
}