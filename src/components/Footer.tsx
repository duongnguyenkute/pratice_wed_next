export function Footer() {
    return(
        <div className="px-18 py-25 flex gap-13">
            {/* Information */}
            <div className="flex-1 w-1/4">
                <div className="pb-8">
                    <div><img src="logo.png" alt="" /></div>
                </div>
                <div>
                    <p className="text-base font-normal leading-normal">
                        9425 North MacArthur Blvd,
                        <br/>
                        Suite 100
                        <br/>    
                        Irving, TX 75063-4706
                        <br/>
                        <br/>
                        <strong>Phone</strong>: (972) 243-2272
                        <br/>
                        <strong>Fax</strong>: (972) 484-2720
                        <br/>
                        <strong>E-Mail Us</strong>
                    </p>
                </div>
            </div>
            {/* About */}
            <div className="flex-1 w-1/4">
                <h4 className="text-lg font-bold leading-snug">About us</h4>
                <p className="text-base font-normal leading-normal pt-3">
                    The American Respiratory Care Foundation is a nonprofit organization 
                    formed for the purpose of supporting research, education, and charitable activities.
                    <br/>
                    <br/>
                    The ARCF seeks to educate the public about respiratory health, assist in the training and 
                    continuing education of health care providers, and improve the quality of our environment.
                </p>
            </div>
            {/* How We Give */}
            <div className="flex1 w-1/4">
                <h4 className="text-lg font-bold leading-snug">How We Give</h4>
                <p className="pb-3 pt-3 border-b-1 border-b-secondary">Student Awards</p>
                <p className="pb-3 pt-3 border-b-1 border-b-secondary">Research Awards & Grants</p>
                <p className="pb-3 pt-3 border-b-1 border-b-secondary">Achievement Awards</p>
                <p className="pb-3  pt-3 border-b-1 border-b-secondary">Literary Awards</p>
                <p className="pt-3">International Fellowship Program</p>

            </div>
            {/* Donations & Support */}
            <div className="flex-1 w-1/4">
                <h4 className="text-lg font-bold leading-snug">Donations & Support</h4>
                <p className="pb-3 pt-3 border-b-1 border-b-secondary">Make A Donation</p>
                <p className="pb-3 pt-3 border-b-1 border-b-secondary">Endowments</p>
                <p className="pb-3 pt-3 border-b-1 border-b-secondary">Sponsors and Donors</p>
                <p className="pt-3 ">Support for International Fellowships</p>
            </div>
        </div>
    )
}