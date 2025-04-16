import Image from 'next/image';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function DetailReadMore() {

    const { blogDetail } = useSelector((state) => state.blog);
    const detail = blogDetail?.data?.post


    const isoDateString = detail?.updated_at;

    // Create a new Date object from the ISO string
    const date = new Date(isoDateString);

    // Define an array of month names
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    // Extract the month name, date, and year
    const month = monthNames[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    // Format the date in "Month Date, Year" format
    const formattedDate = `${month} ${day}, ${year}`;
    return (
        <>
            <Container>
                <div className='main-readMore'>
                    <div className='readmore-width'>
                        <div className='readMore-social'>
                            <a href="https://www.facebook.com/officialprint247.us" target="_blank"><Image src="/image/facebookiconn.png" width={42} height={42} alt="social icons" /></a>
                            <a href="https://www.instagram.com/print247.us/" target="_blank"><Image src="/image/inst.png" width={42} height={42} alt="social icons" /></a>
                            <a href="https://www.pinterest.com/officialprint247us/" target="_blank"><Image src="/image/pinterestblog.png" width={42} height={42} alt="social icons" /></a>
                            <a href="https://www.linkedin.com/company/print247-us/" target="_blank"><Image src="/image/linkediniconn.png" width={42} height={42} alt="social icons" /></a>

                        </div>
                        <div className='Retail-Store'>
                            <h1>{detail?.title}</h1>
                            <span><Image src="/image/dateread.png" width={23} height={26} alt='date read icon' /> {formattedDate} </span>
                        </div>
                        <div className='readMore-img'>
                            <img src={blogDetail?.data?.post?.detail1_photo} title={blogDetail?.data?.post?.detail1_photo_title} alt={blogDetail?.data?.post?.detail1_photo_alt} />
                        </div>
                        <div className='readMore-subdata'>
                            <p dangerouslySetInnerHTML={{ __html: detail?.description }} ></p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default DetailReadMore;
