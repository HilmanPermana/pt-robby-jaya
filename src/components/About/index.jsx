import React, { useRef } from 'react'
import "./About.css"
import { cover_perusahaan,pabrik_1,packaging_1,storage_2} from '../../assets'
import { FaCheck } from 'react-icons/fa'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const About = () => {
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
            ".company__photo",
            {x:-50, opacity:0}
        )
        .from(
            ".title",
            {x:-50, opacity:0}
        )
        .from(
            ".sub__title",
            {y:-50, opacity:0}
        )
        .from(
            ".box",
            {x:50, opacity:0, stagger:.5}
        )
        .from(
            ".description",
            {y:50, opacity:0}
        )
        .from(
            ".group",
            {y:50, opacity:0}
        )
        .from(
            ".buttons__container",
            {y:50, opacity:0}
        )
    }, {scope:container})
    return (
        <section id='about' ref={container}>
            <div className='container'>
                <div className='column company__photo'>
                    <img src={cover_perusahaan} alt='Benvix'/>
                </div>
                <div className='column'>
                    <h1 className='title'>
                        Tentang <span className='g-text'>Kami</span>
                    </h1>
                    <h3 className='sub__title'>Dari Banten untuk Indonesia: Air Bersih, Hidup Sehat.</h3>
                    <div className='company__media__container'>
                        <div className='box'>
                            <img src={pabrik_1} alt=''/>
                        </div>
                        <div className='box'>
                            <img src={packaging_1} alt=''/>
                        </div>
                        <div className='box'>
                            <img src={storage_2} alt=''/>
                        </div>
                    </div>
                    <p className='text__muted description'>
                        Melihat pertumbuhan ekonomi kota Serang dan sekitarnya, 
                        serta posisi Banten yang berada di atas pegunungan tentunya memiliki 
                        Sumber Mata Air yang bersih.
                        <br></br>
                        <br></br>Maka pada tahun 2022 kami sepakat untuk mendirikan perusahaan yang bergerak  dalam 
                        bidang produksi  Air Minum Dalam Kemasan  
                        ( AMDK ) yang berkualitas dari sumber mata air Alami pegunungan, 
                        sehingga dapat memberikan dampak ekonomi sekitar wilayah Cijengkol, Cisalam Serang Banten.
                        <br></br>
                        <br></br>PT. Robby Jaya AMDK didirikan atas dasar visi dan misi untuk menyediakan air minum 
                        yang berkualitas, yang berasal dari sumber mata air pegunungan yang alami dan murni di 
                        wilayah Banten. Melihat segala kebutuhan air bersih dan sehat yang terus meningkat, 
                        kami terdorong untuk turut berkontribusi, tidak hanya dalam hal Kesehatan Masyarakat, 
                        tetapi juga dalam pertumbuhan ekonomi lokal.

                    </p>
                    <div className='group'>
                        <div className='row'>
                            <div className='icon__container'>
                                <FaCheck/>
                            </div>
                            <div className='details'>
                                <p className='text__muted'>Air</p>
                                <h3>Aman</h3>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='icon__container'>
                                <FaCheck/>
                            </div>
                            <div className='details'>
                                <p className='text__muted'>Alam</p>
                                <h3>Lestari</h3>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='icon__container'>
                                <FaCheck/>
                            </div>
                            <div className='details'>
                                <p className='text__muted'>Kualitas</p>
                                <h3>Terjaga</h3>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='icon__container'>
                                <FaCheck/>
                            </div>
                            <div className='details'>
                                <p className='text__muted'>Pertumbuhan</p>
                                <h3>Ekonomi Lokal</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default About
