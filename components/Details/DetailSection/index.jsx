import ProductAttributes from "@/components/Details/attributs";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import EditProductAttributes from "../editAttributes";

function DetailSection() {
  const [selected, setSelected] = useState({});
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  const { detailData } = useSelector((state) => state.detail);

  const photo = detailData?.photo ? JSON.parse(detailData?.photo) : null;

  const pagePath = router?.pathname === "/edit/[id]/[code]"

  const pageId = router?.query?.id

  const headShowPath = (
    router?.pathname !== "/edit/[id]/[code]" &&
    (pageId === "mailer-boxes" || pageId === "product-boxes" || pageId === "shipping-boxes")
  );

  const data = [
    {
      id: 1,
      image: "/image/Scene1.png",
    },
    {
      id: 2,
      image: "/image/Scene2.png",
    },
    {
      id: 3,
      image: "/image/Scene3.png",
    },
    {
      id: 4,
      image: "/image/Scene4.png",
    },
  ];


  const handleSetSelected = (slug) => {
    setSelected(data);
    router.push(slug);
  };

  const topData = JSON.parse(detailData?.detail_page_head_data);

  useEffect(() => {
    if (topData && topData[0]) {
      setSelected(topData[0]);
    }
  }, [detailData?.detail_page_head_data]);

  return (
    <div className="background-detail">
      <div className={`${headShowPath ? "with_boxes" : "without_boxes"}`}>
        <Container>
          <div className="main-secction">
            <div className="outer_outside_box">
              <div className="adjust_section_width" style={{ position: "relative" }}>
                <div className="inner_top_boxes">
                  {headShowPath &&
                    <div className="outsidee-boxes">
                      <div
                        style={{
                          borderTopLeftRadius: "20px",
                          borderBottomLeftRadius: "20px",
                        }}
                        onClick={() => handleSetSelected("/mailer-boxes")}
                        className={`${pageId === "mailer-boxes"
                          ? "boxes1"
                          : "boxes"
                          }`}
                      >
                        <Image
                          src="/image/mailersmall.png"
                          width={86}
                          height={78}
                          alt="Mailer Box product image"
                        />
                        <h4>Mailer Box</h4>
                      </div>

                      <div
                        onClick={() => handleSetSelected("/product-boxes")}
                        className={`${pageId === "product-boxes"
                          ? "boxes1"
                          : "boxes"
                          }`}
                      >
                        <Image
                          src="/image/productsmall.png"
                          width={86}
                          height={78}
                          alt="Product Box image"
                        />
                        <h4>Product Box</h4>
                      </div>

                      <div
                        style={{
                          borderTopRightRadius: "20px",
                          borderBottomRightRadius: "20px",
                        }}
                        onClick={() => handleSetSelected("/shipping-boxes")}
                        className={`${pageId === "shipping-boxes"
                          ? "boxes1"
                          : "boxes"
                          }`}
                      >
                        <Image
                          src="/image/shippingsmall.png"
                          width={86}
                          height={78}
                        alt="Shipping Box image"
                        />
                        <h4>Shipping Box</h4>
                      </div>
                    </div>
                  }
                </div>

                {photo ? (
                  <div className="main_products_envv">
                    {photo?.map((items, index) => (
                      items && <div className="bottom" key={index}>
                        <div className="head_env_image">
                          <div className="image_env">
                            <Image src={items} width={300} height={400} alt="product image" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="main_products_envv">
                    {data.map((item) => (
                      <div className="bottom" key={item.id}>
                        <div className="head_env_image">
                          <div className="image_env">
                            <Image src={item.image} width={300} height={400} alt="product image"/>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}


              </div>
              {
                pagePath ? <EditProductAttributes loader={loader} setLoader={setLoader} /> : <ProductAttributes loader={loader} setLoader={setLoader} />
              }
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default DetailSection;
