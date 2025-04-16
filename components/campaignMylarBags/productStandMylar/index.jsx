import { boxCompaignData } from "@/data/boxCompaignData";
import { useRouter } from "next/router";
import React from "react";
import { Container } from "react-bootstrap";

function ProductStandMylar({ sectionRef }) {

  const router = useRouter();
  const { id } = router.query;

  const contentTableClass = router.asPath === "/mylar/custom-mylar-bags-a"

  return (
    <div className="product_sticker_margin" ref={sectionRef}>
      <Container>
        <div className={` ${contentTableClass ? "main_product_fold" : "main_product_stand"} `}>
          <div className={`${contentTableClass ? "image_section_fold" : "image_section"} `}>
            <img src={boxCompaignData?.[id]?.productStand?.img} alt="product stand image" />
          </div>
          <div className={`${contentTableClass ? "content_section_mylar" : "content_section"}`}>
            <h2>{boxCompaignData?.[id]?.productStand?.productData}</h2>
            <h3>{boxCompaignData?.[id]?.productStand?.subProductDataOne}</h3>
            <p>{boxCompaignData?.[id]?.productStand?.productParaOne}</p>
            <p>{boxCompaignData?.[id]?.productStand?.productParaFold}</p>
            <h3>{boxCompaignData?.[id]?.productStand?.subProductDataTwo}</h3>
            <p>{boxCompaignData?.[id]?.productStand?.productParaTwo}</p>
            <p>{boxCompaignData?.[id]?.productStand?.productParaMylar}</p>
            <h3>{boxCompaignData?.[id]?.productStand?.subProductDataThree}</h3>
            <p>{boxCompaignData?.[id]?.productStand?.productParaThree}</p>
            <p>{boxCompaignData?.[id]?.productStand?.productParaFour}</p>
            <p>{boxCompaignData?.[id]?.productStand?.productParaFive}</p>

            {contentTableClass ? "" : <div className={`content_table`}>
              {boxCompaignData?.[id]?.productStand?.productContentData?.map((item, index) => (
                <div className="content_div" key={index}>
                  <h4>{item?.title}</h4>
                  <p>{item?.description}</p>
                </div>
              ))}
            </div>}

          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductStandMylar;