import Header from "@/components/Header"
import { Conference } from "@/components/Conference"
import  Footer  from "@/components/Footer"
import Contact from "@/components/Contact"

export default  function Page() {
  return (
    <div>
      <Header/>
      <Contact/>
      <Conference/>
      <Footer/>
    </div>
  )
}