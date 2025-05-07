import React from 'react'
import { Award } from "@/components/Award"
const PostgraduateSection = () => {
  return (
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
  )
}

export default PostgraduateSection