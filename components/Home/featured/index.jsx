import React, { useState } from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { useSelector } from "react-redux";

function Featured() {

  const [hov, setHov] = useState(0);
  const { products, homeData } = useSelector((state) => state.home);
  const data = [
    {
      id: 1,
      text: "Natu Bottles Packaging",
      link: "packagingdesign",
      image: "/image/f1.png"
    }, {
      id: 1,
      text: "Natu Bottles Packaging",
      link: "packagingdesign",
      image: "/image/f2.png"
    }, {
      id: 1,
      text: "Natu Bottles Packaging",
      link: "packagingdesign",
      image: "/image/f3.png"
    }, {
      id: 1,
      text: "Natu Bottles Packaging",
      link: "packagingdesign",
      image: "/image/f4.png"
    }, {
      id: 1,
      text: "Natu Bottles Packaging",
      link: "packagingdesign",
      image: "/image/f5.png"
    }, {
      id: 1,
      text: "Natu Bottles Packaging",
      link: "packagingdesign",
      image: "/image/f6.png"
    }, 
    // {
    //   id: 1,
    //   text: "Natu Bottles Packaging",
    //   link: "packagingdesign",
    //   image: "/image/f1.png"
    // },
  ]

  return (
    <div className="main_featured">
      <div className="featured">
        <h2>{homeData?.homepage && homeData?.homepage[0]?.text2}</h2>
      </div>
      <Container>
        <div className="featured_box">
          <div className="first_Section">
            <div>
              {/* <Link href={homeData?.featured_products ? homeData?.featured_products[0]?.slug : "/"}> */}
              {/* <img src={homeData?.featured_products && homeData?.featured_products[0]?.photo[0]} width={433} height={860} /> */}
              <div className="content">
                {/* <Link href={homeData?.featured_products && homeData?.featured_products[0]?.photo[0]}> */}
                <div className="content-overlay"></div>
                <img className="content-image" src={data[0].image} alt="content image"/>
                <div className="content-details fadeIn-left">
                  <h3>Bottle Labels</h3>
                  <Link href="/bottle-labels"> <p>Shop Now <span> <Image src="/image/arrowrightt.png" width={10} height={10} alt="arrow icon" /> </span></p></Link>
                </div>
                
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="section_two">
            <div>
              {/* <Link href={homeData?.featured_products ? homeData?.featured_products[2]?.slug : "/"}> */}
              {/* <img className="second_section" src={homeData?.featured_products && homeData?.featured_products[2]?.photo[0]} width={735} height={448} /> */}
              <div className="content">
                {/* <Link href={homeData?.featured_products && homeData?.featured_products[0]?.photo[0]}> */}
                <div className="content-overlay"></div>
                <img className="content-image" src={data[1].image} />
                <div className="content-details fadeIn-top">
                  <h3>Product Box</h3>
                  <Link href="/product-box"> <p>Shop Now <span> <Image src="/image/arrowrightt.png" width={10} height={10} alt="arrow icon" /> </span></p></Link>
                </div>
                {/* </Link> */}
              </div>
              {/* </Link> */}
            </div>
            <div className="second">
              <div onMouseEnter={() => setHov(4)} onMouseLeave={() => setHov(0)} className="hov_effect4">
                {/* <Link href={homeData?.featured_products ? homeData?.featured_products[3]?.slug : "/"}> */}
                {/* <img src={homeData?.featured_products && homeData?.featured_products[3]?.photo[0]}   width={361} height={407} /> */}
                <div className="content">
                  {/* <Link href={homeData?.featured_products && homeData?.featured_products[0]?.photo[0]}> */}
                  <div className="content-overlay"></div>
                  <img className="content-image" src={data[2].image} alt="content image"/>
                  <div className="content-details fadeIn-bottom">
                    <h3>Brochures</h3>
                    <Link href="/brochures"> <p>Shop Now <span> <Image src="/image/arrowrightt.png" width={10} height={10} alt="arrow icon"/> </span></p></Link>
                  </div>
                  {/* </Link> */}
                </div>
              </div>
              <div onMouseEnter={() => setHov(5)} onMouseLeave={() => setHov(0)} className="hov_effect5">
                {/* <Link href={homeData?.featured_products ? homeData?.featured_products[4]?.slug : "/"}> */}
                {/* <img src={homeData?.featured_products && homeData?.featured_products[4]?.photo[0]}   width={361} height={407} /> */}
                <div className="content">
                  {/* <Link href={homeData?.featured_products && homeData?.featured_products[0]?.photo[0]}> */}
                  <div className="content-overlay"></div>
                  <img className="content-image" src={data[3].image} alt="content image"/>
                  <div className="content-details fadeIn-bottom">
                    <h3>Metallic Label</h3>
                    <Link href="/metallic-labels"> <p>Shop Now <span> <Image src="/image/arrowrightt.png" width={10} height={10} alt="arrow icon"/> </span></p></Link>
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="third_section">
            <div onMouseEnter={() => setHov(6)} onMouseLeave={() => setHov(0)} className="hov_effect6">
              {/* <Link href={homeData?.featured_products ? homeData?.featured_products[5]?.slug : "/"}> */}
              {/* <img className="one_image" src={homeData?.featured_products && homeData?.featured_products[5]?.photo[0]} width={441} height={448} /> */}
              <div className="content">
                {/* <Link href={homeData?.featured_products && homeData?.featured_products[0]?.photo[0]}> */}
                <div className="content-overlay"></div>
                <img className="content-image" src={data[4].image} alt="content image"/>
                <div className="content-details fadeIn-right">
                  <h3>Custom Box</h3>
                  <Link href="/custom-boxes"> <p>Shop Now <span> <Image src="/image/arrowrightt.png" width={10} height={10} alt="arrow icon" /> </span></p></Link>
                </div>
                {/* </Link> */}
              </div>
            </div>
            <div onMouseEnter={() => setHov(7)} onMouseLeave={() => setHov(0)} className="hov_effect7">
              {/* <Link href={homeData?.featured_products ? homeData?.featured_products[6]?.slug : "/"}> */}
              {/* <img className="two_image" src={homeData?.featured_products && homeData?.featured_products[6]?.photo[0]} width={441} height={407} />  */}
              <div className="content">
                {/* <Link href={homeData?.featured_products && homeData?.featured_products[0]?.photo[0]}> */}
                <div className="content-overlay"></div>
                <img className="content-image" src={data[5].image} alt="content image"/>
                <div className="content-details fadeIn-right">
                  <h3>Custom Mylar Bag</h3>
                  <Link href="/custom-mylar-bags"> <p>Shop Now <span> <Image src="/image/arrowrightt.png" width={10} height={10} alt="arrow icon" /> </span></p></Link>
                </div>
                {/* </Link> */}
              </div>
      
            </div>
          </div>
        </div>
        <div className="featured_box2">
          <div className="res_section1">
            <div className="content">
              <div className="content-overlay"></div>
              <img className="content-image" src={data[0].image} alt="content image"/>
              <div className="content-details fadeIn-left">
                <h3>Bottle Labels</h3>
                <Link href="/bottle-labels"> <p>Shop Now <span> <Image src="/image/arrowrightt.png" width={10} height={10} alt="arrow icon" /> </span></p></Link>
              </div>
            </div>
            <div className="res_section1_data1">
              <div className="content">
                {/* <Link href={homeData?.featured_products && homeData?.featured_products[0]?.photo[0]}> */}
                <div className="content-overlay"></div>
                <img className="content-image" src={data?.[4]?.image} alt="content image"/>
                <div className="content-details fadeIn-right">
                  <h3>Custom Box</h3>
                  <Link href="/custom-boxes"> <p>Shop Now <span> <Image src="/image/arrowrightt.png" width={10} height={10} alt="arrow icon" /> </span></p></Link>
                </div>
                {/* </Link> */}
              </div>
              <div className="content">
                {/* <Link href={homeData?.featured_products && homeData?.featured_products[0]?.photo[0]}> */}
                <div className="content-overlay"></div>
                <img className="content-image" src={data?.[2]?.image} alt="content image"/>
                <div className="content-details fadeIn-bottom">
                  <h3>Brochures</h3>
                  <Link href="/brochures"> <p>Shop Now <span> <Image src="/image/arrowrightt.png" width={10} height={10} alt="arrow icon" /> </span></p></Link>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="res_section2">
            <div className="content">
              {/* <Link href={homeData?.featured_products && homeData?.featured_products[0]?.photo[0]}> */}
              <div className="content-overlay"></div>
              <img className="content-image" src={data?.[1]?.image} alt="content image"/>
              <div className="content-details fadeIn-top">
                <h3>Product Box</h3>
                <Link href="/product-box"> <p>Shop Now <span> <Image src="/image/arrowrightt.png" width={10} height={10} alt="arrow icon" /> </span></p></Link>
              </div>
              {/* </Link> */}
            </div>
          </div>
          <div className="res_section3">
            <div className="content">
              {/* <Link href={homeData?.featured_products && homeData?.featured_products[0]?.photo[0]}> */}
              <div className="content-overlay"></div>
              <img className="content-image" src={data?.[3]?.image} alt="content image"/>
              <div className="content-details fadeIn-bottom">
                <h3>Metallic Label</h3>
                <Link href="/metallic-labels"> <p>Shop Now <span> <Image src="/image/arrowrightt.png" width={10} height={10} alt="arrow icon" /> </span></p></Link>
              </div>
              {/* </Link> */}
            </div>
            <div className="content">
              {/* <Link href={homeData?.featured_products && homeData?.featured_products[0]?.photo[0]}> */}
              <div className="content-overlay"></div>
              <img className="content-image" src={data?.[5]?.image} alt="content image"/>
              <div className="content-details fadeIn-right">
                <h3>Custom Mylar Bag</h3>
                <Link href="/custom-mylar-bags"> <p>Shop Now <span> <Image src="/image/arrowrightt.png" width={10} height={10} alt="arrow icon" /> </span></p></Link>
              </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <div className="button">
         <button>{homeData?.homepage && homeData?.homepage[0]?.button_text3}</button> 
        </div>
      </Container>
    </div>
  );
}

export default Featured;
