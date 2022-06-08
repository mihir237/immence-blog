import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between border-b-[1px] border-[red] md:px-[5rem] py-[2.5rem] drop-shadow-lg'>
        <Link to="/" className='text-[2rem] text-bold'><span className='text-[2.5rem] font-extrabold text-[red] '>immence</span>-Blog</Link>

        <div className='flex items-center '><input type="text" placeholder="Seacrh" className=' border-[1px] py-[8px] rounded-lg placeholder:italic placeholder:text-slate-400 placeholder:px-[10px]' /> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search " viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></div>
    </div>
  )
}

export default Navbar