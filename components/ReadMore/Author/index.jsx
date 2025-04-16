// import React from 'react'
// import { Container } from 'react-bootstrap'

// function Author() {
//     return (
//         <div className='main_author'>
//             <Container>
//                 <div className='author_flex'>
//                     <img src="/image/author/dummy_author_pic.png" alt="author pic" />
//                     <div className='author_data'>
//                         <span>AUTHOR</span>
//                         <h2>Ron Chen</h2>
//                         <p>Ron is a Senior Packaging Consultant at PakFactory. With a passion for innovative designs
//                             and sustainable solutions, Ron shares insights into how brands can elevate their
//                             packaging to leave a lasting impression. Drawing from years of experience in
//                             product branding and marketing, Alex provides valuable tips for business owners,
//                             designers, and industry professionals.</p>
//                     </div>
//                 </div>
//             </Container>
//         </div>
//     )
// }

// export default Author

import { AuthorData } from '@/data/authorData';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Author() {
    const { blogDetail } = useSelector((state) => state.blog);

    const blogId = blogDetail?.data?.post?.id;

    if (!blogId) return null;

    const author = AuthorData[(blogId - 1) % AuthorData.length];

    if (!author) return null; 

    return (
        <div className="main_author">
            <Container>
                <div className="author_flex">
                    <img
                        src={author.authImage}
                        alt={`Author: ${author.authName}`}
                    />
                    <div className="author_data">
                        <span>{author.title}</span>
                        <h2>{author.authName}</h2>
                        <p>{author.authDescription}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Author;