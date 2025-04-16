// import { Progress } from 'antd';
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// import { Button, Container } from 'react-bootstrap';
// import { useSelector } from 'react-redux';

// function InsightProduct({ category, inputData }) {

//     const { blogData } = useSelector((state) => state.blog);
//     console.log(blogData, "AbbasblogData");


//     const [articlesToShow, setArticlesToShow] = useState(6);

//     const filteredPosts = blogData?.data?.post && Array.isArray(blogData?.data?.post)
//         ? blogData?.data?.post?.filter((post) => category === "All" || post.cat_slug === category)
//         : [];

//     const filteredTitles = filteredPosts
//         .filter((post) => post.title.toLowerCase().includes(inputData.toLowerCase()))
//         .map((post) => post);

//     const featuredSlug = blogData?.data?.featured_blog?.slug;

//     useEffect(() => {
//         setArticlesToShow(6);
//     }, [category]);

//     const loadMoreArticles = () => {
//         setArticlesToShow(articlesToShow + 6);
//     };

//     return (
//         <div className='main_bloginsight_com'>
//             <Container>
//                 <div className='Main-insigh-Articles'>
//                     <div className='insigh-Articles'>
//                         {filteredTitles && Array.isArray(filteredTitles) && filteredTitles
//                             .filter((data) => data?.slug !== featuredSlug)
//                             .reverse()
//                             .slice(0, articlesToShow)
//                             .map((items, index) => (
//                                 <div className='bottom-insigh' key={index}>
//                                     <div className='head_insigh_image'>
//                                         <div className='image_insigh'>
//                                             <Link href={`/post/${items?.slug}`}>
//                                                 <img src={items?.banner_photo} alt={items?.banner_photo_alt} title={items?.banner_photo_title} width={450} height={510} />
//                                             </Link>
//                                         </div>
//                                         <div className='headinsigh'>
//                                             <h3>{items?.title}</h3>
//                                             <div className='date-eye'>
//                                                 <div className='date'>
//                                                     <p>
//                                                         <Image src="/image/blogdate.png" width={13} height={15} alt='blog date icon' />
//                                                         {items?.formatted_updated_at}
//                                                     </p>
//                                                 </div>
//                                                 <span className='hide_pole'>|</span>
//                                                 <div className='eye'>
//                                                     <p>
//                                                         <Image src="/image/blogeye.png" width={19} height={12} alt='blog eye icon' />
//                                                         {items?.views} Views
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                             <Link href={`/post/${items?.slug}`}>
//                                                 <Button className='blog_read_btn'>Read More</Button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                         }
//                     </div>
//                     {filteredTitles.filter((data) => data?.slug !== featuredSlug).length === 0 && (
//                         <h2 className='not_found_blogs'>Not Found</h2>
//                     )}
//                 </div>

//                 {articlesToShow < filteredTitles.length &&
//                     filteredTitles && Array.isArray(filteredTitles) && filteredTitles
//                         .filter((data) => data?.slug !== featuredSlug)
//                         .length > 0 ?
//                     <div style={{ marginBottom: "40px" }}>
//                         <Progress percent={(articlesToShow / filteredTitles?.length) * 100} showInfo={false} />
//                     </div>
//                     : ""
//                 }

//                 {articlesToShow < filteredTitles.length && (
//                     <div className='loadinsight-btn'>
//                         <Link href="/post" legacyBehavior>
//                             <a onClick={(e) => { e.preventDefault(); loadMoreArticles()}}>
//                                 <Button>Load More</Button>
//                             </a>
//                         </Link>
//                     </div>
//                 )}

//             </Container>
//         </div>
//     );
// }

// export default InsightProduct;

// TESTING THREE FOR API

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PaginationCom from './pagination';

function InsightProduct({ category, inputData }) {

    const { blogData } = useSelector((state) => state.blog);

    // const filteredPosts = blogData?.data && Array.isArray(blogData?.data)
    //     ? blogData?.data?.filter(() => category === "All" || post.cat_slug === category)
    //     : [];

    // const filteredTitles = filteredPosts
    //     .filter((post) => post.title.toLowerCase().includes(inputData.toLowerCase()))
    //     .map((post) => post);

    // const featuredSlug = blogData?.data?.featured_blog?.slug;


    return (
        <div className='main_bloginsight_com'>
            <Container>
                <div className='Main-insigh-Articles'>
                    <div className='insigh-Articles'>
                        {blogData?.data?.data && Array.isArray(blogData?.data?.data) && [...blogData?.data?.data]
                            
                            .map((items, index) => (
                                <div className='bottom-insigh' key={index}>
                                    <div className='head_insigh_image'>
                                        <div className='image_insigh'>
                                            <Link href={`/post/${items?.slug}`}>
                                                <img src={items?.banner_photo} alt={items?.banner_photo_alt} title={items?.banner_photo_title} width={450} height={510} />
                                            </Link>
                                        </div>
                                        <div className='headinsigh'>
                                            <h3>{items?.title}</h3>
                                            <div className='date-eye'>
                                                <div className='date'>
                                                    <p>
                                                        <Image src="/image/blogdate.png" width={13} height={15} alt='blog date icon' />
                                                        {items?.formatted_updated_at}
                                                    </p>
                                                </div>
                                                <span className='hide_pole'>|</span>
                                                <div className='eye'>
                                                    <p>
                                                        <Image src="/image/blogeye.png" width={19} height={12} alt='blog eye icon' />
                                                        {items?.views} Views
                                                    </p>
                                                </div>
                                            </div>
                                            <Link href={`/post/${items?.slug}`}>
                                                <Button className='blog_read_btn'>Read More</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {blogData?.data?.data?.length === 0 && (
                        <h2 className='not_found_blogs'>No Blog Found</h2>
                    )}

                    <div className='pagination_styling'>
                        <PaginationCom />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default InsightProduct;