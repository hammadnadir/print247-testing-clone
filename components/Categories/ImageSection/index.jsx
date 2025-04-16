import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';

function ImagesSection() {
    const { pages } = useSelector((state) => state.product);

    const bannerImage = pages?.mian_image?.banner_image ? JSON.parse(pages?.mian_image?.banner_image)?.[0] : "";

    return (
        <>
            <div className="main-section-img">
                {bannerImage && (
                    <Image className='min_img' src={bannerImage} layout="fill"objectFit="cover" objectPosition="center" alt='banner image'/>
                )}
            </div>
        </>
    );
}

export default ImagesSection;
