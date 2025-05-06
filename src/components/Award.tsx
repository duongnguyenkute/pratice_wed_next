'use client';

import { useState } from 'react';
interface Text{
  text: String;
}
export function Award( {text}: Text) {
  const [activeTab, setActiveTab] = useState('general');

  const renderContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <p className="text-secondary text-lg font-normal leading-relaxed pt-6">
            The Morton B. Duggan, Jr. Memorial Education Recognition Award is awarded to a student currently enrolled in an accredited 
            respiratory care education program. Preference given to candidates from Georgia and South Carolina.
            <br/><br/>
            The American Respiratory Care Foundation may award up to $1,000 in memory of Morton B. Duggan, Jr. This includes a certificate 
            of recognition, coach airfare, one night’s lodging, and registration for AARC Congress.
          </p>
        );
      case 'requirements':
        return (
          <ul className='list-decimal list-inside space-y-4 text-secondary text-lg leading-relaxed pt-6'>
            <li>Completed application form.</li>
            <li>Must provide verification of enrollment in an accredited respiratory care training program.</li>
            <li>Must provide official transcript verifying a GPA of 3.0 or better on a 4.0 scale, or the equivalent.</li>
            <li>
                An original referenced paper on some aspect of respiratory care. The paper should include a cover page giving only the title of the paper. T
                he paper should be devoid of any information such as the applicants name, address, or school that could provide a bias in the evaluation.
            </li>
            <li>
                Must provide letters of recommendation from the program director or other senior faculty member and from the medical director or other physician 
                instructor attesting to: a) approval of candidates paper, b) candidate’s worthiness for the award, and c) candidate’s potential for a career 
                in the profession of respiratory care.
            </li>
          <p>Please note that the application deadline is June 1.</p>
                    </ul>
        );
      case 'application':
        return (
          <div className="text-secondary text-lg leading-relaxed">
            <p className="text-lg text-secondary font-normal underline leading-relaxed">Paper Submission Guidelines</p>
            <p className="text-lg text-secondary font-normal underline leading-relaxed">
              Points to consider when submitting an essay include clarity, originality, and adherence to the topic.
            </p>
            <br/>
            <ul className='list-decimal list-inside text-lg text-secondary font-normal leading-relaxed'>
              <li>
                In addition to submitting some basic personal information, you will also be required to:
                <ul className='list-[lower-alpha] list-inside pl-5'>
                  <li>Attach an original referenced paper on some aspect of respiratory care to the online form if applying for an undergraduate award. The paper
                     should include a cover page giving only the title of the paper, and should be devoid of any information such as applicant’s name, address, or
                      school that could provide a bias in the evaluation. See <span className='underline'>Paper Submission Guidelines</span>
                  </li>
                  <li>Attach a personal essay of at least 1,200 words describing how this award will assist the applicant in reaching the objective of a degree and the 
                    candidate’s ultimate goals of leadership in health care if applying for the William W. Burgin/Robert Lawrence award. The paper should include a 
                    cover page with the author’s name, address, and phone number. The body of the paper should be devoid of any information such as applicant’s name, 
                    address, or school that could provide a bias in the evaluation. See <span className='underline'>Points to Consider in Submitting an Essay</span>
                  </li>
                </ul>
              </li>
              <br/>
              <li>Applications are accepted Jan. 1–June 1. Applications will not be considered unless all supporting documents have been sent.</li>
              <br />
              <li>
                Previous undergraduate award recipients are eligible to reapply. Previous postgraduate award recipients may apply for, and receive,
                 an award a second and third year if the applicant is maintaining good standing in an advanced degree program and is the most deserving 
                 candidate in the judgment of the Board of Trustees or its designated selection committee.
               </li>
            </ul>
          </div>
        );
      case 'recipients':
        return (
          <div className='pt-6 text-secondary text-lg font-normal leading-relaxed'>
            <p><strong>2023</strong> - Firstname Lastname</p>
            <p><strong>2022</strong> - Firstname Lastname</p>
            <p><strong>2021</strong> - Firstname Lastname</p>
            <p><strong>2020</strong> - Firstname Lastname</p>
            <p><strong>2019</strong> - Firstname Lastname</p>
            <p><strong>2018</strong> - Firstname Lastname</p>
            <p><strong>2017</strong> - Firstname Lastname</p>
            <p><strong>2016</strong> - Firstname Lastname</p>
            <p><strong>2015</strong> - Firstname Lastname</p>
            <p><strong>2014</strong> - Firstname Lastname</p>
            <p><strong>2013</strong> - Firstname Lastname</p>
            <p><strong>2012</strong> - Firstname Lastname</p>
          </div>
        );
      default:
        return null;
    }
  };

  const tabItem = (id: string, label: string) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`hover:text-tertiary text-lg font-normal leading-relaxed py-6 px-13.5 text-left bg-quaternary cursor-pointer ${
        activeTab === id ? 'font-semibold text-tertiary bg-white' : 'hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="px-[140px] py-[70px] border-b border-gray-300">
        <h3 className="text-3xl text-tertiary font-semibold leading-loose pb-6">
          {text}
        </h3>

        <div className="border-t border-secondary flex gap-17">
          {/* Tabs (Left) */}
          <div className="flex flex-col">
            {tabItem('general', 'General Information')}
            {tabItem('requirements', 'Requirements')}
            {tabItem('application', 'Application')}
            {tabItem('recipients', 'Past Award Recipients')}
          </div>

          {/* Content (Right) */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
    </div>
  );
}

