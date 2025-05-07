'use client';
import { useState } from 'react';
import React from 'react';

interface Option {
  option: string;
}

const CheckBox = ({ option }: Option) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  // Use option to generate unique id
  const id = `checkbox-${option.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className='flex gap-3.5 items-center'>
      <input
        type="checkbox"
        id={id}
        className='hidden'
        checked={isChecked}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className={`w-5 h-5 bg-quaternary border-tertiary border-2 hover:bg-tertiary hover:border-quaternary cursor-pointer rounded-full transition duration-300 
          ${isChecked ? 'bg-tertiary border-quaternary' : 'bg-quaternary border-tertiary'}`}
      />
      <p className='text-lg font-normal leading-relaxed'>{option}</p>
    </div>
  );
};

export default CheckBox;
