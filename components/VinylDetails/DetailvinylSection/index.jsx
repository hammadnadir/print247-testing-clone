import EstimatedModal from "@/components/common/EstimatedModal";
import ShippingModal from "@/components/common/ShippingModal";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import ImageGallery from "react-image-gallery";
import ProductAttributes from "@/components/Details/attributs";
import { useRouter } from "next/router";
import EditProductAttributes from "@/components/Details/editAttributes";
import { useSelector } from "react-redux";
import Loader from "@/components/common/loaders";
import { Breadcrumb } from "antd";
import BreadcrumbsCom from "@/components/common/breadcrumbsCom";

function DetailvinylSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const { detailData } = useSelector((state) => state.detail);

  const photo = detailData?.photo ? JSON.parse(detailData?.photo) : null;

  const router = useRouter();
  const pagePath = router?.pathname === "/edit/[id]/[code]";

  const data2 = photo?.map((item) => {
    return {
      original: item,
      thumbnail: item,
    };
  });

  return (
    <div className="background-detailsection">
      {/* {loader && <Loader />} */}
      <Container>
        <div className="breadCrumbs">
          <BreadcrumbsCom />
        </div>
        <div className="main-detailsection">
          <div className="main-outside-boxes">
            <div className="main_products_envelop">
              <ImageGallery
                items={data2}
                showPlayButton={false}
                showFullscreenButton={false}
                showNav={false}
                autoPlay={true}
              />
            </div>
          </div>
          {pagePath ? (
            <EditProductAttributes loader={loader} setLoader={setLoader} />
          ) : (
            <ProductAttributes loader={loader} setLoader={setLoader} />
          )}
        </div>
      </Container>
    </div>
  );
}

export default DetailvinylSection;
