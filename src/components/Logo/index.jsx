import React from 'react'
import "./Logo.css"
import { logo_perusahaan } from "../../assets"

const Logo = () => {
  return (
    <div className='logo'>
        <div className='icon__container'>
            <img src={logo_perusahaan} alt="Logo Perusahaan"/>
        </div>
        <h1 className='name'>PT.ROBBY<span> JAYA AMDK</span></h1>
    </div>
  )
}

export default Logo
