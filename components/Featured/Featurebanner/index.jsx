import React from 'react'
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

function Featurebanner() {

    const { catalogData } = useSelector((state) => state.catalog);

    const path = 'featured';

    const isBigScreen = useMediaQuery({ query: '(min-width: 576px)' })
    const isRetina = useMediaQuery({ query: '(max-width: 575px)' })

    return (
        <div className='main_featurebanner'>
            {isBigScreen && <div className='background_feature_image'>
                <img src={catalogData?.banner?.image} layout='fill' objectFit='cover' objectPosition='center' alt='banner image'/>
            </div>}
            {isRetina &&
                (path === 'featured' ? <div className='background_feature_image'><img src="/image/featureresponsive.webp" layout='fill' objectFit='cover' objectPosition='center' alt='mobile responsive image'/></div> : "")
            }

            <div className='top_section'>
                <div className='main_feature_detail'>
                    <h1>{catalogData?.banner?.title}</h1>
                    <h2>Products</h2>
                </div>
            </div>
        </div>
    )
}

export default Featurebanner