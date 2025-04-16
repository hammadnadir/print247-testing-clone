import React from 'react'
import { Container } from 'react-bootstrap'

function PackagingDetailCampign() {

    const sizes = [
        {
            image: "/material/white_bar.webp",
            title: "White Barrier Film",
        },
        {
            image: "/material/clear.webp",
            title: "Clear Barrier Film",
        },
        {
            image: "/material/metalized.webp",
            title: "Metallized Barrier Film",
        },
        {
            image: "/material/kraft.webp",
            title: "Kraft Film",
        },
    ]

    return (
        <div className='material_detail_campign'>
            <Container>
                <div className='inner_data_campign'>
                    <h2>Select custom size, color and material. We will do the rest</h2>
                    <div className='image_campaign_grid'>
                        {
                            sizes.map((item, index) => {
                                return (
                                    <div key={index} className='box_campaign_inner'>
                                        <img src={item?.image} alt="image of White Barrier Film" />
                                        <h3>{item?.title}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PackagingDetailCampign