import Link from 'next/link';
import React from 'react'
import { Container } from 'react-bootstrap';

function CategoryNewMobile() {

  const slides = [
    {
      imgSrc: '/image/newcategory/boxandpackaging.webp',
      title: 'Box Packaging',
      links: "/category/boxes-packaging-custom-boxes"
    },
    {
      imgSrc: '/image/newcategory/mylarbags.webp',
      title: 'Mylar Bags',
      links: "/category/mylar-bags-mylar-pouch"
    },
    {
      imgSrc: '/image/newcategory/labelsandstickers.webp',
      title: 'Labels & Stickers',
      links: "/category/labels-stickers-custom-labels"
    },
    {
      imgSrc: '/image/newcategory/businesscards.webp',
      title: 'Business Cards',
      links: "/category/signs-banners-banner"
    },
    // {
    //   imgSrc: '/image/newcategory/designandlogo.webp',
    //   title: 'Design & Logo',
    //   links: "/category/design-logo-design-service"
    // },
    {
      imgSrc: '/image/newcategory/printproducts.webp',
      title: 'Print Products',
      links: "/category/print-products-print-products"
    },
    {
      imgSrc: '/image/newcategory/signandbanners.webp',
      title: 'Signs & Banners',
      links: "/category/signs-banners-banner"
    },
  ];

  return (
    <div className='main_catsliderMob'>
      <Container>
        {/* <h2>The Inspiring Custom Packaging Boxes!</h2> */}
        <h2>Let{"’"}s Make the Right Custom Packaging Boxes</h2>
        <p>We believe in custom box packaging that becomes the first reference point for every retail product.
          Our motto is, ‘You start a business and leave the packaging to us.’
          Hence our exclusive and on-site printing and packaging facilities make us a qualitative, quantitative,
          and quintessential packaging choice.</p>
      </Container>
      <div style={{ marginBottom: "50px" }}></div>
      <Container>
        <div className='grid_catslider'>
          {slides.map((slide, index) => (
            <div key={index} className="slide_mobImgesCat">
              <Link style={{ outline: "none" }} href={slide.links}>
                <img className="slider_imgMobCat" src={slide.imgSrc} alt={slide.title} />
              </Link>
              <div className="main_roundedCatMob">
                <Link href={slide.links}>
                  <div className="home_roundedCatMob">
                    <h3 className='title_headingMobCat'>{slide.title}</h3>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default CategoryNewMobile
