import React, {useRef} from 'react'
import "./Testimonial.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger) 

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 600,
            settings:{
                slidesToShow:1,
                centerPadding: 0,
            }
        }
    ]
  };
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
            ".slick-slide",
            {x:100,opacity:0}, 
            {opacity:1,stagger:.5,x:0}
        )
  }, {scope:container})
  return (
    <section id='testimonial' ref={container}>
        <div className='container'>
          <h1 className='title'>
              Lokasi <span className='g-text'>Alamat</span>
          </h1>
          <div className='testimonial__container'>
            <div className='map__responsive'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.400461316044!2d106.09589609999999!3d-6.2107966999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4221e7f566284f%3A0xf54fccdbeb6bb177!2sPT%20ROBBY%20JAYA.%20AMDK!5e0!3m2!1sid!2sid!4v1746091727967!5m2!1sid!2sid" 
              width="1050" height="450" allowFullScreen
              loading="lazy" referrerPolicy="no-referrer-when-downgrade" 
              title='Google Maps PT Robby Jaya'></iframe>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Testimonial
