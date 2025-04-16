import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Container } from 'react-bootstrap'

function LatestPackaging() {

    const packagingItems = [
        {
            src: "/home/latestPackaging/latestboxes.webp",
            title: "Boxes & Packaging",
            links: "/category/boxes-packaging-custom-boxes",
        },
        {
            src: "/home/latestPackaging/latestmylar.webp",
            title: "Mylar Bags",
            links: "/category/mylar-bags-mylar-pouch",
        },
        {
            src: "/home/latestPackaging/lateststicker.webp",
            title: "Labels & Stickers",
            links: "/category/labels-stickers-custom-labels",
        },
        {
            src: "/home/latestPackaging/latestsign.webp",
            title: "Signs & Banners",
            links: "/category/signs-banners-banner",
        },
        {
            src: "/home/latestPackaging/latestbusiness.webp",
            title: "Business Cards",
            links: "/category/business-cards-shapes",
        },
        {
            src: "/home/latestPackaging/latestprint.webp",
            title: "Print Products",
            links: "/category/print-products-print-products"
        },
    ];


    return (
        <div>
            <Container>
                <div className='new_custom_packaging'>
                    {/* <h2>Let{"’"}s Make the Right Custom Packaging Boxes</h2> */}
                    <h2>Unique & Personalized Packaging</h2>
                    <p>We believe in custom packaging that becomes the first reference point for every retail product. Our motto is, ‘You start a business and leave the packaging to us.’ Hence our exclusive and on-site printing and packaging facilities make us a qualitative, quantitative, and quintessential packaging choice.</p>
                    <div className='grid_packaging_round'>
                        {packagingItems.map((item, index) => (
                            <Link href={item.links} key={index}>
                                <div className='packaging_round'>
                                    <Image src={item.src} width={218} height={218} alt={item.title} />
                                    <h3>{item.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default LatestPackaging