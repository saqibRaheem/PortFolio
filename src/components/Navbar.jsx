import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
// import {logos} from '../assets/logos.png'
import { styles } from '../styles';
import { navLinks } from '../constants'
import { logos, menu, close} from '../assets'

const Navbar = () => {
   const[active,setActive] = useState()
  
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
       <ul className="list-none hidden sm:flex flex-row gap-10">
        {
          navLinks.map((link)=>{
            console.log(link.title);
            <li>
              <a className='text-white' href={`#${link.id}`}>{link.title}</a>
            </li>
          })
        }
       </ul>
      </div>

    </nav>
  )
}

export default Navbar 