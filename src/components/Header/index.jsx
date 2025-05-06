import React, {useRef} from 'react'
import "./Header.css"
import { master_produk } from '../../assets'
import { Link } from 'react-scroll'
import Achievement from '../Achievement'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'

const Header = () => {
  const container = useRef(null);
  useGSAP(()=>{
    const timeline = gsap.timeline({delay:1,stagger:1});
    timeline
    .fromTo( 
      ".image__container",
      {scale:.5,opacity:0,y:150},
      {scale:1,ease:'sine.in',opacity:1,y:0}
    )
    .from(
      ".title",
      {opacity:0,y:-30}
    )
    .from(
      ".description",
      {opacity:0,y:-30}
    )
    .from(
      ".buttons__container",
      {opacity:0,y:40}
    )
  }, {scope:container})
  return (
    <header id="header" ref={container}>
        <div className='container full__height'>
          <div className='row'>
            <div className='column'>
              <h1 className='title'>
                Kualitas Terbaik, {""}
                <span className='g-text'>Dari Mata Air Pegunungan</span>
              </h1>
              <p className='text__muted description'>
              Air minum merupakan sumber kehidupan terpenting bagi manusia. 
              Tanpa air, kehidupan tidak dapat bertahan.
              <br></br>
              <br></br>Segarkan hidup Anda dengan Produk Air Mineral Premium kami.
              <b> CISALAM, BYWI, dan BANTEN WATER</b> Air Mineral. 
              <br></br>Berperan sangat penting dalam menyediakan air minum berkualitas bagi masyarakat.
              </p>
              <div className='buttons__container'>
                <Link to="project" smooth={true} className="btn btn__produk">Produk</Link>
                <Link to="contact" smooth={true} className="btn btn__primary">Kontak</Link>
              </div>
            </div>
            <div className='column'>
              <div className='image__container'>
                <img src={master_produk} alt=""/>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header
