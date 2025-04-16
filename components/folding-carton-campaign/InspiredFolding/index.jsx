// import { boxCompaignData } from '@/data/boxCompaignData'
// import { useRouter } from 'next/router';
// import React from 'react'
// import { Container } from 'react-bootstrap'

// function InspiredFolding() {

//   const router = useRouter();
//   const { id } = router.query;

//   return (
//     <div className='main_inspired'>
//       <Container>
//         <div className='inspired_data'>
//           <h3>{boxCompaignData?.[id]?.Inspired?.inspiredData}</h3>
//           <p>{boxCompaignData?.[id]?.Inspired?.inspiredPara}</p>
//           <div className='inpired_grid_boxes'>
//             {boxCompaignData?.[id]?.Inspired?.InspiredImg.map((item, index) => (
//               <div key={index} className='inner_inpired_grid_boxes'>
//                 <img src={item?.img} alt={`Inspired product image ${index + 1}`} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </Container>
//     </div>
//   )
// }

// export default InspiredFolding


import { boxCompaignData } from '@/data/boxCompaignData';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

function InspiredFolding() {
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
    <div className="main_inspired_folding">
      <Container>
        <div className="inspired_data_folding">
          <h3>{boxCompaignData?.[id]?.Inspired?.inspiredData}</h3>
          <p>{boxCompaignData?.[id]?.Inspired?.inspiredPara}</p>

          {isMobile ? (
            <Marquee speed={50} pauseOnHover={true}>
              <div className="inner_inpired_marquee">
                <img src='/foldingCarton/inspired/foldCam1.webp' alt={`Inspired product image`} />
              </div>
              <div className="inner_inpired_marquee">
                <img src='/foldingCarton/inspired/foldCam2.webp' alt={`Inspired product image`} />
              </div>
              <div className="inner_inpired_marquee">
                <img src='/foldingCarton/inspired/foldCam3.webp' alt={`Inspired product image`} />
              </div>
              <div className="inner_inpired_marquee">
                <img src='/foldingCarton/inspired/foldCam4.webp' alt={`Inspired product image`} />
              </div>
            </Marquee>
          ) : (
            <div className="inpired_grid_boxes">
              {boxCompaignData?.[id]?.Inspired?.InspiredImg.map((item, index) => (
                <div key={index} className="inner_inpired_grid_boxes">
                  <img src={item?.img} alt={`Inspired product image ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default InspiredFolding;