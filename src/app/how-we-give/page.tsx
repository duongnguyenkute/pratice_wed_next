import { Header } from "@/components/Header"
import { Conference } from "@/components/Conference"
import { Footer } from "@/components/Footer"
import { HowWeGivePage } from "@/components/HowWeGivePage"


export default  function Page() {
  return (
    <div>
      <Header/>
      <HowWeGivePage/>
      <Conference/>
      <Footer/>
    </div>
  )
}