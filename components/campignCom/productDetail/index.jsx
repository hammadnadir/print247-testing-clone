import { campignObj } from '@/data/compaignData'
import { useRouter } from 'next/router'
import React from 'react'
import { Container } from 'react-bootstrap'

function PackagingDetails() {

  const router = useRouter()

  const { id } = router?.query

  const currentPageData = campignObj?.[id] ? campignObj?.[id] : {}
  
  return (
    <div className='main_printing_bg'>
      <Container>
        <div className='main-printing-detail'>
          <div className='printing-detail'>
            <div className='pack-text'>
              <h2>{currentPageData?.features?.[0]?.heading}</h2>
              <p>{currentPageData?.features?.[0]?.data}</p>
            </div>
            <hr className='packing-hr' />
            <div className='pack-text'>
              <h2>{currentPageData?.features?.[1]?.heading}</h2>
              <p>{currentPageData?.features?.[1]?.data}</p>
            </div>
            <hr className='packing-hr none_hr' />
            <div className='pack-text'>
              <h2>{currentPageData?.features?.[2]?.heading}</h2>
              <p>{currentPageData?.features?.[2]?.data}</p>
            </div>
            <hr className='packing-hr' />
            <div className='pack-text'>
              <h2>{currentPageData?.features?.[3]?.heading}</h2>
              <p>{currentPageData?.features?.[3]?.data}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PackagingDetails