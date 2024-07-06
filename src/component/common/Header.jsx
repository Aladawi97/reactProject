import {  Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import React, { useState } from 'react'
import { navlink } from '../data/dummydata';
import logoo from "../data/images/logoo.png"
export const Header = () => {
  const [responsive , setResponsive] = useState(false)
  return (
    <>
    <header>
      
        <div className="container flexsb">
          <div className="logo">
              <img  src={logoo} width="150" height="100" alt="" data-aos="zoom-in-right" />    
          </div>
          <div className={responsive ? "hideMinu" : "nav"}>
                {navlink.map((links,i)=>(
                  <Link to={links.url} key={i} data-aos="zoom-in-left"> 
                  {links.text} 
                  </Link>
                ))}
          </div>
          <button className='toggle' onClick={()=>setResponsive(!responsive)}>
            <Menu className='icon'></Menu>
          </button>
        </div>
      </header>
    </>

  )
}

