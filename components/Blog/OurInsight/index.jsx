// import { blogDataRequest } from "@/redux/blog";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";
// import { Button, Container } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import Slider from "react-slick";

// function OurInsight({ newsLetter, setNewsLetter, category, setCategory, inputData, setInputData }) {
//   const router = useRouter();
//   const { blogData } = useSelector((state) => state.blog);
//   const [debouncedSearch, setDebouncedSearch] = useState(router?.query?.search || "");
//   const dispatch = useDispatch();

//   // Initialize inputData with the search query from router
//   useEffect(() => {
//     if (router?.query?.search) {
//       setInputData(router.query.search);
//     }
//   }, [router.query.search, setInputData]);

//   useEffect(() => {
//     const delay = setTimeout(() => {
//       setDebouncedSearch(router?.query?.search || "");
//     }, 1000);

//     return () => clearTimeout(delay);
//   }, [router?.query?.search]);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     arrows: false,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   const handleChange = (e) => {
//     const { value } = e.target;
//     setInputData(value);

//     // Only update the URL if there's a value or if we're clearing the search
//     if (value || router.query.search) {
//       router.push(
//         {
//           pathname: router.pathname,
//           query: { page: 1, search: value },
//         },
//         undefined,
//         { shallow: true }
//       );
//     }
//   };

//   useEffect(() => {
//     if (debouncedSearch !== undefined) {
//       dispatch(
//         blogDataRequest({
//           search: debouncedSearch,
//           page: 1
//         })
//       );
//     }
//   }, [debouncedSearch, dispatch]);

//   return (
//     <div className="padding_head blog_main">
//       <Container>
//         <div className="insight-main">
//           <h1 className="main_blog_h">Our Insights</h1>
//           <p className="main_blog_p">
//             Take a look behind the scenes, and discover the untold stories behind our projects, lessons learned, work
//             culture, and business curiosities.
//           </p>
//           <button className="main_blog_b" onClick={() => setNewsLetter(true)}>
//             Subscribe to Our Newsletter
//           </button>

//           <div className="insight-title">
//             <Image
//               className="input-search"
//               src="/image/input-search.png"
//               width={17}
//               height={17}
//               alt="search icon"
//             />
//             <div className="insight-input">
//               <input
//                 value={inputData || router?.query?.search}
//                 onChange={handleChange}
//                 type="text"
//                 placeholder="search"
//               />
//             </div>
//           </div>

//           {inputData?.length === 0 && blogData?.featured && (
//             <Slider {...sliderSettings} className="insight-slider">
//               {[...(blogData?.featured || [])]?.map((item, index) => (
//                 <div key={index} className="insight-img">
//                   <img
//                     className="thumbnail_image"
//                     src={item?.detail1_photo}
//                     alt={item?.detail1_photo_alt || "blog thumbnail"}
//                     title={item?.detail1_photo_title}
//                   />
//                   <div className="blogveri-data">
//                     <h2>{item.title}</h2>
//                     <div className="blog-readbtn">
//                       <Link href={`/post/${item.slug}`} passHref>
//                         <Button>Read More</Button>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           )}
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default OurInsight;
import { blogDataRequest } from "@/redux/blog";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";

function OurInsight({ newsLetter, setNewsLetter, category, setCategory, inputData, setInputData }) {
  const router = useRouter();
  const { blogData } = useSelector((state) => state.blog);
  const [debouncedSearch, setDebouncedSearch] = useState(router?.query?.search || "");
  const dispatch = useDispatch();
  const isFirstRender = useRef(true); // 🚫 Skip client-side dispatch on first render

  // Sync input with query on mount
  useEffect(() => {
    if (router?.query?.search) {
      setInputData(router.query.search);
    }
  }, [router.query.search, setInputData]);

  // Debounce search input
  useEffect(() => {
    const delay = setTimeout(() => {
      setDebouncedSearch(router?.query?.search || "");
    }, 500);

    return () => clearTimeout(delay);
  }, [router?.query?.search]);

  // Dispatch blogDataRequest — skip initial render to avoid duplicate SSR + CSR fetch
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (debouncedSearch !== undefined) {
      dispatch(
        blogDataRequest({
          search: debouncedSearch,
          page: 1
        })
      );
    }
  }, [debouncedSearch, dispatch]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInputData(value);

    // Only update the URL if there's a value or if we're clearing the search
    if (value || router.query.search) {
      router.push(
        {
          pathname: router.pathname,
          query: { page: 1, search: value },
        },
        undefined,
        { shallow: true }
      );
    }
  };

  return (
    <div className="padding_head blog_main">
      <Container>
        <div className="insight-main">
          <h1 className="main_blog_h">Our Insights</h1>
          <p className="main_blog_p">
            Take a look behind the scenes, and discover the untold stories behind our projects, lessons learned, work
            culture, and business curiosities.
          </p>
          <button className="main_blog_b" onClick={() => setNewsLetter(true)}>
            Subscribe to Our Newsletter
          </button>

          <div className="insight-title">
            <Image
              className="input-search"
              src="/image/input-search.png"
              width={17}
              height={17}
              alt="search icon"
            />
            <div className="insight-input">
              <input
                value={inputData}
                onChange={handleChange}
                type="text"
                placeholder="search"
              />
            </div>
          </div>

          {inputData?.length === 0 && blogData?.featured && (
            <Slider {...sliderSettings} className="insight-slider">
              {[...(blogData?.featured || [])]?.map((item, index) => (
                <div key={index} className="insight-img">
                  <img
                    className="thumbnail_image"
                    src={item?.detail1_photo}
                    alt={item?.detail1_photo_alt || "blog thumbnail"}
                    title={item?.detail1_photo_title}
                  />
                  <div className="blogveri-data">
                    <h2>{item.title}</h2>
                    <div className="blog-readbtn">
                      <Link href={`/post/${item.slug}`} passHref>
                        <Button>Read More</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </Container>
    </div>
  );
}

export default OurInsight;
