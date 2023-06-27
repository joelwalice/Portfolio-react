import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1a1a2d] text-gray-200'>
        
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-4 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-600 '>About</p>
                </div>
                <div></div>
            </div> 
        <div className='max-w-[1000] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl mt-10 font-bold'>
                <p>Hi, I am Joel. Glad you are here. <br></br> You can know about<br></br> me here.</p>
            </div>
            <div>
                <p className='mb-5 sm:text-0.8xl justify-center items-center'>I am a Sophomore Student CSBS I am a passionate Front end Developer familiar in React JS and Tailwind CSS.
                    Currently I am learning Backend Development using Python Django Framework. I would love to learn new Technologies.
                    I am a Video Editor familiar in softwares like <b><i>Adobe Premiere Pro</i></b>, <b><i>Adobe After Effects</i></b> and <b><i>daVinci Resolve</i></b> (Especially for Color Grading).
                    I have done many virtual Internships on Video Editing in Internshala Platform.
                    If you need some work to be done, You can contact me.
                    </p>
            </div>
            <div className='py-10'></div>
        </div>
    </div>
    </div>
  )
}

export default About