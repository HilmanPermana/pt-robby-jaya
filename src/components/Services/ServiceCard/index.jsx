import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({
    name,
    icon,
    description
}) => {
  return (
    <div className='service__card'>
        <div className='image__container'>
            <img src={icon} alt='Proses Produksi'/>
        </div>
        <h3 className='name'>{name}</h3>
    </div>
  )
}

export default ServiceCard
