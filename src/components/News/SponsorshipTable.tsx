import React from 'react'

const SponsorshipTable = () => {
  return (
    <div>
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
    </div>
  )
}

export default SponsorshipTable