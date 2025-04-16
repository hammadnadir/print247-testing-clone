import Link from 'next/link';
import React from 'react'
import Slider from 'react-slick';

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <img
            src="/home/latestSmarterBranding/smarter_arrow_left.webp"
            alt="Next"
            className={className}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <img
            src="/home/latestSmarterBranding/smarter_arrow_right.webp"
            alt="Prev"
            className={className}
            onClick={onClick}
        />
    );
}

function LatestIndustryMobile() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: false,
        autoplaySpeed: 3000,
    };

    // ARRAY OF INDUSTRIES

    const industryOne = [
        {
            image: "/home/latestIndustry/cbd1.webp",
            title: "CBD Packaging",
            description: "Our every CBD packaging product is crafted to protect, impress, and build trust at first sight. Smart packaging makes marijuana brands stand out.",
            stock: "New",
            links: "/industry/vape-packaging",
        },
        {
            image: "/home/latestIndustry/apparel2.webp",
            title: "Apparel & Fashion Packaging",
            description: "Presenting an extensive range of apparel labels, luxury boxes, and eco-friendly bags. Personalized packaging can elevate any fashion brand with style.",
            stock: "New",
            links: "/industry/apparel-and-fashion-packaging",
        },
        {
            image: "/home/latestIndustry/food3.webp",
            title: "Food and Beverages",
            description: "We provide every food and beverage packaging solution from farm to table. Our packaging products preserve freshness and always enhance shelf appeal.",
            stock: "New",
            links: "/industry/food-packaging",
        },
        {
            image: "/home/latestIndustry/industry7.webp",
            title: "Pharmaceutical Packaging",
            description: "Advanced protection remains intact with pharmaceutical packaging products. FDA-compliant, reliable, and secure packaging products on demand.",
            stock: "New",
            links: "/industry/pharmaceutical-packaging",
        },
    ];

    const industryTwo = [
        {
            image: "/home/latestIndustry/automative4.webp",
            title: "Automative packaging",
            description: "We believe in printing and producing automotive packaging products that endure, secure, and deliver parts with efficiency and excellence everywhere.",
            stock: "Coming Soon",
            links: "",
        },
        {
            image: "/home/latestIndustry/bakery5.webp",
            title: "Bakery Packaging",
            description: "These packaging products are specially designed for bakers and are loved by customers. Make every cookie, pastry, or cake look as good as it tastes.",
            stock: "Coming Soon",
            links: "",
        },
        {
            image: "/home/latestIndustry/cosmetics6.webp",
            title: "Cosmetics Packaging",
            description: "Elevate the beauty brand with premium packaging solutions that protect, captivate, and turn every product into a luxurious buying experience.",
            stock: "Coming Soon",
            links: "",
        },
        {
            image: "/home/latestIndustry/industry8.webp",
            title: "Pets Packaging",
            description: "A vast range of packaging products for pet care that preserves the freshness of all the treats and protects toys. We keep both pets and owners happy.",
            stock: "Coming Soon",
            links: "",
        },
    ];

    const industryThree = [
        {
            id: 1,
            imgSrc: "/home/latestIndustry/industry9.webp",
            title: "Stationery Packaging",
            description: "We make stationery packaging products that protect, secure, and functionally arrange writing essentials. So, consumers buy from display to desk.",
            stock: "Coming Soon",
            links: "",
        },
        {
            id: 2,
            imgSrc: "/home/latestIndustry/industry10.webp",
            title: "Gift Packaging",
            description: "Gift packaging is more than just a box. It speaks emotions by creating memories with a personal touch to every present with a unique unboxing experience.",
            stock: "Coming Soon",
            links: "",
        },
        {
            id: 3,
            imgSrc: "/home/latestIndustry/industry11.webp",
            title: "Mailer Box Packaging",
            description: "Mailer boxes can bring delight with each product to every doorstep. We Print and produce shipping-ready, highly protective, and fully customizable boxes.",
            stock: "Coming Soon",
            links: "",
        },
        {
            id: 4,
            imgSrc: "/home/latestIndustry/industry12.webp",
            title: "Candy and Sweets",
            description: "Presenting packaging products for a variety of candies, gummies, chocolates, and sweets. Packaging can make every treat irresistible and tempting.",
            stock: "Coming Soon",
            links: "",
        },
    ];

    const industryFour = [
        {
            id: 1,
            image: "/home/latestIndustry/industry13.webp",
            title: "E-Commerce Packaging",
            description: "Smart, sturdy, and sustainable e-commerce packaging products are ideal for safe shipping and the best for brand impact and warehouse-to-door delivery.",
            stock: "Coming Soon",
            links: "",
        },
        {
            id: 2,
            image: "/home/latestIndustry/industry14.webp",
            title: "Display Packaging",
            description: "Showcase the products with premium display packaging. Durable packaging box stocks, strong structures and strategic branding boosts impulsive buying.",
            stock: "Coming Soon",
            links: "",
        },
        {
            id: 3,
            image: "/home/latestIndustry/industry15.webp",
            title: "Retail Packaging",
            description: "Custom retail packaging can make products fly off the shelves. Eco-friendly materials, vibrant themes, and premium finishes stand out effortlessly.",
            stock: "Coming Soon",
            links: "",
        },
        {
            id: 4,
            image: "/home/latestIndustry/industry16.webp",
            title: "Toy Packaging",
            description: "Print 247 believes in toy packaging products that come with irresistible charm yet protection. Make the kids ready to unwrap the fun from shelf to hands.",
            stock: "Coming Soon",
            links: "",
        },
    ];

    const industryFive = [
        {
            id: 1,
            image: "/home/latestIndustry/industry17.webp",
            title: "Decoration Packaging",
            description: "We craft decoration packaging products to ideally protect the products by adding a touch of appeal, aesthetics, delicacy, elegance, and sophistication.",
            stock: "Coming Soon",
            links: "",
        },
        {
            id: 2,
            image: "/home/latestIndustry/industry18.webp",
            title: "Electronics Packaging",
            description: "Our electronics packaging is built for durability, branding, and an unbeatable unboxing experience. Keep the products secure and elevate the brand.",
            stock: "Coming Soon",
            links: "",
        },
    ]

    return (
        <div className='new_container'>
            <div className='new_industry_supplies_mobile'>
                <h2>All-Inclusive Industrial Packaging Supplies</h2>
                <Slider {...settings}>

                    {/* INDUSTRY 1 */}
                    <div className="industry_grid_main">
                        <div className="industry_grid_1">
                            {industryOne.map((item, index1) => (
                                item.links ? (
                                    <Link href={item.links} key={index1}>
                                        <div className="inner_industry_grid_1" >
                                            <img src={item.image} alt="industry image" />
                                            <div className={`coming_soon ${item.stock === "New" ? "new-stock" : item.stock === "Coming Soon" ? "coming-soon-stock" : ""}`}>
                                                <div className="coming_soon_bg">
                                                    <p>{item.stock}</p>
                                                </div>
                                            </div>
                                            <div className="industry_details">
                                                <div className="indus_title_arr">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="inner_industry_grid_1" key={index1}>
                                        <img src={item.image} alt="industry image" />
                                        <div className={`coming_soon ${item.stock === "New" ? "new-stock" : item.stock === "Coming Soon" ? "coming-soon-stock" : ""}`}>
                                            <div className="coming_soon_bg">
                                                <p>{item.stock}</p>
                                            </div>
                                        </div>
                                        <div className="industry_details">
                                            <div className="indus_title_arr">
                                                <h3>{item.title}</h3>
                                            </div>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>

                    {/* INDUSTRY 2 */}
                    <div className='industry_grid_main'>
                        <div className='industry_grid_2'>
                            {industryTwo.map((item, index2) => (
                                item.links ? (
                                    <Link href={item.links} key={index2}>
                                        <div className='inner_industry_grid_2'>
                                            <img src={item.image} alt={item.title} />
                                            <div className={`coming_soon ${item.stock === "New" ? "new-stock" : item.stock === "Coming Soon" ? "coming-soon-stock" : ""}`}>
                                                <div className="coming_soon_bg">
                                                    <p>{item.stock}</p>
                                                </div>
                                            </div>
                                            <div className='industry_details'>
                                                <div className='indus_title_arr'>
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    <div className='inner_industry_grid_2' key={index2}>
                                        <img src={item.image} alt={item.title} />
                                        <div className={`coming_soon ${item.stock === "New" ? "new-stock" : item.stock === "Coming Soon" ? "coming-soon-stock" : ""}`}>
                                            <div className="coming_soon_bg">
                                                <p>{item.stock}</p>
                                            </div>
                                        </div>
                                        <div className='industry_details'>
                                            <div className='indus_title_arr'>
                                                <h3>{item.title}</h3>
                                            </div>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>

                    {/* INDUSTRY 3 */}
                    <div className="industry_grid_main">
                        <div className="industry_grid_3">
                            {industryThree.map((item, index3) => (
                                item.links ? (
                                    <Link href={item.links} key={index3}>
                                        <div className="inner_industry_grid_3">
                                            <img src={item.imgSrc} alt="industry image" />
                                            <div className={`coming_soon ${item.stock === "New" ? "new-stock" : item.stock === "Coming Soon" ? "coming-soon-stock" : ""}`}>
                                                <div className="coming_soon_bg">
                                                    <p>{item.stock}</p>
                                                </div>
                                            </div>
                                            <div className="industry_details">
                                                <div className="indus_title_arr">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="inner_industry_grid_3" key={index3}>
                                        <img src={item.imgSrc} alt="industry image" />
                                        <div className={`coming_soon ${item.stock === "New" ? "new-stock" : item.stock === "Coming Soon" ? "coming-soon-stock" : ""}`}>
                                            <div className="coming_soon_bg">
                                                <p>{item.stock}</p>
                                            </div>
                                        </div>
                                        <div className="industry_details">
                                            <div className="indus_title_arr">
                                                <h3>{item.title}</h3>
                                            </div>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>

                    {/* INDUSTRY 4 */}
                    <div className="industry_grid_main">
                        <div className="industry_grid_4">
                            {industryFour.map((item) => (
                                item.links ? (
                                    <Link href={item.links} key={item.id}>
                                        <div className="inner_industry_grid_4">
                                            <img src={item.image} alt="industry image" />
                                            <div className={`coming_soon ${item.stock === "New" ? "new-stock" : item.stock === "Coming Soon" ? "coming-soon-stock" : ""}`}>
                                                <div className="coming_soon_bg">
                                                    <p>{item.stock}</p>
                                                </div>
                                            </div>
                                            <div className="industry_details">
                                                <div className="indus_title_arr">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="inner_industry_grid_4" key={item.id}>
                                        <img src={item.image} alt="industry image" />
                                        <div className={`coming_soon ${item.stock === "New" ? "new-stock" : item.stock === "Coming Soon" ? "coming-soon-stock" : ""}`}>
                                            <div className="coming_soon_bg">
                                                <p>{item.stock}</p>
                                            </div>
                                        </div>
                                        <div className="industry_details">
                                            <div className="indus_title_arr">
                                                <h3>{item.title}</h3>
                                            </div>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>

                    {/* INDUSTRY 5 */}
                    <div className="industry_grid_main">
                        <div className="industry_grid_4">
                            {industryFive.map((item) => (
                                item.links ? (
                                    <Link href={item.links} key={item.id}>
                                        <div className="inner_industry_grid_4">
                                            <img src={item.image} alt="industry image" />
                                            <div className={`coming_soon ${item.stock === "New" ? "new-stock" : item.stock === "Coming Soon" ? "coming-soon-stock" : ""}`}>
                                                <div className="coming_soon_bg">
                                                    <p>{item.stock}</p>
                                                </div>
                                            </div>
                                            <div className="industry_details">
                                                <div className="indus_title_arr">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="inner_industry_grid_4" key={item.id}>
                                        <img src={item.image} alt="industry image" />
                                        <div className={`coming_soon ${item.stock === "New" ? "new-stock" : item.stock === "Coming Soon" ? "coming-soon-stock" : ""}`}>
                                            <div className="coming_soon_bg">
                                                <p>{item.stock}</p>
                                            </div>
                                        </div>
                                        <div className="industry_details">
                                            <div className="indus_title_arr">
                                                <h3>{item.title}</h3>
                                            </div>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </Slider >
            </div >
        </div >
    )
}

export default LatestIndustryMobile
