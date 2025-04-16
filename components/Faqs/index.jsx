import Image from "next/image";
import React, { useState } from "react";
import { Container } from "react-bootstrap";

function Faqs() {

    const [show, setShow] = useState(1);
    const [selected, setSelected] = useState(1)

    const handleClick1 = () => {
        if (show === 1) {
            setShow("")
        } else {
            setShow(1)
        }
    }

    const handleClick2 = () => {
        if (show === 2) {
            setShow("")
        } else {
            setShow(2)
        }
    }

    const handleClick3 = () => {
        if (show === 3) {
            setShow("")
        } else {
            setShow(3)
        }
    }

    const handleClick4 = () => {
        if (show === 4) {
            setShow("")
        } else {
            setShow(4)
        }
    }

    const handleClick5 = () => {
        if (show === 5) {
            setShow("")
        } else {
            setShow(5)
        }
    }

    const handleClick6 = () => {
        if (show === 6) {
            setShow("")
        } else {
            setShow(6)
        }
    }

    const data = [
        {
            id: 1,
            image: "/image/general1.webp",
            heading: "Boxes & Packaging",
        },
        {
            id: 2,
            image: "/image/general2.webp",
            heading: "Mylar Bag",
        },
        {
            id: 3,
            image: "/image/general3.webp",
            heading: "Labels & Stickers",
        },
        {
            id: 4,
            image: "/image/general4.webp",
            heading: "Signs & Banners",
        },
        {
            id: 5,
            image: "/image/general5.webp",
            heading: "Business Cards",
        },
        {
            id: 6,
            image: "/image/general6.webp",
            heading: "Print Products",
        },
        // {
        //     id: 7,
        //     image: "/image/general7.webp",
        //     heading: "Promotional Products",
        // },
        // {
        //     id: 8,
        //     image: "/image/general8.webp",
        //     heading: "Clothing & Bags",
        // },
    ]

    // FAQS ARRAY

    const faqData1 = [
        {
            title: "What types of packaging materials are commonly used for boxes?",
            content: "Common packaging materials include cardboard, corrugated cardboard, paperboard, plastic, and metal. The choice depends on the product's nature, weight, and shipping requirements.",
        },
        {
            title: "Can I customize the design of my boxes?",
            content: "Yes, many packaging providers offer customization options. You can choose the box size, material, and colors. You can add your branding through logos and artwork.",
        },
        {
            title: "Can I order the packaging in bulk?",
            content: "Yes, we can offer bulk packaging ordering options, which can be cost-effective. Ensure you have sufficient storage space and consider factors like lead time and storage conditions.",
        },
        {
            title: "How can I determine the correct box size for my product?",
            content: "Measure the dimensions of your product and consider its weight. Choose a box that provides enough space for proper padding and protection while minimizing excess space to reduce shipping costs.",
        },
        {
            title: "Are there packaging solutions suitable for fragile items?",
            content: "You can use packaging materials such as bubble wrap, foam inserts, or air pillows to add extra cushioning. Consider double boxing for exceptionally fragile items.",
        },
    ];
    const faqData2 = [
        {
            title: "Can Mylar bags be used for vacuum sealing?",
            content: "Some Mylar bags are designed for vacuum sealing to remove air and further enhance the preservation of the contents. However, not all Mylar bags are suitable for vacuum sealing. So, checking the product specifications is essential.",
        },
        {
            title: "What are the advantages of using Mylar bags for packaging?",
            content: "Mylar bags offer excellent barrier properties, lightweight design, durability, and flexibility. They are resistant to punctures, tears, and moisture. It making them ideal for preserving the integrity of sensitive or perishable items.",
        },
        {
            title: "Can I print my logo or design on Mylar bags?",
            content: "Many manufacturers offer customization options. They allowing you to print your logo, branding, or design on Mylar bags. Custom printing adds a personalized touch to your packaging.",
        },
        {
            title: "What types of products are commonly packaged in Mylar bags?",
            content: "Mylar bags are versatile and used for various products such as dry foods, coffee, nuts, herbs, spices, pharmaceuticals, electronics, and other items requiring environmental protection.",
        },
    ];
    const faqData3 = [
        {
            title: "What is the difference between labels and stickers?",
            content: "Labels are often considered a broader category that includes information or branding applied directly to a product or packaging. On the other hand, stickers are usually removable and can be used on various surfaces for promotional or decorative purposes.",
        },
        {
            title: "Are labels and stickers waterproof?",
            content: "It depends on the material. Vinyl and polyester labels are generally more water-resistant than paper labels. For waterproof applications, consider materials specifically designed for outdoor or wet environments.",
        },
        {
            title: "What materials are commonly used for labels and stickers?",
            content: "Labels and stickers can be made from paper, vinyl, polyester, and more. The choice of material depends on factors such as application, durability requirements, and the environment in which they will be used..",
        },
        {
            title: "Can labels and stickers be used for promotional purposes at events or on products? ",
            content: "Labels and stickers are versatile and can be used for promotional giveaways, event branding, or to highlight special product offers.",
        },
    ];
    const faqData4 = [
        {
            title: "What is the primary purpose of using signs and banners for businesses?",
            content: "Signs and banners serve various purposes, including brand promotion and different advertising. These varieties of signs and banners have a positive impact on customers. They also enhance the visibility of your brand.",
        },
        {
            title: "Are your signs and banners suitable for both indoor and outdoor use? ",
            content: "Designed for versatility, our signs and banners serve various needs, providing promotional materials for indoor events or durable outdoor signage. We have options that can withstand different environmental conditions.",
        },
        {
            title: "Are your banners and signs eco-friendly? ",
            content: "We offer eco-friendly options for environmentally conscious customers. Our team can guide you in choosing sustainable materials and printing processes that align with your commitment to environmental responsibility.",
        },
        {
            title: "What sizes are available for signs and banners?",
            content: "We offer a range of sizes to accommodate different preferences and requirements. From minor yard signs to large event banners, we can help you find the dimensions that best suit your promotional needs.",
        },
    ];
    const faqData5 = [
        {
            title: "What types of business cards do you offer?",
            content: "We offer diverse business cards, including standard, premium, matte, glossy, and specialty finishes. Our selection caters to different preferences and business needs.",
        },
        {
            title: "What materials are used for your business cards?",
            content: "We offer business cards in various materials, including standard cardstock, premium paper, and eco-friendly options. The choice of material depends on your preferences and the image you want to convey.",
        },
        {
            title: "Can I order a sample of my business card before placing a larger order?",
            content: "Yes, we offer the option to order a sample of your business card to ensure you are satisfied with the design, materials, and finishes before placing a larger order.",
        },
        {
            title: "Can I print double-sided business cards?",
            content: "Absolutely! Most of our business card options allow for double-sided printing. This provides additional space for information, graphics, or a personalized touch on the back of your cards.",
        },
    ];
    const faqData6 = [
        {
            title: "Do you offer environmentally friendly print options?",
            content: "We are committed to sustainability and offer eco-friendly choices for our print products. It includes recycled paper, soy-based inks, and other environmentally conscious printing practices.",
        },
        {
            title: "What printing options are available for my print products?",
            content: "We provide high-quality printing options, including full-color printing, high-resolution graphics, and finishes like foil stamping and embossing. You can choose these options based on your preferences and specific requirements.",
        },
        {
            title: "Can I customize the design of my print products?",
            content: "Yes, customization is a crucial feature of our print services. You can upload your design or collaborate with our design team to create a personalized and professional look for your print products.",
        },
        {
            title: "Can I cancel or modify my order after it's been placed?",
            content: "Once an order is confirmed, it enters production quickly for prompt delivery. Due to this, modifications may not be possible. Please review your order carefully before confirming to avoid any discrepancies.",
        },
    ];

    const handleClick = (index) => {
        setShow(show === index ? null : index);
    };

    return (
        <>
            <div className="faq_main">
                <Container>
                    <div className='general-topics'>
                        <h3>General Topics</h3>
                        <div className='inner-general-topics'>
                            {data.map((items, index) => {
                                return (
                                    <div className={"bottom-general"} key={index}>
                                        {<div className={`head_general_image ${selected === items.id ? "selected" : ""}`} onClick={() => setSelected(items.id)}>
                                            <div className='image_general'>
                                                <Image src={items.image} width={52} height={52} alt={items.heading}/>
                                            </div>
                                            <div className='headgeneral'>
                                                <h3>{items.heading}</h3>
                                            </div>
                                        </div>}
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </Container>
            </div>

            {selected === 1 && <div className='boxes_package_faq'>
                <div className='main_boxes_faq'>
                    <Container>
                        <div className='Faq_sectionbox'>
                            <h3>Boxes & Packaging</h3>
                            <div>
                                {faqData1.map((item, index) => (
                                    <>
                                        <div className='faq_question1' key={index}>
                                            <div style={{ width: "100%" }}>
                                                <div className='accordianss' onClick={() => handleClick(index)}>
                                                    <h4>{item.title}</h4>
                                                    {show === index ? (
                                                        <div className='icon_style'>
                                                            <Image src="/image/right.png" alt="right arrow icon" layout="fill" objectFit="cover" objectPosition="center" />
                                                        </div>
                                                    ) : (
                                                        <div className='icon_style2'>
                                                            <Image src="/image/bottom.png" alt="bottom arrow icon" layout="fill" objectFit="cover" objectPosition="center" />
                                                        </div>
                                                    )}
                                                </div>
                                                <p className={show === index ? "para1" : "para"}>{item.content}</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                ))}
                            </div>
                        </div>
                    </Container>
                </div>
            </div>}

            {selected === 2 && <div className='boxes_package_faq'>
                <div className='main_boxes_faq'>
                    <Container>
                        <div className='Faq_sectionbox'>
                            <h3>Mylar Bags</h3>
                            <div>
                                {faqData2.map((item, index) => (
                                    <>
                                        <div className='faq_question1' key={index}>
                                            <div style={{ width: "100%" }}>
                                                <div className='accordianss' onClick={() => handleClick(index)}>
                                                    <h4>{item.title}</h4>
                                                    {show === index ? (
                                                        <div className='icon_style'>
                                                            <Image src="/image/right.png" alt="arrow icon" layout="fill" objectFit="cover" objectPosition="center" />
                                                        </div>
                                                    ) : (
                                                        <div className='icon_style2'>
                                                            <Image src="/image/bottom.png" alt="arrow icon" layout="fill" objectFit="cover" objectPosition="center" />
                                                        </div>
                                                    )}
                                                </div>
                                                <p className={show === index ? "para1" : "para"}>{item.content}</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                ))}
                            </div>
                        </div>
                    </Container>
                </div>
            </div>}

            {selected === 3 && <div className='boxes_package_faq'>
                <div className='main_boxes_faq'>
                    <Container>
                        <div className='Faq_sectionbox'>
                            <h3>Label & Stickers</h3>
                            <div>
                                {faqData3.map((item, index) => (
                                    <>
                                        <div className='faq_question1' key={index}>
                                            <div style={{ width: "100%" }}>
                                                <div className='accordianss' onClick={() => handleClick(index)}>
                                                    <h4>{item.title}</h4>
                                                    {show === index ? (
                                                        <div className='icon_style'>
                                                            <Image src="/image/right.png" alt="arrow icon" layout="fill" objectFit="cover" objectPosition="center" />
                                                        </div>
                                                    ) : (
                                                        <div className='icon_style2'>
                                                            <Image src="/image/bottom.png" alt="arrow icon" layout="fill" objectFit="cover" objectPosition="center" />
                                                        </div>
                                                    )}
                                                </div>
                                                <p className={show === index ? "para1" : "para"}>{item.content}</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                ))}
                            </div>
                        </div>
                    </Container>
                </div>
            </div>}

            {selected === 4 && <div className='boxes_package_faq'>
                <div className='main_boxes_faq'>
                    <Container>
                        <div className='Faq_sectionbox'>
                            <h3>Sign & Banners</h3>
                            <div>
                                {faqData4.map((item, index) => (
                                    <>
                                        <div className='faq_question1' key={index}>
                                            <div style={{ width: "100%" }}>
                                                <div className='accordianss' onClick={() => handleClick(index)}>
                                                    <h4>{item.title}</h4>
                                                    {show === index ? (
                                                        <div className='icon_style'>
                                                            <Image src="/image/right.png" alt="arrow icon" layout="fill" objectFit="cover" objectPosition="center" />
                                                        </div>
                                                    ) : (
                                                        <div className='icon_style2'>
                                                            <Image src="/image/bottom.png" alt="arrow icon" layout="fill" objectFit="cover" objectPosition="center" />
                                                        </div>
                                                    )}
                                                </div>
                                                <p className={show === index ? "para1" : "para"}>{item.content}</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                ))}
                            </div>
                        </div>
                    </Container>
                </div>
            </div>}

            {selected === 5 && <div className='boxes_package_faq'>
                <div className='main_boxes_faq'>
                    <Container>
                        <div className='Faq_sectionbox'>
                            <h3>Business Cards</h3>
                            <div>
                                {faqData5.map((item, index) => (
                                    <>
                                        <div className='faq_question1' key={index}>
                                            <div style={{ width: "100%" }}>
                                                <div className='accordianss' onClick={() => handleClick(index)}>
                                                    <h4>{item.title}</h4>
                                                    {show === index ? (
                                                        <div className='icon_style'>
                                                            <Image src="/image/right.png" alt="arrow icon" layout="fill" objectFit="cover" objectPosition="center" />
                                                        </div>
                                                    ) : (
                                                        <div className='icon_style2'>
                                                            <Image src="/image/bottom.png" alt="arrow icon" layout="fill" objectFit="cover" objectPosition="center" />
                                                        </div>
                                                    )}
                                                </div>
                                                <p className={show === index ? "para1" : "para"}>{item.content}</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                ))}
                            </div>
                        </div>
                    </Container>
                </div>
            </div>}

            {selected === 6 && <div className='boxes_package_faq'>
                <div className='main_boxes_faq'>
                    <Container>
                        <div className='Faq_sectionbox'>
                            <h3>Print Products</h3>
                            <div>
                                {faqData6.map((item, index) => (
                                    <>
                                        <div className='faq_question1' key={index}>
                                            <div style={{ width: "100%" }}>
                                                <div className='accordianss' onClick={() => handleClick(index)}>
                                                    <h4>{item.title}</h4>
                                                    {show === index ? (
                                                        <div className='icon_style'>
                                                            <Image src="/image/right.png" alt="arrow icon" layout="fill" objectFit="cover" objectPosition="center" />
                                                        </div>
                                                    ) : (
                                                        <div className='icon_style2'>
                                                            <Image src="/image/bottom.png" alt="arrow icon" layout="fill" objectFit="cover" objectPosition="center" />
                                                        </div>
                                                    )}
                                                </div>
                                                <p className={show === index ? "para1" : "para"}>{item.content}</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                ))}
                            </div>
                        </div>
                    </Container>
                </div>
            </div>}

        </>
    );
}

export default Faqs;
