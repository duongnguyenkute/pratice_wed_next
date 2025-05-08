import Header from "@/components/Header"
import { Conference } from "@/components/Conference"
import Footer from "@/components/Footer"
import About from "@/components/About"

export default  function Page() {
  return (
    <div>
      <Header/>
      <About/>
      <Conference/>
      <Footer/>
    </div>
  )
}