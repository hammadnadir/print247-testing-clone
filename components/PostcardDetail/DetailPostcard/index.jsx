import ProductAttributes from "@/components/Details/attributs";
import EditProductAttributes from "@/components/Details/editAttributes";
import EstimatedModal from "@/components/common/EstimatedModal";
import ShippingModal from "@/components/common/ShippingModal";
import Loader from "@/components/common/loaders";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function DetailPostcard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  const router = useRouter();
  const pagePath = router?.pathname === "/edit/[id]/[code]"
  
  const { detailData } = useSelector((state) => state.detail);

  const photo = detailData?.photo ? JSON.parse(detailData?.photo) : null;

  const data = [
    {
      id: 1,
      image: "/image/calend1.png",
    },
  ];

  const data2 = [
    {
      id: 1,
      image: "/image/calend2.png",
    },
    {
      id: 2,
      image: "/image/calend3.png",
    },
  ];

  return (
    <div className="background-detailpostscards">
      {/* {loader && <Loader />} */}
      <Container>
        <div className="main-detailpostscards">
          <div className="main-postscards-boxes">
            <div className="main_postscards_envelop">
              {data.slice(0, 2).map((items, index) => {
                return (
                  <div className="bottom_postscards" key={index}>
                    <div className="head_envelop_image">
                      <div className="image_postscards">
                        <Image src={items.image} width={620} height={420} alt="product image"/>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="main_postscards_enveloptwo">
              {data2.map((items, index) => {
                return (
                  <div className="bottom-postscardstwo" key={index}>
                    <div className="head_envelop_image">
                      <div className="image_postscardstwo">
                        <Image src={items.image} width={310} height={420} alt="product image"/>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>
          {
            pagePath ? <EditProductAttributes loader={loader} setLoader={setLoader}/> : <ProductAttributes loader={loader} setLoader={setLoader}/> 
          }
        </div>
      </Container>
    </div>
  );
}

export default DetailPostcard;
