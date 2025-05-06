import { TitlePage } from "@/components/TitlePage"
import {Award} from "@/components/Award"
export function HowWeGivePage(){
    return(
        <div>
            <TitlePage  text={"Student Awards"}/>
            <div className="py-9.5 bg-secondary">
                <h3 className="text-white font-bold uppercase leading-relaxed text-center">UNDERGRADUATE <span className="p-3">|</span> POST GRADUATE</h3>
            </div>
         
            <div className="py-17.5">
                <h3 className="text-5xl font-bold leading-[3.5rem] px-[140px]">Undergraduate Student Awards</h3>
                <Award key="1" text="Morton B. Duggan, Jr. Memorial Education Recognition Award"/>
                <Award key="2" text="Jimmy A. Young Memorial Education Recognition Award"/>
                <Award key="3" text="NBRC William W. Burgin, Jr., MD and Robert M. Lawrence, MD Education Recognition Award"/>
                <Award key="4" text="Morton B. Duggan, Jr. Memorial Education Recognition Award"/>
            </div>

            <div className="">
                <h3 className="px-35 pb-3 text-5xl font-bold leading-[3.5rem]">Postgraduate Student Awards</h3>
                <div className="pl-35 w-1/2">
                    <p className="text-secondary text-lg font-normal leading-relaxed">
                        The American Respiratory Care Foundation and the National Board for Respiratory Care awards up to $5,000 
                        in memory of Gareth B. Gish, MS, RRT to a respiratory therapist pursuing postgraduate education leading to an advanced degree. The award consists of a 
                        certificate of recognition, coach airfare, one night’s lodging, and registration for AARC Congress. May also include a cash award up to $5,000.
                        The Gareth B. Gish award was established in 1999 in memory of Mr. Gish, who was a true pioneer of the profession. Mr. Gish made enormous contributions to our
                        understanding of the science of respiratory care and mentored literally thousands of therapists throughout his career.
                    </p>
                </div>
                <Award key="5" text="NBRC Gareth B. Gish, MS, RRT Memorial Postgraduate Education Recognition Award"/>
                <Award key="6" text="William F. Miller, MD Postgraduate Education Recognition Award"/>
            </div>

            <div className="bg-[#F1F5FA] px-36 py-15">
                <p className="text-secondary text-lg font-normal leading-relaxed">
                    The above listed awards, grants and fellowships may have tax implications to the recipient. Depending on the circumstance and filing 
                    requirements, an information tax form (i.e. 1099) may or may not be issued from the ARCF. In any case, we recommend that all recipients 
                    consult with their tax advisor to ensure compliance with IRS regulations.
                </p>
            </div>




            
            

        </div>
    )
}
