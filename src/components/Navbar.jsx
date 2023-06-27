import React,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/Logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div class="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1a1a2d] text-gray-100">
        <img src={Logo} alt="Logo Image" style={{width:'150px'}}></img>
        <div>
            <ul className='hidden md:flex'>
                <li className='hover:text-red-700'>
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className='hover:text-red-700'>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li className='hover:text-red-700'>
                    <Link to="skills" smooth={true} duration={500}>Skills</Link>
                    </li>
                <li className='hover:text-red-700'>
                <Link to="work" smooth={true} duration={500}>Work</Link>
                </li>
                <li className='hover:text-red-700'>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>

            </ul>
        </div>
        {/*MenuBar*/}
        <div onClick = {handleClick} className='md:hidden z-10 style={{cursor:pointer}}'>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>
        
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1a1a2d] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>
        
    </div>     
  )
}

export default Navbar