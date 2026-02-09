"use client"
import AppForm from './AppFrom'
import TextInputField from '../Input-fields/TextInputField';
import { Button } from '@/components/ui/button';
import TextAreaField from '../Input-fields/TextAreaField';
import Image from 'next/image';
import contact from '@/public/assets/contact/contact_us.png';

export default function ContactUs() {

  const onSubmit = (values: any, reset: () => void) => {
    console.log(values);
    reset();
  };

  return (
    <div className='flex gap-4 flex-col md:flex-row items-center px-2 2xl:px-0'>
      <div className='w-full md:w-1/2'>
        <AppForm onSubmit={onSubmit}>
          <div className='flex flex-col gap-4'>
            <div>
              <TextInputField name='name' label='Name' placeholder='Enter your name' />
            </div>
            <div>
              <TextInputField name='email' label='Email' placeholder='Enter your email' />
            </div>
            <div>
              <TextInputField name='whatsapp' label='Whatsapp' placeholder='Enter whatsapp number' />
            </div>
            <div>
              <TextAreaField name='message' label='Message' placeholder='Enter your message' />
            </div>
            <div>
              <Button type='submit' className='w-full bg-[#540863]'>Send Message</Button>
            </div>
          </div>
        </AppForm>
      </div>
      <div className='w-full md:w-1/2'>
        <Image src={contact} alt='contact' width={500} height={500} />
      </div>
    </div>
  )
}
