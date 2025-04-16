import Image from 'next/image'
import React from 'react'

function Minute() {
    return (
        <div className='main_minute'>
            <div className='minute_image'>
                <Image className='min_img' src="/image/minute.png"  layout="fill" objectFit="cover" objectPosition="center" alt='main minute image' />
            </div>
        </div>
    )
}

export default Minute