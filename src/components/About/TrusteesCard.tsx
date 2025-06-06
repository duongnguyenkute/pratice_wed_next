"use client";
import React, { useState } from 'react'

interface TrusteesCardProps {
    img: string;
    position: string;
    name: string;
    title: string;
    university: string[];
    highlight: string;
}

const TrusteesCard = ({ img, position, name, title, university, highlight }: TrusteesCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className='w-1/4 flex flex-col gap-7'>
      <img src={ img } alt="" />
      <div>
        <p className='text-tertiary text-lg font-bold uppercase leading-relaxed' >{position}</p>
        <p className='text-2xl font-normal leading-9'>{name}</p>
        { title && (
          <div>
            <br />
            <p className='text-lg font-semibold leading-relaxed'>{title}</p>
          </div>
        )}
        {university.filter(u => u.trim() !== "").length > 0 && (
          <div className="text-lg font-normal leading-relaxed">
            {university.map((u, idx) =>
              u.trim() !== "" ? <p key={idx}>{u}</p> : null
            )}
          </div>
        )}
      </div>

      { highlight && (
        <div>
          <div 
          className="flex pb-3 gap-1 items-center cursor-pointer hover:opacity-70"
          onClick={handleToggle}
          >
            <img src="Plus.svg" alt="" />
            <p className="text-lg font-normal leading-relaxed text-tertiary">Professional Highlights</p>
          </div>
          {isOpen && (
              <p className="text-lg font-normal leading-relaxed">
                {highlight}
              </p>
          )}
        </div>
      )}
    </div>
  )
}

export default TrusteesCard;
