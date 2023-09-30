import React from 'react'
import WorkImg from '../assets/work.jpg'
const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen  text-gray-200 bg-[#1a1a2d]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-200 border-red-600'><br></br><br></br>Work</p>
                <p className='py-6'>--&gt; This is my work done at recent</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-[100px]'>
                <div style={{backgroundImage:`url(${WorkImg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracjing-wider'> Digitrans Website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://www.digitranss.com/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                            </a>
                            <a href="https://github.com/joelwalice/digitrans-web-dev.git" target="_blank">
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${WorkImg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracjing-wider'> JS StopWatch App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://stop-watch-using-java-script.vercel.app/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                            </a>
                            <a href="https://github.com/joelwalice/StopWatch-using-JavaScript.git" target="_blank">
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${WorkImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracjing-wider'> CSS Form Application 
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://joelwalice.github.io/RegistrationForm/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                            </a>
                            <a href="https://github.com/joelwalice/RegistrationForm.git" target="_blank">
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                            </a>
                        </div>
                    </div>
                </div>
                 <div style={{backgroundImage:`url(${WorkImg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracjing-wider'> Quiz NextJs Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://quiz-app-next-js-ecru.vercel.app/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                            </a>
                            <a href="https://github.com/joelwalice/QuizApp-NextJS.git" target="_blank">
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
  )
}

export default Work