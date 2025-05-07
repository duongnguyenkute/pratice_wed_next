import React from 'react'
import FormBox from "@/components/Contact/FormBox"
import Subject from "@/components/Contact/Subject"
import Message from "@/components/Contact/Message"
import { Button } from "@/components/Button"

const Right = () => {
  return (
    <div className='w-full'>
        <h3 className='text-2xl font-semibold leading-9 text-tertiary'>Send Us a Message</h3>
        <form className='pt-6 flex flex-col gap-7' action="">
          <FormBox title={"Name*"}/>
          <FormBox title={"Email*"}/>
          <FormBox title={"Phone*"}/>
          <Subject/>
          <Message/>
          <div>
            <Button text={ "Submit" }/>
          </div>

        </form>
    </div>
  )
}

export default Right