import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full px-4 py-8 bg-black text-white flex justify-center'>
     <div className='max-w-[1240px] flex flex-col justify-center items-center'>
        <h1>Join Our DeFi Community</h1>
        <div>
            <input className='p-3 rounded-3xl mt-2'type='email' placeholder='Enter your Email'/>
            <button className='ml-5'>Sign Up</button>
        </div>
        <div className='flex items-center justify-center mt-4 py-2'>
            <input type='checkbox'/>
            <p>Yes, I agree to recieve email communition from DeFi</p>
        </div>
    </div>
    </div>
  )
}

export default Subscribe