import { Button } from "@/components/Button" 
export function Conference(){
    return(
        <div className="flex">
            {/* Conference Leff */}
            <div className="bg-tertiary py-14 pl-18 pr-24 flex flex-col justify-between w-1/2">
                <div>
                    <h3 className="text-3xl font-bold leading-10 pb-3 text-white">Your Donations Support Our Mission</h3>
                    <p className="text-white text-lg font-normal leading-relaxed pb-8">The American Respiratory Care Foundation is a nonprofit organization formed 
                        for the purpose of supporting research, education, and charitable activities.
                        <br/>
                        <br/>
                        The ARCF seeks to educate the public about respiratory health, assist in the training and continuing 
                        education of health care providers, and improve the quality of our environment.
                    </p>
                </div>
                <div>
                    <button className="bg-primary text-xl font-semibold rounded-[3.125rem] cursor-pointer transition duration-300 hover:opacity-70 py-4.5 px-10.5">
                        Donate Now
                    </button>
                </div>
            </div>
            {/* Conference Right */}
            <div className="py-13 pl-20.5 pr-22.5 bg-secondary flex flex-2 gap-10">
                <div>
                    <h3 className="text-white text-3xl font-bold leading-10 pb-3">61st Respiratory Care <br/> Journal Conference</h3>
                    <p className="text-white text-lg font-normal leading-relaxed pb-8">June 19-21, 2024 <br/>  Tampa, FL</p>
                    <p className="text-white text-xl font-semibold leading-relaxed pb-12.5">Pediatric Asthma: Management <br/>  Across the Continuum of Care</p>
                    <div className="bg-primary text-xl font-semibold rounded-[3.125rem] cursor-pointer transition duration-300 hover:opacity-70 py-4.5 px-10.5">
                        Sponsorship Opportunities
                    </div>
                </div>
                <div className="relative flex-1 overflow-hidden items-end">
                    <img className="w-9/10 h-17/20 object-cover object-center block" src="conference.png" alt="" />
                </div>

            </div>
        </div>
    )
}