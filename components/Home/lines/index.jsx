import React from 'react'
import { Container } from 'react-bootstrap'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { capitalizeAllWords, capitalizeFirstWord } from '@/utils';

function Lines() {

  const { products , homeData } = useSelector((state) => state.home);

  const image1= homeData?.homepage?.[0]?.image.split(',')?.[0];
  const image2= homeData?.homepage?.[0]?.image.split(',')?.[1];

  return (
    <div className='main_line'>
      <div className='line_image'>
        <Container>

          {/* <img className='image_one' src={homeData?.homepage && JSON.parse(homeData?.homepage[0]?.image)[0]} width={1272} height={1087}/> */}
          {/* <img className='image_two' src={homeData?.homepage && JSON.parse(homeData?.homepage[0]?.image)[1]} width={440} height={826}/> */}
          <img className='image_one' src={image1} width={1272} height={1087} alt='main image'/>
          <img className='image_two' src={image2 ?? image1} width={440} height={826} alt='main image'/>

          <div className='lines_data'>
            <h2>{homeData?.homepage && capitalizeFirstWord(homeData?.homepage[0]?.heading3)}</h2>
            <p>{homeData?.homepage && homeData?.homepage[0]?.paragraph}</p>
            <div className='button'>
              <Link href="/about-us"><button>{homeData?.homepage && capitalizeAllWords(homeData?.homepage[0]?.button_text2)}</button></Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Lines
