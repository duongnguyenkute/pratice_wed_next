import Image from "next/image";
import { Header } from "@/components/Header"
import { MissionPage } from "@/components/MissionPage"
import { Conference } from "@/components/Conference"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div>
      <Header/>
      <MissionPage/>
      <Conference/>
      <Footer/>
    </div>
  );
}
