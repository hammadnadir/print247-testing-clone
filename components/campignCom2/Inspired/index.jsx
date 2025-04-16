import { boxCompaignData } from '@/data/boxCompaignData'
import { useRouter } from 'next/router';
import React from 'react'
import { Container } from 'react-bootstrap'

function Inspired() {

  const router = useRouter();
  const { id } = router.query;

  return (
    <div className='main_inspired'>
      <Container>
        <div className='inspired_data'>
          <h3>{boxCompaignData?.[id]?.Inspired?.inspiredData}</h3>
          <p>{boxCompaignData?.[id]?.Inspired?.inspiredPara}</p>
          <div className='inpired_grid_boxes'>
            {boxCompaignData?.[id]?.Inspired?.InspiredImg.map((item, index) => (
              <div key={index} className='inner_inpired_grid_boxes'>
                <img src={item?.img} alt={`Inspired product image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Inspired
