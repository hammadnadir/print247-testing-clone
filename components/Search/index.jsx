import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const SearchCom = ({ dropdownRef, setFocusInput }) => {

    const { searchData } = useSelector((state) => state.home);
    const router = useRouter()
    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //             setFocusInput(false);
    //         }
    //     };

    //     document.addEventListener('mousedown', handleClickOutside);

    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, []);


    const searchdata = [
        {
            id: 1,
            name: "Business Card",
            image: "/image/input-cross.png",
            link: "/category/business-cards-shapes",
        },
        {
            id: 2,
            name: "Printed Pouches",
            image: "/image/input-cross.png",
            link: "/printed-pouches",
        },
        {
            id: 3,
            name: "T-Shirts",
            image: "/image/input-cross.png",
            link: "/t-shirts",
        },
    ]
    
    const printdata = [
        {
            id: 1,
            name: "Mailer Box",
            image: "/image/printmailer1.png",
            link: "/mailer-boxes",
        },
        {
            id: 2,
            name: "Label",
            image: "/image/printmailer2.png",
            link: "/category/labels-stickers-special-stickers",
        },
        {
            id: 3,
            name: "Business Cards",
            image: "/image/printmailer3.png",
            link: "/category/business-cards-shapes",
        },
    ]

    return (
        <div className='main_search' ref={dropdownRef}>
            
            <div className='main_print'>
                <h3>Popular on Print247</h3>
                <div className='inner_print'>
                    {printdata.map((item, i) => {
                        return (
                            <Link href={item.link ? item.link : router.asPath}>
                                <div className='print_product' key={i}>
                                    <div>
                                        <img src={item.image} alt={item.name}/>
                                    </div>
                                    <p>{item.name}</p>
                                </div>
                            </Link>
                        )
                    })}

                </div>
            </div>
        </div>
    );
}

export default SearchCom;
