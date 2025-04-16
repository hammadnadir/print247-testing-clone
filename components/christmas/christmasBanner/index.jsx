// import React from 'react'
// import { Container } from 'react-bootstrap'
// import { useMediaQuery } from "react-responsive";

// function ChristmasBanner() {

//     const isBigScreen = useMediaQuery({ query: '(min-width: 576px)' })
//     const isRetina = useMediaQuery({ query: '(max-width: 575px)' })

//     return (
//         <div className="main_banner_christmas">
//             {isBigScreen &&
//                 <div className="back_image_christmas"><img src="/image/Christmas/main-banner.webp" alt="back icon" /></div>
//             }
//             {isRetina && <div className="back_image_christmas"><img src="/image/Christmas/main-banner.webp" alt="back icon" /></div>
//             }

//             <div className="top_section_christmas">
//                 <Container>
//                     <div className="main_christmas_banner">
//                         <h1 className="white_color_christmas1">Create your</h1>
//                         <h2 className="white_color_christmas">Holidays Christmas gifts</h2>
//                     </div>
//                     {/* <div className="main_christmas_banner">
//           <h1 className={` ${isWhiteHeading ? "white_color" : ""}`}><span className={` ${isWhiteHeading ? "white_color1" : ""}`}>Create your </span> <br /> {mainIndustries?.title}</h1>
//         </div> */}
//                 </Container>
//             </div>
//         </div>
//     )
// }

// export default ChristmasBanner



import React from 'react'
import { Container } from 'react-bootstrap'
import { useMediaQuery } from "react-responsive";

function ChristmasBanner() {

    // const isRetina = useMediaQuery({ query: "(max-width: 574px)" });
    // const isTabView = useMediaQuery({ query: "(max-width: 912px) and (min-width: 575px)" });

    const isRetina = useMediaQuery({ query: "(max-width: 574px)" }); // Mobile
    const isTabView = useMediaQuery({ query: "(max-width: 768px) and (min-width: 575px)" }); // Tablet
    const isBigScreen = useMediaQuery({ query: "(min-width: 769px)" }); // Desktop

    return (
        <div className="main_banner_christmas">
            {/* {isBigScreen &&
                <div className="back_image_christmas"><img src="/image/Christmas/main-banner.webp" alt="back icon" /></div>
            }
            {isRetina && <div className="back_image_christmas"><img src="/image/Christmas/main-banner.webp" alt="back icon" /></div>
            } */}

            {isBigScreen && (
                <div className="back_image_christmas">
                    <img src="/image/Christmas/banner-1.webp" alt="Desktop Banner" />
                </div>
            )}
            {isTabView && (
                <div className="back_image_christmas">
                    <img src="/image/Christmas/banner-2.webp" alt="Tablet Banner" />
                </div>
            )}
            {isRetina && (
                <div className="back_image_christmas">
                    <img src="/image/Christmas/banner-3.webp" alt="Mobile Banner" />
                </div>
            )}

            <div className="top_section_christmas">
                <Container>
                    <div className="main_christmas_banner">
                        <h1 className="white_color_christmas1">‘Wonderful’ Custom </h1>
                        <h2 className="white_color_christmas">Christmas Boxes</h2>
                    {/* <p>Packaging Boxes <small>|</small> Mylar Bags <small>|</small> Pouches <small>|</small> And Much More</p> */}
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default ChristmasBanner
