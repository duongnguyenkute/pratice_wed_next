import { Header } from "@/components/Header"
import { Conference } from "@/components/Conference"
import { Footer } from "@/components/Footer"
import { NewsPage } from "@/components/NewsPage"


export default  function Page() {
  return (
    <div>
      <Header/>
      <NewsPage/>
      <Conference/>
      <Footer/>
    </div>
  )
}