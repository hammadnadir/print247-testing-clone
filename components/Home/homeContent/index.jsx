import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function HomeContent() {

    const { homeData } = useSelector((state) => state.home)
    
    return (
        <>
           {homeData?.homepage?.[0]?.detailed_description && homeData?.homepage?.[0]?.detailed_description?.length > 20 &&  <Container>
                <div className='main_content'>
                    <div className='border_line_content'>
                        <div className='inner_content'>
                            <div
                                className="para_upperr"
                                dangerouslySetInnerHTML={{
                                    __html: homeData?.homepage?.[0]?.detailed_description
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </Container>}
        </>
    )
}

export default HomeContent