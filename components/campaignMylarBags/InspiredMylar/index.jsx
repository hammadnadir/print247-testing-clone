import { boxCompaignData } from '@/data/boxCompaignData';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

function InspiredMylar() {
  const router = useRouter();
  const { id } = router.query;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 575);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="main_inspired_sticker">
      <Container>
        <div className="inspired_data_sticker">
          <h3>{boxCompaignData?.[id]?.Inspired?.inspiredData}</h3>
          <p>{boxCompaignData?.[id]?.Inspired?.inspiredPara}</p>

          {isMobile ? (
            <Marquee speed={50} pauseOnHover={true}>
              <Link href="/bumper-stickers">
                <div className="inner_inpired_marquee">
                  <img src='/customSticker/inspiredSticker/bumper.webp' alt={`Inspired product image`} />
                  <p>Bumper Stickers</p>
                </div>
              </Link>
              <Link href="/vinyl-stickers">
                <div className="inner_inpired_marquee">
                  <img src='/customSticker/inspiredSticker/vinyl.webp' alt={`Inspired product image`} />
                  <p>Vinyl Stickers</p>
                </div>
              </Link>
              <Link href="/hard-hat-stickers">
                <div className="inner_inpired_marquee">
                  <img src='/customSticker/inspiredSticker/hard.webp' alt={`Inspired product image`} />
                  <p>Hard Hat Stickers</p>
                </div>
              </Link>
              <Link href="/holographic-stickers">
                <div className="inner_inpired_marquee">
                  <img src='/customSticker/inspiredSticker/holo.webp' alt={`Inspired product image`} />
                  <p>Holographic Stickers</p>
                </div>
              </Link>
            </Marquee>
          ) : (
            <div className="inpired_grid_boxes">
              {boxCompaignData?.[id]?.Inspired?.InspiredImg.map((item, index) => (
                <Link key={index} href={item?.link}>
                  <div className="inner_inpired_grid_boxes">
                    <img src={item?.img} alt={`Inspired product image ${index + 1}`} />
                    <p>{item?.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default InspiredMylar;