import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const WhatsappIcon = () => {
    return (
        <div className='whatsapp_icon'>
            <a href="https://api.whatsapp.com/send?phone=18329832323&text=Hi." className="float" target="_blank" aria-labelledby="whatsapp-label">
                <FontAwesomeIcon icon={faWhatsapp} className="my-float" />
                <span id="whatsapp-label" style={{ fontSize: "0.1px", color: "#25D366" }}>W</span>
            </a>
        </div>
    )
}

export default WhatsappIcon;