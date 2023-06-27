import React from 'react'
import Gmail from '../assets/gmail.png'
import Github from '../assets/github.png'
import Whatsapp from '../assets/whatsapp.png'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-200px  bg-[#1a1a2d] text-gray-200'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-red-600'><br></br>Contact</p>
          <p className='py-6'>You Can Contact me through media links....</p>
        </div>
        {/*Social Icons*/}
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-6 items-center justify-center'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=joelwalice@gmail.com&tf=1" target='_blank'>
                <img className='w-20 mx-auto' src={Gmail} alt="HTML Icon"></img>
                <p className='my-4'>GMAIL</p>
                </a>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href='https://github.com/joelwalice' target='_blank'>
                <img className='w-20 mx-auto' src={Github} alt="HTML Icon"></img>
                <p className='my-4'>GITHUB</p>
                </a>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <a href="https://api.whatsapp.com/send/?phone=%2B919750963670&text&type=phone_number&app_absent=0" target="_blank">
                  <img className='w-20 mx-auto' src={Whatsapp} alt="HTML Icon"></img>
                <p className='my-4'>WHATSAPP</p>
                </a>
                </div>
      </div>
      </div>
      <footer className="text-center text-gray-500 py-4">
  <p>CopyRight © {new Date().getFullYear()} Developed by Joel W. All rights reserved.</p>
</footer>
    </div>
  )
}

export default Contact;