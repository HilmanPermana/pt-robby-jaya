import React, {useRef, useState, useEffect} from 'react'
import "./Project.css"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from '../../data';
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger) 

const Project = () => {
    const settings = {
        infinite: true,
        speed: 3000,
        slidesToShow: 2,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
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
    }, {scope:container});

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getImageSrc = (project) => {
        if (windowWidth <= 600) return project.image_resp;
        if (windowWidth <= 700) return project.image_resp;
        if (windowWidth <= 1040) return project.image_resp;
        return project.image;
    };
    return (
        <section id='project' ref={container}>
            <div className='project__top'>
                <h1 className='title'>Produk <span className='g-text'>Kami</span></h1>
                <h3 className='sub__title'>
                    Air Mineral Berkualitas, Untuk Anda yang Terbaik.
                </h3>
            </div>
            <Slider { ...settings } className='projects__container'>
                {
                    projects.map((project,index)=>(
                        <React.Fragment key={index}>
                            <div className='image__container'>
                                <img src={getImageSrc(project)} alt={project.title}/>
                            </div>
                            <div className='box'>
                                <h1 className='name'>{project.title}</h1>
                            </div>
                        </React.Fragment>
                    ))
                }
            </Slider>
        </section>
    )
}

export default Project
