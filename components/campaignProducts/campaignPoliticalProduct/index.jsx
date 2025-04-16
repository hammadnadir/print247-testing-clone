import Image from "next/image";
import React, { useState, useCallback } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductAttributes from "../../Details/attributs";
import { useRouter } from "next/router";
import EditProductAttributes from "../../Details/editAttributes";
import ImageViewer from "react-simple-image-viewer";
import { useMediaQuery } from "react-responsive";
import BreadcrumbsCom from "../../common/breadcrumbsCom";

function CampaignPoliticalProduct() {
  const [loader, setLoader] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const { detailData } = useSelector((state) => state.detail);

  const router = useRouter();
  const pagePath = router?.pathname === "/edit/[id]/[code]";

  const photo = detailData?.photo ? JSON.parse(detailData?.photo) : null;

  const images = photo?.map((img) => img);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const isRetina = useMediaQuery({ query: "(max-width: 575px)" });

  const handleView = (index) => {
    if (isRetina) {
      openImageViewer(index);
    }
  };

  return (
    <div className="political-detail-main">
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
      <Container>
        <div className="main_section_political">
          <div className="main_section_inner">
            {/* <div className="breadCrumbs">
              <BreadcrumbsCom />
            </div> */}
            <div className="outer_political">
              <div className="main_outside_political">
                <div className="main_products_political">
                  {photo?.map((items, index) => {
                    return (
                      <div className="bottom" key={index}>
                        <div className="head_env_image">
                          <div className="image_env_political">
                            {items ? (
                              <Image onClick={() => handleView(index)} src={items} width={300} height={400} alt="product image"/>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <div className="main_outside_political">
                <div className="main_products_political">
                    <div className="image_env_political">
                      <Image onClick={() => handleView(index)} src="/image/Mask Group 163.webp" width={300} height={400} alt="product image" />
                    </div>
                </div>
              </div> */}
              {pagePath ? (
                <EditProductAttributes loader={loader} setLoader={setLoader} />
              ) : (
                <ProductAttributes loader={loader} setLoader={setLoader} />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CampaignPoliticalProduct;