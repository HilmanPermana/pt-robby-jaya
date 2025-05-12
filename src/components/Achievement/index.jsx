import React, { useState, useEffect, useRef } from 'react'
import "./Achievement.css"
import { FaHandHoldingDroplet } from 'react-icons/fa6'
import { ImEnlarge } from 'react-icons/im'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { MdWaterDrop } from "react-icons/md";
import { RiGovernmentFill } from "react-icons/ri";

const Achievement = () => {
    const [clients,setClients] = useState(0);
    const [projects,setProjects] = useState(0);
    const [teams,setTeams] = useState(0);
    const [awards,setAwards] = useState(0);
    const container = useRef(null);
    useEffect(()=>{
        const timeOutId = setTimeout(()=>{
            setClients(23);
            setProjects(150);
            setTeams(70);
            setAwards(89);
        },3000)

        return () => clearTimeout(timeOutId)
    }, []) 

    useGSAP(()=>{
        const timeline = gsap.timeline();
        timeline
        .from(
            ".achievement",
            {
                delay:1.5,
                x:100,
                stagger:.5,
                opacity:0,
            }
        )
    }, {scope:container})
  return (
    <div className='achievement__container' ref={container}>

        {/* Start Achievement */}
        <div className='achievement'>
            <div className='icon__container'>
                <FaHandHoldingDroplet/>
            </div>
            <div className='details'>
                <small className='text-muted'><strong>Kualitas Water Treatment Sudah Berstandar SNI & BPOM</strong></small>
            </div>
        </div>
        {/* End Achievement */}

        {/* Start Achievement */}
        <div className='achievement'>
            <div className='icon__container'>
                <ImEnlarge/>
            </div>
            <div className='details'>
                <small className='text-muted'><strong>Pabrik Amdk Terluas di Kota Serang</strong></small>
            </div>
        </div>
        {/* End Achievement */}

        {/* Start Achievement */}
        <div className='achievement'>
            <div className='icon__container'>
                <MdWaterDrop/>
            </div>
            <div className='details'>
                <small className='text-muted'><strong>Mata Air Murni Gunung Ciomas</strong></small>
            </div>
        </div>
        {/* End Achievement */}

        {/* Start Achievement */}
        <div className='achievement'>
            <div className='icon__container'>
                <RiGovernmentFill/>
            </div>
            <div className='details'>
                <small className='text-muted'><strong>Lokasi Dekat Pusat Pemerintahan Banten</strong></small>
            </div>
        </div>
        {/* End Achievement */}

    </div>
  )
}

export default Achievement
