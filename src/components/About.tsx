import { Button } from "@/components/Button"
import { HighlightTitle } from "@/components/HighlightTitle"


export function About() {
    return(
        <div>
            {/* About */}
            <div className="px-35 pt-14 pb-23 bg-[url('/background.png')] bg-cover bg-center flex">
            {/* About Left */}
            <div className="pt-11.5 pr-16 pb-27.5 w-1/2">
                <h1 className="text-6xl font-bold leading-16 text-white pb-2">About</h1>
                <p className="text-white text-xl font-normal leading-loose">
                    The American Respiratory Foundation is dedicated to promoting
                    respiratory health throughout the support of research, education,
                    and patient-focused philanthropic activities in respiratory care.
                </p>
            </div>
            {/* About Right */}
            <div className="">
                <img src="video.png" alt="" />
            </div>  
            </div>
            {/* Financial Reprot */}
            <div className="py-14 px-64.5 bg-secondary flex justify-between items-center">
                <div>
                    <h3 className="text-white text-5xl font-bold leading-10"> Financial Reports</h3>
                    <p className="text-white text-lg leading-relaxed pt-5">ARCF regularly files IRS Form 900. These forms are available online at GuideStar.</p>
                </div>
                <div>
                    <Button text="View Forms"/>
                </div>
            </div>
            {/*  Board of Trustees */}
            <div className="px-35 pt-23 pb-25">
                <div className="w-2/5 pb-12">
                    <h1 className="text-5xl font-bold leading-14 pb-3">Board of Trustees</h1>
                    <p className="text-lg font-normal leading-relaxed"> 
                        The American Respiratory Care Foundation is a nonprofit organization
                        formed for the purpose of supporting research, education, and
                        charitable activities.
                        <br/>
                        <br/>
                        The ARCF seeks to educate the public about respiratory health, assist in 
                        the training and continuing education of health care providers, and improve 
                        the quality of our environment.
                    </p>
                </div>

                <div>
                    <img src="carl-hinkson 1.png" alt="" />
                    <div>
                        <p>CHAIR</p>
                        <p>Carl R. Hinkson</p>
                    </div>
                </div>

            </div>
            

        </div>
    )
}
