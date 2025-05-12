import React, {useRef} from 'react'
import "./Blog.css"
import { blogs } from '../../data'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger) 
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Blog = () => {
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
            ".blog__card",
            {y:100,opacity:0}, 
            {opacity:1,stagger:.5,y:0}
        )
    }, {scope:container})

    const pdfFiles = [
        { name: 'Dokumen 1', url: 'https://drive.google.com/file/d/18XLkZSeS5qUyxKfEuHEhDZ_H75ZdC0vm/view?usp=sharing' },
        { name: 'Dokumen 2', url: '/pdfs/dokumen2.pdf' },
        { name: 'Dokumen 3', url: '/pdfs/dokumen3.pdf' },
    ];
    return (
        <section id='blog' ref={container}>
            <div className='container'>
                <h1 className='title'>
                    <span className='g-text'>Sertifikasi</span>
                </h1>
                <div className='blogs__container'>
                    {
                        blogs.map((blog,index)=>(
                            <div className='blog__card' key={index}>
                                <p className='category'>{blog.category}</p>
                                <div className='picture'>
                                    <img src={blog.image} alt=''/>
                                </div>
                            </div>  
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Blog
