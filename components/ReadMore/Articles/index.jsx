import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function Articles() {
  const { blogData } = useSelector((state) => state.blog);
  
  return (
    <>
      <Container>
        <div className="Main-More-Articles">
          <h3 className="main_article_h">More Articles</h3>
          <div className="insigh-Articles">
            {blogData?.data?.data &&
              (() => {
                const shuffleProducts = [...blogData?.data?.data].sort(
                  () => 0.5 - Math.random()
                );
                return shuffleProducts.slice(0, 3).map((items, index) => (
                  <div className="bottom-insigh" key={index}>
                    <div className="head_insigh_image">
                      <div className="image_insigh">
                        <Link href={`/post/${items?.slug}`}>
                          <img
                            src={items?.banner_photo}
                            width={450}
                            height={510}
                            title={items?.banner_photo_title}
                            alt={items?.banner_photo_alt}
                          />
                        </Link>
                      </div>
                      <div className="headinsigh">
                        <h3>{items?.title}</h3>
                        <div className="date-eye">
                          <div className="date">
                            <p>
                              <Image
                                src="/image/blogdate.png"
                                width={13}
                                height={15}
                                alt="date icon"
                              />
                              {items?.formatted_updated_at}
                            </p>
                          </div>
                          <span>|</span>
                          <div className="eye">
                            <p>
                              <Image
                                src="/image/blogeye.png"
                                width={19}
                                height={12}
                                alt="blog eye"
                              />
                              {items?.views} Views{" "}
                            </p>
                          </div>
                        </div>
                        <Link href={`/post/${items?.slug}`}>
                          <Button>Read More</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )) ;
              })()
              }
          </div>
        </div>
       
      </Container>
    </>
  );
}

export default Articles;
