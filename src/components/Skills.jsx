import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css-3.png'
import JS from '../assets/js.png'
import PP from '../assets/premiere-pro.png'
import AE from '../assets/after-effects.png'
import DV from '../assets/daVinci.png'
import TW from '../assets/TailWind.png'
import react from '../assets/structure.png'
import Py from '../assets/python.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-200px bg-[#1a1a2d] text-gray-200'>
        {/*container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-5xl font-bold py-4'></p>
                <p className='text-4xl font-bold inline border-b-4 border-red-600'> <br></br>Skills </p>
                <p className='py-6'> These are the few Tech I am Familiar with...</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-6'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-12 mx-auto' src={HTML} alt="HTML Icon"></img>
                <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-12 mx-auto' src={CSS} alt="HTML Icon"></img>
                <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-12 mx-auto' src={JS} alt="HTML Icon"></img>
                <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-12 mx-auto' src={react} alt="HTML Icon"></img>
                <p className='my-4'>ReactJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-12 mx-auto' src={TW} alt="HTML Icon"></img>
                <p className='my-4'>TailWind CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-12 mx-auto' src={DV} alt="HTML Icon"></img>
                <p className='my-4'>DaVinci Resolve</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-12 mx-auto' src={PP} alt="HTML Icon"></img>
                <p className='my-4'>Adobe Premiere Pro</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-12 mx-auto' src={AE} alt="HTML Icon"></img>
                <p className='my-4 pb-6'>Adobe After Effects</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-12 mx-auto' src={Py} alt="HTML Icon"></img>
                <p className='my-4 pb-6'>Python</p>
                </div>
                
                
            </div>
            
        </div>
        
    </div>
  )
}

export default Skills