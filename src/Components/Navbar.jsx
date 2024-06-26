import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [nav,setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }


  return (
    <div className='w-full h-[90px] bg-black'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
            <div className='text-[--primary-blue]'> 
                <h1>DEFI</h1>
            </div>
            <div className='hidden md:flex'>
               <ul className='flex text-white items-center'>
                 <li>Platforms</li>
                 <li>Developers</li>
                 <li>Company</li>
                 <li>About</li>
               <button className='ml-4'>Use Defi</button>
               </ul>
            </div>
            {/* hamburger icon */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav? <AiOutlineClose size={30} className='text-white'/> : <AiOutlineMenu size={30} className='text-white'/>}
               
            </div>
            {/* afer clicking hamburger- mobile menu */}
            <div className={nav ? 'w-full h-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>
            <ul>
                 <li className='text-xl'> Platforms</li>
                 <li className='text-xl'> Developers</li>
                 <li className='text-xl'> Company</li>
                 <li className='text-xl'> About</li>
               <button className='m-8'>Use Defi</button>
               </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar