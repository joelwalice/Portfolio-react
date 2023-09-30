import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1a1a2d]'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
            <p className='text-red-600  text-2xl font-bold'><br></br><br></br>Hey, I am</p>
            <h1 className='text-4xl py-3 sm:text-6xl font-bold text-[#ffffff]'>Joel Walice</h1>
            <h1 className='text-2xl py-2 sm:text-4xl grid sm:grid-cols-2 gap-8 font-bold text-[#8988b0]'>I am MERN Stack Web Developer and a Video Editor.</h1>
            <p className='text-[#f9d8d8] py-4 max-w-[700px]'>I am a Web Developer who develops websites based on the ideas that pop ups in my Mind.
            </p>
            <div>

                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600 hover:font-bold'>
                <Link to="about" smooth={true} duration={500}>View Me</Link>
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home