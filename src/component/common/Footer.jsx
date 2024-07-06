import React from 'react'
import { social } from '../data/dummydata'

export const Footer = () => {
  return (
    <><footer>
    {social.map((item)=>(
        <a href={item.urll}><i data-aos="zoom-in-left">{item.icon}</i></a>
    ))}    
    <p data-aos="zoom-in-right"> All Right Rescved 2022</p>
    </footer></>
  )
}
