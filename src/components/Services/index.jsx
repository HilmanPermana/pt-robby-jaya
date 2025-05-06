import React, { useRef } from 'react'
import "./Services.css"
import { services } from '../../data'
import ServiceCard from './ServiceCard'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger) 

const Services = () => {
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
            ".service__card",
            {y:100,opacity:0}, 
            {opacity:1,stagger:.5,y:0}
        )
    }, {scope:container})
  return (
    <section id='services' ref={container}>
      <div className='container'>
        <div className='services__top'>
          <h1 className='title'>Proses <span className='g-text'>Produksi</span></h1>
          <h3 className='sub__title'>Memastikan kemurnian dan kualitas setiap tetes air yang dihasilkan</h3>
          <br></br>
          <p>
              Diawali dari sumber air alami seperti mata air. 
              Air kemudian diproses melalui serangkaian 
              proses Filterisasi,Pemurnian, dan Uji Laboratorium
              sehingga menghasilkan air yang sehat 
              bagi masyarakat.
 
              Prosedur ini menjamin air yang dihasilkan 
              aman untuk diminum dan memenuhi 
              standar kualitas yang berlaku
          </p>
        </div>
        <div className='services__container'>
          {
            services.map((service,index)=>(
              <ServiceCard
                icon={service.icon}
                name={service.name}
                description={service.description}
                key={index}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services
