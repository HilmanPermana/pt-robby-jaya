import React from 'react'
import "./Footer.css"
import Logo from "../Logo"
import { footer } from '../../data'
import { Link } from "react-scroll"

const Footer = () => {
  return (
    <footer id="footer">
      <div className='container'>
        <div className='row'>
          <div className='column'>
            <Logo/>
            <form className='newsletter'>
              <h3>Dapatkan Informasi Terbaru</h3>
              <div className='control__container'>
                <input type="email" placeholder='Masukkan alamat email' className='control'/>
                <button className='btn' type='button'>Subscribe</button>
              </div>
            </form>
          </div>
          {
            footer.map((list,index)=>(
              <div className='column' key={index}>
                <div className='routes__name'>{list.name}</div>
                <div className='routes__container'>
                  {
                    list.routes.map((route,i)=>(
                      <Link to={route.id} className='route__item' key={i}>
                        <p className='name'>{route.name}</p>
                      </Link>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='copyright'>
          <div className='container'>
            <h3>@Office PT. Robby Jaya Amdk</h3>
          </div>
      </div>
    </footer>
  )
}

export default Footer
