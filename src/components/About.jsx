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
        <div className='max-w-[900] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl mt-10 font-bold'>
                <p>Hi, I am Joel. Glad you are here. <br></br> You can know about<br></br> me here.</p>
            </div>
            <div>
                <p className='mb-5 sm:text-0.8xl justify-center items-center'>I am a Pre-Final Year CSBS Student. I am a passionate Web Developer familiar in <span className='text-indigo-400'><b><i>React JS</i></b></span>, <span className='text-gray-400'><b><i>Next JS</i></b></span>, <span className='text-red-400'><b><i>Node JS</i></b></span>,  <span className='text-yellow-400'><b><i>Mongo DB</i></b></span> and <span className='text-violet-400'><b><i>Tailwind CSS</i></b></span>.
                    Currently I am learning Backend Development using Python Django Framework. I would love to learn new Technologies. I am a <span className='text-green-400'><b><i>4 Star Python Developer in Hackerrank</i></b></span>. I am a self taught Video Editor.
                    I am a Video Editor familiar in softwares like <span className='text-red-300'><b><i>Adobe Premiere Pro</i></b></span>, <span className='text-blue-300'><b><i>Adobe After Effects</i></b></span> and <span className='text-yellow-300'><b><i>daVinci Resolve</i></b></span> (Especially for Color Grading).
                    I have done many virtual Internships on Web Development and Video Editing in Internshala Platform.
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