import { useRouter } from "next/router";
import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

function CategoryBanners() {
  const { pages } = useSelector((state) => state.product);
  const router = useRouter();

  const path = router?.query?.id?.split("-").splice(0, 2).join("-");

  const isBigScreen = useMediaQuery({ query: '(min-width: 576px)' })
  const isRetina = useMediaQuery({ query: '(max-width: 575px)' })

  return (
    <div className="main-banner2">
      {isBigScreen &&
        <div className="back_image"><img src={pages?.header?.photo} alt="back_image" /></div>
      }
      {isRetina &&
        (path === "boxes-packaging" ? <div className="back_image"><img src="/image/Custom.webp" alt="Custom image" /></div>
          : path === "mylar-bags" ? <div className="back_image"><img src="/image/mylar2.webp" alt="mylar image" /></div>
            : path === "labels-stickers" ? <div className="back_image"><img src="/image/LABELS.webp" alt="label image" /></div>
              : path === "signs-banners" ? <div className="back_image"><img src="/image/Banner.webp" alt="banner image" /></div>
                : path === "business-cards" ? <div className="back_image"><img src="/image/card.webp" alt="business image" /></div>
                  : path === "print-products" ? <div className="back_image"><img src="/image/print.webp" alt="print product image" /></div>
                    : "")
      }

      <div className="top_sectionb">
        <Container>
          <div className="main_banner_detail">
            <h1 >{pages?.header?.heading_text} <br /> {pages?.header?.heading_text_two}</h1>
            {/* <p dangerouslySetInnerHTML={{ __html: pages?.header?.summary }}></p> */}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default CategoryBanners;
