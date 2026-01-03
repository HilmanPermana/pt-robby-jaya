import React from "react";
import "./WhatsappButton.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
    return(
        <a 
            href="https://wa.link/tlzorn"
            className="whatsapp__float"
            target="_blank"
            rel="noopener nooreferrer"
        >
            <FaWhatsapp size={30}/>
        </a>
    )
};

export default WhatsappButton;