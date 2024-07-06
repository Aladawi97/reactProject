import React from 'react'
import {  home, social } from '../data/dummydata'
import Typewriter from "typewriter-effect"
import { Link } from 'react-router-dom/cjs/react-router-dom'
export const Hero = () => {
 
  return (
    <>
    
      <section className='hero'>
            {home.map((val , i)=>(
                <div className='heroContainer'>
                    <h3 className='fontSize' data-aos='fade-right'>
                        {val.text}</h3>
                        <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
                    <p data-aos='fade-left'>{val.desc}</p>
                    
                    {social.map((item )=>(
                      <a href={item.urll}><i>{item.icon}</i></a> 
                    ))}
                    <br />
                    <button className='primaryBtn' data-aos='fade-up-right' >
                      Download CV
                    </button>
                    
                    
                    <Link to="/contact">
                    <button className='btnConnect' data-aos='fade-up-right' >Let's Connect</button>
                    </Link>
                </div>
            ))}
        <div class="image">
            <img src="./images/yih2.webp" alt="" />
        </div>
        </section>
        
    
        
    </>
  )
}
