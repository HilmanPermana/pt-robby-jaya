import React, {useRef} from 'react'
import "./Contact.css"
import { contacts } from '../../data'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Swal from 'sweetalert2'
gsap.registerPlugin(ScrollTrigger) 

const Contact = () => {
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
        .fromTo(
            ".contact__form",
            {x:-100, opacity:0},
            {opacity:1,x:0}
        )
        .fromTo(
            ".option",
            {x:100,opacity:0}, 
            {opacity:1,stagger:.5,x:0}
        )
    }, {scope:container})

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "7fd00a06-0fc7-4616-9832-b364545ca21b");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Sukses",
                text: "Pesan Berhasil Terkirim.",
                icon: "success"
            });
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }
    
    return (
        <section id='contact' ref={container}>
            <div className='container'>
                <form className='contact__form' onSubmit={onSubmit}>
                    <div className='contact__form__top'>
                        <h1 className='title'>
                            <span className='g-text'>Hubungi Kami</span>
                        </h1>
                        <p className='text__muted'>
                            Kami siap menyediakan solusi air mineral terbaik untuk Anda—hubungi kami untuk konsultasi, 
                            penawaran khusus, atau kerja sama distribusi.
                        </p>
                    </div>
                    <div className='contact__form__middle'>
                        <div className='row'>
                            <input type='text' placeholder='Nama depan' name='firstname' className='control' required/>
                            <input type='text' placeholder='Nama belakang' name='lastname' className='control' required/>
                        </div>
                        <div className='row'>
                            <input type='email' placeholder='Alamat email' name='email' className='control' required/>
                            <input type='tel' placeholder='Nomor telepon' name='phone' className='control' required/>
                        </div>
                        <textarea name='message' cols={30} rows={10} placeholder='Pesan' className='control' required></textarea>
                    </div>
                    <div className='contact__form__bottom'>
                        <button type="submit" className='btn btn__primary'>Kirim</button>
                    </div>
                </form>
                <div className="contact__options">
                    {
                        contacts.map((contact,index)=>(
                            <div className='option' key={index}>
                                <div className='icon__container'>
                                    {contact.icon}
                                </div>
                                <h3 className='name'>{contact.name}</h3>
                                <h4 className='text__muted'>{contact.value}</h4>
                                <div>
                                    <a href={"https://wa.link/7ldt1h"} className='btn btn__primary'>Hubungi Kami</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Contact
