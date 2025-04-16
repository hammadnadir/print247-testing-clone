import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FormCom from './formCom'
import { campignObj } from '@/data/compaignData';
import { useRouter } from 'next/router';

function PackagingDetailCampign() {

  const router = useRouter()
  const { id } = router.query
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 5000,
    autoplay: true,
    // customPaging: (i) => (
    //   <div className='custom_dot'>
    //     <div className="progress_border"></div>
    //   </div>
    // )
  };

  return (
    <div className='product_detail_campign'>
      <div className='containers'>
        <div className='flex_Section '>
          <div className='product_detail_slider' >
            <Slider {...settings}>
              <div>
                <img src="/image/a-1.webp" alt="Slide 1" />
              </div>
              <div>
                <img src="/image/a-2.webp" alt="Slide 2" />
              </div>
              <div>
                <img src="/image/a-3.webp" alt="Slide 3" />
              </div>
              <div>
                <img src="/image/a46574191697789.65cfb1d444a7e.webp" alt="Slide 3" />
              </div>
            </Slider>
          </div>
          <div className='form_Section_main'>
            <div className='form_section_data'>
              <div className='slide_icon' style={{ display: "flex", justifyContent: "center" }}>
                <img src="/image/Rectangle 29409.png" alt="" />
              </div>
              <h2>{campignObj?.[id]?.title}</h2>
              <p>{campignObj?.[id]?.description}</p>
              <div className='main_form'>

                <FormCom />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackagingDetailCampign