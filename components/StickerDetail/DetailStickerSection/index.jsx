import ProductAttributes from '@/components/Details/attributs';
import EditProductAttributes from '@/components/Details/editAttributes';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function DetailStickerSection() {

  const [selected, setSelected] = useState(3);
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(false);

  const router = useRouter();
  const pagePath = router?.pathname === "/edit/[id]/[code]"

  const { detailData } = useSelector((state) => state.detail);

  const photo = detailData?.photo ? JSON.parse(detailData?.photo) : null;

  const id = router?.query?.id

  const data = [
    {
      id: 1,
      name: "Custom",
      image: "/image/custom.png",
      link: "/custom-stickers"
    },
    {
      id: 2,
      name: "Roll",
      image: "/image/roll.png",
      link: "/roll-stickers"
    },
    {
      id: 3,
      name: "Sheet",
      image: "/image/sheet.png",
      link: "/sticker-sheets"
    },
    {
      id: 4,
      name: "kiss-Cut",
      image: "/image/kisscut.png",
      link: "/kiss-cut-stickers"
    },
  ];
  const handleClick = (item) => {
    setSelected(item?.id)
    router?.push(item?.link)
  }

  const showMenu = pagePath ? false : id === "custom-stickers" || id === "roll-stickers" || id === "sticker-sheets" || id === "kiss-cut-stickers"

  return (
    <div className="background-stickersection">
      {/* {loader && <Loader />} */}
      <div className={`${showMenu ? "stickers_with_menu" : "stickers_without_menu"}`}>
        <Container>
          <div className="main-stickersection">
            <div className="main-sticker-boxes">
              <div className="sticker-boxes">
                {showMenu &&
                  data?.map((item, i) => {
                    return (
                      <div key={i} onClick={() => handleClick(item)} className={`links_skickers${item?.id} ${selected === item?.id ? "boxes1" : "boxes"}`} >
                        <Image className={`stickers_roll${item?.id}`} src={item?.image} width={51} height={51} alt='sticker roll'/>
                        <h4>{item?.name}</h4>
                      </div>
                    )
                  })
                }
              </div>

              <div className="main_products_envelop">
                {photo?.map((items, index) => {
                  return (
                    <div className="bottom" key={index}>
                      <div className="head_envelop_image">
                        <div className="image_envelop">
                          <Image src={items} width={300} height={400} alt='product image'/>
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
    </div>
  );
}

export default DetailStickerSection;
