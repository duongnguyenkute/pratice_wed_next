import Image from "next/image";
import { Header } from "@/components/Header"
import { Mission } from "@/components/Mission"
import { HowWeGive } from "@/components/HowWeGive"
import { Sponsorship } from "@/components/Sponsorship"

export default function Home() {
  return (
    <div>
      <Header/>
      <Mission/>
      <HowWeGive/>
      <Sponsorship/>
    </div>
  );
}
