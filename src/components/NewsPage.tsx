import { TitlePage } from "@/components/TitlePage"
import { Button } from "@/components/Button"
export function NewsPage() {
    
    return(
        <div>
            <TitlePage text={"ARCF 2024 Fundraising Event"}/>
            <div className="px-35 pt-17.5 pb-20">
                {/* News Left */}
                <div>
                    <div className="w-full h-full object-cover rounded-xl"><img src="news1.jpg" alt="" /></div>
                    <div className="py-17.5">
                        <p className="text-lg font-bold uppercase leading-relaxed text-secondary">August 15, 2024</p>
                        <h3 className="text-2xl font-normal leading-9 py-6">Come together on Nov. 19 with the American Respiratory Care Foundation (ARCF) and your
                             respiratory care colleagues and friends from around the world for an “Evening in Havana” 
                             t o support and advance the respiratory care profession!
                        </h3>
                        <p className="text-lg font-normal leading-relaxed">
                            Mark your calendar now and get your dancing shoes ready for an evening of <span className="underline">live music</span>, and 
                            an unique opportunity for professional <span className="underline">salsa lessons</span>,a mojito mixology class, rum sampling, 
                            and networking, all while supporting the important work of the ARCF. The event will also include 
                            recognition of Foundation donors, and updates on ARCF accomplishments in the past year.
                            <br/>
                            Proceeds from the event support the ARCF’s ongoing mission, to build funding and support for respiratory 
                            research, education, and patient-focused philanthropic activities. Benefits of event sponsorship are noted below.              
                        </p>
                    </div>
                </div>
                <div className="pb-6">
                    <h2 className="text-tertiary text-3xl font-semibold leading-10 pb-3.5">Event Details</h2>
                    <p className="text-lg font-normal leading-relaxed">
                        <strong>Date</strong>: Nov. 19
                        <br/>
                        <br/>
                        <strong>Time</strong>: 6:30 p.m.9:30 p.m., registration opens at 5:30 p.m.
                        <br/>
                        <br/>
                        <strong>Location</strong>: Cuba Libra Restaurant & Rum Bar, Orlando, FL
                        <br/>
                        <br/>
                        <strong>Dress Code</strong>: Business casual (salsa dancing attire encouraged)
                        <br/>
                        <br/>
                        <strong>Tickets</strong>: $125 includes dinner, and two drinks. Seating is limited, purchase your tickets in advance.
                        <br/>
                        <strong>Deadline to purchase tickets is Oct. 31.</strong> No tickets will be sold at the door. Purchase a table of 10 for your team and
                        receive special recognition and reserved seating.
                    </p>

                </div>
                <Button text={"Purchase Tickets"}></Button>
                <div className="pt-17.5">
                    <h2 className="text-tertiary text-3xl font-semibold leading-1 pb-4">Event Sponsorship</h2>
                    <p className="text-lg font-normal leading-relaxed">Take your support to the next level with a sponsorship/table purchase for the event. See details below.</p>
                    <table>
                        <thead>
                            <tr className="text-left text-lg font-semibold leading-relaxed border-b-1 border-secondary">
                                <th className="py-6 px-4">Sponsor Level</th>
                                <th className="py-6 px-4">Amount</th>
                                <th className="py-6 px-4">Receives</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-left text-lg font-normal leading-relaxed border-b-1 border-secondary">
                                <td  className="py-6 px-4">Platinum</td>
                                <td className="py-6 px-4">$50,000</td>
                                <td className="py-6 px-4">Four complimentary tables (total of 40 tickets)</td>
                            </tr>
                            <tr className="text-left text-lg font-normal leading-relaxed border-b-1 border-secondary">
                                <td className="py-6 px-4">Gold</td>
                                <td className="py-6 px-4">$20,000</td>
                                <td className="py-6 px-4">Three complimentary tables (total of 30 tickets)</td>
                            </tr>
                            <tr className="text-left text-lg font-normal leading-relaxed border-b-1 border-secondary">
                                <td className="py-6 px-4">Silver</td>
                                <td className="py-6 px-4">$510,000</td>
                                <td className="py-6 px-4">Two complimentary tables (total of 20 tickets)</td>
                            </tr>
                            <tr className="text-left text-lg font-normal leading-relaxed border-b-1 border-secondary">
                                <td className="py-6 px-4">Bronze</td>
                                <td className="py-6 px-4">$5,000</td>
                                <td className="py-6 px-4">One complimentary table (total of 10 tickets)</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="text-lg font-normal leading-relaxed pt-6">Email <span className="font-bold underline">Crystal Leighton</span> for additional details and to purchase sponsorship.</p>
                    <div className="pt-17.5 pb-16">
                        <img src="slider1.png" alt=""/>
                        <img src="slider1.png" alt=""/>
                        <img src="slider1.png" alt=""/>
                    </div>

                    <div>
                        <button><img src="Ellipse 2.svg" alt="" /></button>
                        <button><img src="Ellipse 2.svg" alt="" /></button>
                        <button><img src="Ellipse 2.svg" alt="" /></button>
                    </div>
                </div>

            </div>
        </div>
    )
}
