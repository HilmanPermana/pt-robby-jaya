import React, { useRef } from 'react'
import "./Teams.css"
import { teams } from '../../data'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger) 

const Teams = () => {
  const container = useRef(null)
  useGSAP(()=>{
      const timeline = gsap.timeline({
          delay:.5,
          scrollTrigger:{
              trigger:container.current,
              start:"20% bottom",
              end:"bottom top",
          }
      })
      timeline
      .from(
          ".title",
          {x:-50, opacity:0}
      )
      .from(
          ".sub__title",
          {y:-50, opacity:0}
      )
      .fromTo(
          ".team__card",
          {x:100,opacity:0}, 
          {opacity:1,stagger:.5,x:0}
      )
  }, {scope:container})
  return (
    <section id='team' ref={container}>
      <div className='container'>
        <h1 className='title'>Tim <span className='g-text'>Kami</span></h1>
        <h3 className='sub__title'>
          Bersama, Kami Mengalirkan Manfaat dari Alam untuk Anda.
        </h3>
        <div className='teams__container'>
          {
            teams.map((team,index)=>(
              <div className='team__card' key={index}>
                <div className='profile__container'>
                  <img src={team.profile} alt={team.name}/>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Teams
