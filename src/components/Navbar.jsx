import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
// import {logos} from '../assets/logos.png'
import { styles } from '../styles';
import { navLinks } from '../constants'
import { logos, menu, close} from '../assets'

const Navbar = () => {
   const[active,setActive] = useState()
   const[toggle,setToggle] = useState(false)
  
  return (
    <nav className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <Link 
        to='/' 
        className='flex gap-2 item-center'
        onClick={()=>{
          setActive("")
          window.scrollTo(0,0)
        }}
        >
          <img src={logos} alt="logo" className='object-contain w-9 h-9'/>
          <p className='text-white text-[18px] font-bold cursor-pointer'> Saqib <span className='hidden sm:block'> Web Developer </span> </p>
        </Link>
        {/* <p>gfgdgfhgfhg</p> */}
       <ul className="list-none hidden sm:flex flex-row gap-10">
       {
        navLinks.map((link)=>{
            return(
              <li key={link.id} 
              className={`${
                active === link.title
                ? "text-white"
                : "text-secondary"
              } hover:text-white text-[18px]
              font-medium cursor-pointer`}
              onClick={()=> setActive(link.title)}>
                <a href={`#${link.id}`}>{link.title}</a>
                </li>
            )
        })
       }
       </ul>

       <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={menu} alt="menu" 
        className="w-[28px] h-[28px]
        object-contain cursor-pointer" 
        onClick={()=> setToggle(!toggle)}
        />
       </div>
      </div>

    </nav>
  )
}

export default Navbar 