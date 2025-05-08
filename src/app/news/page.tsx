import Header from "@/components/Header"
import { Conference } from "@/components/Conference"
import Footer from "@/components/Footer"
import News from "@/components/News"


export default  function Page() {
  return (
    <div>
      <Header/>
      <News/>
      <Conference/>
      <Footer/>
    </div>
  )
}