import { industries } from '@/data/industries'
import { politicalSignsProducts } from '@/data/politicalSignsProducts';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux'

function HtmlSiteCom() {

    const { siteMapData } = useSelector((state) => state.sitemap)
    const { blogData } = useSelector((state) => state.blog)
    const allIndustries = Object.keys(industries)?.map((data) => data?.toLowerCase())
    const products = siteMapData?.catgeory?.filter((data) => !allIndustries.includes(data?.slug?.toLowerCase()))
    const blogs = blogData?.data;
    
    return (
        <div className='html_site_main'>
            <section>
                <div className="container py-5">
                    <div className="col-md-12 column sitemap-page">
                        <h3 className="text-dark"><i className="fa fa-home"></i>&nbsp;Print247</h3>
                        <div className="row clearfix">
                            <div className="col-md-4 column">
                                <ul className="list-unstyled">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="text-muted">
                                        <Link href="/about-us"> About Us</Link>
                                    </li>
                                        <li>
                                        <Link href="">Boxes by Industry</Link>
                                        <ul>
                                            {
                                                Object.entries(industries)?.map(([key,val], i) => (
                                                    <li key={i} className="text-muted">
                                                        <Link href={`/industry/${key}`}>{val?.title}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-4 column">
                                <ul className="list-unstyled">
                                    <li>
                                        <Link href="/post">Blogs</Link>
                                        <ul>
                                            {
                                                blogs?.map((data, i) => (
                                                    <li key={i} className="text-muted">
                                                        <Link href={`/post/${data?.slug}`}> {data?.title}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 column sitemap-page">
                                <ul className="list-unstyled">

                                    <li className="text-muted">
                                        <Link href="/privacy-policy"> Privacy Policy</Link>
                                    </li>
                                    <li className="text-muted">
                                        <Link href="/terms-and-conditions">Terms &amp; Condition</Link>
                                    </li>
                                    <li className="text-muted">
                                        <Link href="/faq">FAQ</Link>
                                    </li>
                                    <li className="text-muted">
                                        <Link href="/contact-us">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr />



                        <div className="row clearfix">
                            {   Array.isArray(products) &&
                                products
                                .filter((data)=>data.slug !== "political-campaign-supplies")
                                .map((data, i) => (
                                    <div className="col-md-4 column sitemap-page">
                                        <Link href={`/category/${data?.page_slug}-${data?.slug}`}>
                                            <h3 className="text-dark">{data.title}:</h3>
                                        </Link>
                                        <ul>
                                            {
                                                data?.category_products?.map((product, i) => (
                                                    <li><Link href={`/${product?.slug}`} title="Cardboard Display Boxes">{product?.title}</Link></li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ))
                            }

                            

                        </div>
                        <div className="row clearfix">

                                    <div className="col-md-4 column sitemap-page">
                                        <Link href={`/political-campaign-supplies`}>
                                            <h3 className="text-dark">Political Campaign Supplies:</h3>
                                        </Link>
                                        <ul>
                                            {
                                                politicalSignsProducts?.map((product, i) => (
                                                    <li><Link href={`/political-campaign-supplies/${product?.slug}`} title={product?.title}>{product?.title}</Link></li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default HtmlSiteCom