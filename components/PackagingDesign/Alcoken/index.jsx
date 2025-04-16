import Image from 'next/image'
import React from 'react'

function Alcoken() {
  return (
    <div className='main_alcoken'>
           <div className='alcoken_image'>
                <Image className='alco_img' src="/image/alcoken.png" alt='alcoken image' layout="fill" objectFit="cover" objectPosition="center" />
            </div>
    </div>
  )
}

export default Alcoken