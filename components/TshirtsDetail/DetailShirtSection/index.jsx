import ProductAttributes from "@/components/Details/attributs";
import EditProductAttributes from "@/components/Details/editAttributes";
import EstimatedModal from "@/components/common/EstimatedModal";
import ShareModal from "@/components/common/ShareModal";
import ShippingModal from "@/components/common/ShippingModal";
import Loader from "@/components/common/loaders";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function DetailShirtSection() {

  const [selected, setSelected] = useState(2);
  const [modalOpen, setModalOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("1");
  const [size, setSize] = useState("1");
  const [shareModal, setShareModal] = useState(false);
  const [quantity, setQuantity] = useState("1");
  const [loader, setLoader] = useState(false);


  const { detailData } = useSelector((state) => state.detail);

  const photo = detailData?.photo ? JSON.parse(detailData?.photo) : null;

  const router = useRouter()

  const data = [
    {
      id: 1,
      image: "/image/woshirt1.png",
    },
    {
      id: 2,
      image: "/image/woshirt2.png",
    },
    {
      id: 3,
      image: "/image/woshirt3.png",
    },
    {
      id: 4,
      image: "/image/woshirt4.png",
    },
  ];

  const pagePath = router?.pathname === "/edit/[id]/[code]"

  return (
    <div className="backgroundd-detailsectionn">
      {/* {loader && <Loader />} */}
      <Container>
        <div className="main-detailsections">
          <div className="main-outside-boxes">

            <div className="main_products_shirtss">
              {data?.map((items, index) => {
                return (
                  <div className="bottom-shirts" key={index}>
                    <div className="head_shirts_image">
                      <div className="image_shirt">
                        <Image src={items.image} alt="head shirts image" width={330} height={470} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {
            pagePath ? <EditProductAttributes loader={loader} setLoader={setLoader} /> : <ProductAttributes loader={loader} setLoader={setLoader} />
          }
        </div>
      </Container>
      {/* <ShareModal shareModal={shareModal} setShareModal={setShareModal}/> */}
    </div>
  );
}

export default DetailShirtSection;

