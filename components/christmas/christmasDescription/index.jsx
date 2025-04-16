import React from 'react'
import { Container } from 'react-bootstrap';

function ChristmasDescription() {

    // contentData.js
    const contentData = [
        {
            heading: "Custom Printed Christmas Boxes In More Than 40 Styles",
            paragraphs: [
                "Christmas was beautiful 2000 years ago; it has been our most 'Joyous Festival' to this day. Print 247 celebrates this day with warm clothes, roasted meats, and gifts in our in-house-made custom Christmas boxes. Whether you are a corporate company, premium brand or retailer, we support you with a wide range of festivity packaging products.",
                "Let’s try something new this Christmas with us. Give something special to your customers. Offer a significant holiday cheering packed product to your clients. You can create a unique unboxing experience with us for your clients. We make the most pleasing Christmas packaging boxes in more than forty styles.",
                "So, this winter, there won’t only be Christmas lights, trees, ice skating, movies, and greetings, but there will also be cute Christmas encasements. Make your brand reach each consumer and every household with our fully customizable Christmas gift packaging boxes.",
            ],
        },
        {
            heading: "Excitement of the ‘Yule’ Starts with A Cute Christmas Packaging Box",
            paragraphs: [
                "Indeed, you can promote your brand marvelously with our cute yet cheap Christmas boxes. Print 247 is an in-house printing and packaging company that loves to make Christmas packaging products. Our passion and yearning for 'Merry Time' are reflected through our cost-effective packaging solutions.",
                "Each year, our packaging company goes through jubilant seasonal galore. Indeed, we have all the time for you as we are fully capable of providing you with both bulk and minimum order quantities. Just inform us what type of Christmas branded boxes you are looking to make, and we will bring those boxes in the daylight for you.",
            ],
        },
        {
            heading: "Give New Offers To Your Customers With Premium Christmas Packaging",
            paragraphs: [
                "This is the right time to make new clients for your retail, premium, or ecommerce brands. We will fully support you with our Christmas packaging products. We will adorn your ‘happy’ packaging with the following premium add-ons:",
            ],
            list: [
                "100% Devoted Graphic Designing Support: Upload your print-ready designs at our website. If you want to improve your Christmas packaging themes, then you can definitely collaborate with our graphic design team and create a phenomenal design for your Christmas Boxes.",
                "Neat Printing for Every Holy Day Packaging: We have installed the latest printing equipment to provide you with shining and sparkling printing results. So, you can trust us to make the most marvelous encasements for Christmas retail selling.",
                "Premium Paperized Packaging Materials: Print 247 is an eco-friendly product packaging company. We consider it our responsibility to make America greener than ever; this is why Packaging boxes for Christmas are not an exception. We use biodegradable packaging materials most for our packaging supplies.",
                "Dream Customization Becomes A Reality: We let you build your own Christmas boxes, mylar bags, pouches, and all the retail products. Your journey with us starts with making every Christmastime packaging from scratch. Once you finalize the graphic design of your packaging, we will produce it carefully. Our QA team ensures to provide you with error-free packaging goods.",
            ],
        },
        {
            heading: "Start your Small Business, Premium Brand, or e-commerce brand This Christmas",
            paragraphs: [
                "Christmas is the season of smiles, joys, happiness, prosperity, and, indeed, to start a new business. We empower you to start your own business by this year’s 25th of December. Yes, you have read right.",
                "Lay the foundation of your small business, ecommerce brand, or any product-based business. Open a retail store or sell online; we are with you. We can become your packaging partner with all the pleasure.",
                "Pick even a single product, pack it in our affordable packaging boxes, and sell it anywhere you want. Let everyone see that you have arrived. Let this Christmas be your best Christmas ever.",
            ],
        },
    ];


    return (
        <div className='product_christmas_detail'>
            <Container>
                <div className="content_Container">
                    {contentData.map((section, index) => (
                        <div key={index} className="content_section">
                            <h2>{section.heading}</h2>
                            {section.paragraphs.map((paragraph, pIndex) => (
                                <p key={pIndex}>{paragraph}</p>
                            ))}
                            {section.list && (
                                <ul>
                                    {section.list.map((item, liIndex) => (
                                        <li key={liIndex}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default ChristmasDescription
