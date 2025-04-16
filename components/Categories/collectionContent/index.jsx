import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function CollectionContent() {

    const { pages } = useSelector((state) => state.product);
    return (
        <>
            <Container>
                <div className='main_content_collection'>
                    {pages?.catgeory?.[0]?.detailed_description && pages?.catgeory?.[0]?.detailed_description?.trim().length > 20 && (
                        <div className='border_line_content_collection'>
                            <div className='inner_content_collection'>
                                <div style={{ fontSize: "30px", color: "black" }}>
                                    <div dangerouslySetInnerHTML={{ __html: pages.catgeory[0].detailed_description }}></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </>
    );
}

export default CollectionContent;