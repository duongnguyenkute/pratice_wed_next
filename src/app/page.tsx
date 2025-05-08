
import Header from "@/components/Header"
import Mission from "@/components/Mission"
import { Conference } from "@/components/Conference"
import  Footer  from "@/components/Footer"

export default function Home() {
  return (
    <div className="xl:bg-white lg:bg-pink-200 md:bg-green-200 sm:bg-amber-200">
      <Header/>
      <Mission/>
      <Conference/>
      <Footer/>
    </div>
  );
}
