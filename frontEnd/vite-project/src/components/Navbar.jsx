import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex gap-6 md:gap-10 items-center my-2 justify-center'>
        <div className='text-[15px] md:text-[22px]'>
            <ul className='flex gap-5 md:gap-8 text-center items-center justify-center'>
                <li className='px-2 py-1 text-[24px] md:text-[23px]'>Mern</li>
                <li className='px-2 py-1 bg-slate-200 rounded-[7px]' > <Link to="/">Create post</Link> </li>
                <li className='px-2 py-1 bg-slate-200 rounded-[7px]'><Link to="/all">All post</Link></li>
            </ul>
        </div>
    </div>
       
    </>
  )
}

export default Navbar