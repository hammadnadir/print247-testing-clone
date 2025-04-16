import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

function Nfc() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1025px)' });
  const isLaptop = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
  const isTab = useMediaQuery({ query: '(min-width: 576px) and (max-width: 767px)' });
  const isMob = useMediaQuery({ query: '(max-width: 575px)' });

  return (
    <div className='main_nfc'>
      {isBigScreen && (
        <div className="img_nfc">
          <img src="/image/mobilebanner.webp" alt="NFC Tags Banner" />
          <div className="data_nfc">
            <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
            <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
            <Link href="/contact-us">
              <div className='nfc_button'>
                <button>Get Started</button>
              </div>
            </Link>
          </div>
        </div>
      )}
      {isLaptop && (
        <div className="img_nfc2">
          <img src="/image/mobilebannerlap.webp" alt="NFC Tags Banner for Laptops" />
          <div className="data_nfc2">
            <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
            <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
            <Link href="/contact-us">
              <div className='nfc_button2'>
                <button>Get Started</button>
              </div>
            </Link>
          </div>
        </div>
      )}
      {isTab && (
        <div className="img_nfc3">
          <img src="/image/nfctab.webp" alt="NFC Tags Banner for Tablets" />
          <div className="data_nfc3">
            <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
            <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
            <Link href="/contact-us">
              <div className='nfc_button3'>
                <button>Get Started</button>
              </div>
            </Link>
          </div>
        </div>
      )}
      {isMob && (
        <Container>
          <div className="img_nfc3">
            <img src="/image/nfcmob2.webp" alt="NFC Tags Banner for Mobiles" />
            <div className="data_nfc3">
              <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
              <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
              <Link href="/contact-us">
                <div className='nfc_button3'>
                  <button>Get Started</button>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}

export default Nfc;

// import React, { useEffect } from 'react';
// import Link from 'next/link';
// import { Container } from 'react-bootstrap';
// import { useMediaQuery } from 'react-responsive';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// // gsap.registerPlugin(ScrollTrigger);

// function Nfc() {
//   const isBigScreen = useMediaQuery({ query: '(min-width: 1025px)' });
//   const isLaptop = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
//   const isTab = useMediaQuery({ query: '(min-width: 576px) and (max-width: 767px)' });
//   const isMob = useMediaQuery({ query: '(max-width: 575px)' });

//   useEffect(() => {
//     // GSAP ScrollTrigger Animation for Scroll-Up Effect
//     gsap.utils.toArray(['.img_nfc', '.img_nfc2', '.img_nfc3']).forEach((section) => {
//       gsap.fromTo(section, 
//         {
//           y: -200, // Start 100px lower than its original position
//           opacity: 1, // Start with no opacity
//         },
//         {
//           y: 0, // Move to its original position
//           opacity: 1, // Fade in to full opacity
//           duration: 1, // Duration of the animation
//           ease: "power2.out", // Smooth easing
//           scrollTrigger: {
//             trigger: (section),
//             start: 'top 80%', // Animation starts when top of section is at 80% of the viewport height
//             end: 'bottom 30%', // Ends when top of section is at 20% of the viewport height
//             scrub: 1, // Makes the animation smooth with scroll
//           }
//         }
//       );
//     });
//     ScrollTrigger.refresh();
//   }, []);
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     ScrollTrigger.refresh(); // Ensure triggers are updated on page load
//   }, []);
//   return (
//     <div className='main_nfc'>
//       {isBigScreen && (
//         <div className="img_nfc">
//           <img src="/image/mobilebanner.webp" alt="NFC Tags Banner" />
//           <div className="data_nfc">
//             <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
//             <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
//             <Link href="/contact-us">
//               <div className='nfc_button'>
//                 <button>Get Started</button>
//               </div>
//             </Link>
//           </div>
//         </div>
//       )}
//       {isLaptop && (
//         <div className="img_nfc2">
//           <img src="/image/mobilebannerlap.webp" alt="NFC Tags Banner for Laptops" />
//           <div className="data_nfc2">
//             <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
//             <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
//             <Link href="/contact-us">
//               <div className='nfc_button2'>
//                 <button>Get Started</button>
//               </div>
//             </Link>
//           </div>
//         </div>
//       )}
//       {isTab && (
//         <div className="img_nfc3">
//           <img src="/image/nfctab.webp" alt="NFC Tags Banner for Tablets" />
//           <div className="data_nfc3">
//             <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
//             <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
//             <Link href="/contact-us">
//               <div className='nfc_button3'>
//                 <button>Get Started</button>
//               </div>
//             </Link>
//           </div>
//         </div>
//       )}
//       {isMob && (
//         <Container>
//           <div className="img_nfc3">
//             <img src="/image/nfcmob2.webp" alt="NFC Tags Banner for Mobiles" />
//             <div className="data_nfc3">
//               <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
//               <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
//               <Link href="/contact-us">
//                 <div className='nfc_button3'>
//                   <button>Get Started</button>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </Container>
//       )}
//     </div>
//   );
// }

// export default Nfc;
// import React, { useEffect } from 'react';
// import Link from 'next/link';
// import { Container } from 'react-bootstrap';
// import { useMediaQuery } from 'react-responsive';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// function Nfc() {
//   const isBigScreen = useMediaQuery({ query: '(min-width: 1025px)' });
//   const isLaptop = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
//   const isTab = useMediaQuery({ query: '(min-width: 576px) and (max-width: 767px)' });
//   const isMob = useMediaQuery({ query: '(max-width: 575px)' });

//   useEffect(() => {
//     // GSAP ScrollTrigger Animation for Scroll-Up Effect
//     const sections = gsap.utils.toArray(['.img_nfc', '.img_nfc2', '.img_nfc3']);
    
//     sections.forEach((section) => {
//       gsap.fromTo(section, 
//         {
//           y: -200, // Start 200px higher than its original position
//           opacity: 1, // Start with no opacity
//         },
//         {
//           y: 0, // Move to its original position
//           opacity: 1, // Fade in to full opacity
//           duration: 1, // Duration of the animation
//           ease: "power2.out", // Smooth easing
//           scrollTrigger: {
//             trigger: section,
//             start: 'top 80%', // Animation starts when top of section is at 80% of the viewport height
//             end: 'bottom 30%', // Ends when top of section is at 30% of the viewport height
//             scrub: 1, // Makes the animation smooth with scroll
//           }

//         }
//       );
//     });

//     return () => {
//       // Clean up animations and ScrollTriggers on component unmount
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className='main_nfc'>
//       {isBigScreen && (
//         <div className="img_nfc">
//           <img src="/image/mobilebanner.webp" alt="NFC Tags Banner" />
//           <div className="data_nfc">
//             <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
//             <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
//             <Link href="/contact-us">
//               <div className='nfc_button'>
//                 <button>Get Started</button>
//               </div>
//             </Link>
//           </div>
//         </div>
//       )}
//       {isLaptop && (
//         <div className="img_nfc2">
//           <img src="/image/mobilebannerlap.webp" alt="NFC Tags Banner for Laptops" />
//           <div className="data_nfc2">
//             <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
//             <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
//             <Link href="/contact-us">
//               <div className='nfc_button2'>
//                 <button>Get Started</button>
//               </div>
//             </Link>
//           </div>
//         </div>
//       )}
//       {isTab && (
//         <div className="img_nfc3">
//           <img src="/image/nfctab.webp" alt="NFC Tags Banner for Tablets" />
//           <div className="data_nfc3">
//             <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
//             <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
//             <Link href="/contact-us">
//               <div className='nfc_button3'>
//                 <button>Get Started</button>
//               </div>
//             </Link>
//           </div>
//         </div>
//       )}
//       {isMob && (
//         <Container>
//           <div className="img_nfc3">
//             <img src="/image/nfcmob2.webp" alt="NFC Tags Banner for Mobiles" />
//             <div className="data_nfc3">
//               <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
//               <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
//               <Link href="/contact-us">
//                 <div className='nfc_button3'>
//                   <button>Get Started</button>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </Container>
//       )}
//     </div>
//   );
// }

// export default Nfc;

// // import React, { useEffect } from 'react';
// // import Link from 'next/link';
// // import { Container } from 'react-bootstrap';
// // import { useMediaQuery } from 'react-responsive';
// // // import gsap from 'gsap';
// // // import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// // // gsap.registerPlugin(ScrollTrigger);

// // function Nfc() {
// //   const isBigScreen = useMediaQuery({ query: '(min-width: 1025px)' });
// //   const isLaptop = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
// //   const isTab = useMediaQuery({ query: '(min-width: 576px) and (max-width: 767px)' });
// //   const isMob = useMediaQuery({ query: '(max-width: 575px)' });

// //   // useEffect(() => {
// //   //   ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// //   //   // GSAP ScrollTrigger Animation for Scroll-Up Effect
// //   //   const sections = gsap.utils.toArray(['.img_nfc', '.img_nfc2', '.img_nfc3', '.data_nfc', '.data_nfc2', '.data_nfc3']);
    
// //   //   sections.forEach((section) => {
// //   //     gsap.fromTo(section, 
// //   //       {
// //   //         y: -200, // Start 200px higher than its original position
// //   //         opacity: 0, // Start with no opacity
// //   //       },
// //   //       {
// //   //         y: 0, // Move to its original position
// //   //         opacity: 1, // Fade in to full opacity
// //   //         duration: 1, // Duration of the animation
// //   //         ease: "power2.out", // Smooth easing
// //   //         scrollTrigger: {
// //   //           trigger: section,
// //   //           start: 'top 80%', // Animation starts when top of section is at 80% of the viewport height
// //   //           end: 'bottom 30%', // Ends when top of section is at 30% of the viewport height
// //   //           scrub: 1, // Makes the animation smooth with scroll
// //   //         }
// //   //       }
// //   //     );
// //   //   });

// //   //   return () => {
// //   //     // Clean up animations and ScrollTriggers on component unmount
// //   //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// //   //   };
// //   // }, []);
// //   // useEffect(() => {
// //   //   const initializeAnimations = () => {
// //   //     // Kill any existing ScrollTriggers to reset animations
// //   //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());

// //   //     // GSAP ScrollTrigger Animation for Scroll-Up Effect
// //   //     const sections = gsap.utils.toArray(['.img_nfc', '.img_nfc2', '.img_nfc3', '.data_nfc', '.data_nfc2', '.data_nfc3']);
      
// //   //     sections.forEach((section) => {
// //   //       gsap.to(
// //   //         section,{
// //   //         // {
// //   //         //   y: -200, // Start 200px higher than its original position
// //   //         //   opacity: 0, // Start with no opacity
// //   //         // },
// //   //         // {
// //   //         //   y: 0, // Move to its original position
// //   //         //   opacity: 1, // Fade in to full opacity
// //   //         //   duration: 1, // Duration of the animation
// //   //         //   // ease: "power2.out", // Smooth easing
// //   //         //   ease:"power1.inOut",
// //   //           scrollTrigger: {
// //   //             trigger: section,
// //   //             start: 'top 80%', // Animation starts when top of section is at 80% of the viewport height
// //   //             end: 'bottom 30%', // Ends when top of section is at 30% of the viewport height
// //   //             scrub: 1, // Makes the animation smooth with scroll
// //   //             pin:"true"
// //   //           },
// //   //         }
// //   //       );
// //   //     });
// //   //   };

// //   //   // Add a delay to make sure animations are initialized after page load
// //   //   setTimeout(() => {
// //   //     initializeAnimations();
// //   //   }, 300);

// //   //   return () => {
// //   //     // Clean up animations and ScrollTriggers on component unmount
// //   //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// //   //   };
// //   // }, []);

// //   return (
// //     <>
// //     <div className='main_nfc'>
// //       {isBigScreen && (
// //         <div className="img_nfc">
// //           <img src="/image/mobilebanner.webp" alt="NFC Tags Banner" />
// //           <div className="data_nfc">
// //             <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
// //             <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
// //             <Link href="/contact-us">
// //               <div className='nfc_button'>
// //                 <button>Get Started</button>
// //               </div>
// //             </Link>
// //           </div>
// //         </div>
// //       )}
// //       {isLaptop && (
// //         <div className="img_nfc2">
// //           <img src="/image/mobilebannerlap.webp" alt="NFC Tags Banner for Laptops" />
// //           <div className="data_nfc2">
// //             <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
// //             <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
// //             <Link href="/contact-us">
// //               <div className='nfc_button2'>
// //                 <button>Get Started</button>
// //               </div>
// //             </Link>
// //           </div>
// //         </div>
// //       )}
// //       {isTab && (
// //         <div className="img_nfc3">
// //           <img src="/image/nfctab.webp" alt="NFC Tags Banner for Tablets" />
// //           <div className="data_nfc3">
// //             <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
// //             <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
// //             <Link href="/contact-us">
// //               <div className='nfc_button3'>
// //                 <button>Get Started</button>
// //               </div>
// //             </Link>
// //           </div>
// //         </div>
// //       )}
// //       {isMob && (
// //         <Container>
// //           <div className="img_nfc3">
// //             <img src="/image/nfcmob2.webp" alt="NFC Tags Banner for Mobiles" />
// //             <div className="data_nfc3">
// //               <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
// //               <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
// //               <Link href="/contact-us">
// //                 <div className='nfc_button3'>
// //                   <button>Get Started</button>
// //                 </div>
// //               </Link>
// //             </div>
// //           </div>
// //         </Container>
// //       )}
// //     </div>
// //     {/* <div className='main_nfc'>
// //       {isBigScreen && (
// //         <div className="img_nfc">
// //           <img src="/image/mobilebanner.webp" alt="NFC Tags Banner" />
// //           <div className="data_nfc">
// //             <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
// //             <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
// //             <Link href="/contact-us">
// //               <div className='nfc_button'>
// //                 <button>Get Started</button>
// //               </div>
// //             </Link>
// //           </div>
// //         </div>
// //       )}
// //       {isLaptop && (
// //         <div className="img_nfc2">
// //           <img src="/image/mobilebannerlap.webp" alt="NFC Tags Banner for Laptops" />
// //           <div className="data_nfc2">
// //             <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
// //             <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
// //             <Link href="/contact-us">
// //               <div className='nfc_button2'>
// //                 <button>Get Started</button>
// //               </div>
// //             </Link>
// //           </div>
// //         </div>
// //       )}
// //       {isTab && (
// //         <div className="img_nfc3">
// //           <img src="/image/nfctab.webp" alt="NFC Tags Banner for Tablets" />
// //           <div className="data_nfc3">
// //             <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
// //             <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
// //             <Link href="/contact-us">
// //               <div className='nfc_button3'>
// //                 <button>Get Started</button>
// //               </div>
// //             </Link>
// //           </div>
// //         </div>
// //       )}
// //       {isMob && (
// //         <Container>
// //           <div className="img_nfc3">
// //             <img src="/image/nfcmob2.webp" alt="NFC Tags Banner for Mobiles" />
// //             <div className="data_nfc3">
// //               <h6 className='heading'>Unleashing the New Horizons of NFC Tags in Packaging</h6>
// //               <p>Get the NFC tags from us for each and every packaging product. We print and produce them. We also suggest adjusting these tags to the most suitable places on your packaging products. Get them, be secure, be futuristic.</p>
// //               <Link href="/contact-us">
// //                 <div className='nfc_button3'>
// //                   <button>Get Started</button>
// //                 </div>
// //               </Link>
// //             </div>
// //           </div>
// //         </Container>
// //       )}
// //     </div> */}
// //     </>
// //   );
// // }

// // export default Nfc;
