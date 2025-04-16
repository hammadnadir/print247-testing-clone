import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function CampaignMayLike({ showFullContent, setShowFullContent }) {
    const [selected, setSelected] = useState(1);

    const { detailData } = useSelector((state) => state.detail);
    const router = useRouter();
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        setShowFullContent(false);
        if (router.query.id) {
            setSelectedId(parseInt(router.query.id, 10)); // parse id as integer
        }
    }, [router.asPath, router.query.id]);

    const handleClick1 = () => {
        if (show === 1) {
            setShow("");
        } else {
            setShow(1);
        }
    };

    const handleClick2 = () => {
        if (show === 2) {
            setShow("");
        } else {
            setShow(2);
        }
    };

    const handleClick3 = () => {
        if (show === 3) {
            setShow("");
        } else {
            setShow(3);
        }
    };

    const handleClick4 = () => {
        if (show === 4) {
            setShow("");
        } else {
            setShow(4);
        }
    };

    const products = [
        {
            id: 1,
            imgSrc: "/compaignPolitcal/politicalSigns/Postcards.webp",
            slug: "custom-political-postcards",
            title: "Postcards",
            delivery: "Delivery: 4-5 Days",
            description: "See a vast range of political postcards with custom messaging"
        },
        {
            id: 2,
            imgSrc: "/compaignPolitcal/politicalSigns/busimesscards.webp",
            slug: "custom-political-business-cards",
            title: "Business Cards",
            delivery: "Delivery: 4-5 Days",
            description: "Design tactful political business cards and get neatly printed."
        },
        {
            id: 3,
            imgSrc: "/compaignPolitcal/politicalSigns/brochures.webp",
            slug: "custom-political-brochures",
            title: "Brochures",
            delivery: "Delivery: 4-5 Days",
            description: "Make political brochures from scratch. Fully customized and Affordable."
        },
        {
            id: 4,
            imgSrc: "/compaignPolitcal/politicalSigns/bumperStickers.webp",
            slug: "custom-political-bumper-stickers",
            title: "Bumper Stickers",
            delivery: "Delivery: 4-5 Days",
            description: "It is possible to make election bumper stickers in any style."
        },
        {
            id: 5,
            imgSrc: "/compaignPolitcal/politicalSigns/stickers.webp",
            slug: "custom-political-stickers",
            title: "Stickers",
            delivery: "Delivery: 4-5 Days",
            description: "Let everyone know your political affiliation at wholesale prices."
        },
    ];

    // Filter out the selected product by its `id` and pick 3 random items
    const filteredProducts = selectedId
        ? products.filter((product) => product.id !== selectedId)
        : products;

    const randomProducts = filteredProducts
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    const content = detailData?.description;
    const truncatedLength = content?.split(">")?.slice(0, 50);
    const truncatedContent = content?.split(">")?.slice(0, 50).join(">");

    return (
        <div className="main_camapign_like">
            <Container>
                <div className="inner-descriptionn">
                    {detailData?.description && (
                        <div onClick={() => setSelected(1)} className={`inerrs ${selected === 1 && "select"}`}>
                            <h4>Description</h4>
                        </div>
                    )}
                </div>

                {detailData?.description && selected === 1 && (
                    <div className="main-customShirt">
                        <div className="customShirt-head">
                            <div>
                                <div
                                    className="para_upperr"
                                    dangerouslySetInnerHTML={{
                                        __html: showFullContent ? content : truncatedContent,
                                    }}
                                ></div>
                                {content &&
                                    truncatedLength?.length > 19 &&
                                    !showFullContent && (
                                        <Link href={router.asPath} onClick={() => setShowFullContent(true)}>
                                            Read More
                                        </Link>
                                    )}
                            </div>
                        </div>
                    </div>
                )}

                {selected === 2 && (
                    <div className="stickerdetail-faq">
                        <div className="mainstickdetail_faq">
                            <Container>
                                <div className="Faqsticker_section">
                                    <h3>Frequently Asked Questions</h3>
                                    <div>
                                        <div className="faq_question1">
                                            <div style={{ width: "100%" }}>
                                                <div className="accordianss" onClick={handleClick1}>
                                                    <h4>
                                                        What is the difference between matte, gloss, and
                                                        high-gloss coating?
                                                    </h4>
                                                    {show === 1 && (
                                                        <div className="icon_style">
                                                            <Image
                                                                src="/image/right.png"
                                                                alt="right icon"
                                                                layout="fill"
                                                                objectFit="cover"
                                                                objectPosition="center"
                                                            />
                                                        </div>
                                                    )}
                                                    {show !== 1 && (
                                                        <div className="icon_style2">
                                                            <Image
                                                                src="/image/bottom.png"
                                                                alt="bottom icon"
                                                                layout="fill"
                                                                objectFit="cover"
                                                                objectPosition="center"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                                <p className={`${show === 1 ? "para1" : "para"}`}>
                                                    Matte coating appears smooth and satin-like, unlike
                                                    gloss and high-gloss. This effect happens because it
                                                    does not reflect light. It is recommended for those
                                                    who need a rustic or subdued look for their design.
                                                    Gloss coating makes the design shine, so colors appear
                                                    more vibrant and stand out under low light. High-gloss
                                                    UV coating has a shinier finish than gloss, and it’s
                                                    also waterproof and durable enough for outdoor use.
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="faq_question1">
                                            <div style={{ width: "100%" }}>
                                                <div className="accordianss" onClick={handleClick2}>
                                                    <h4>
                                                        What{"’"}s the smallest sticker size I can order?
                                                    </h4>
                                                    {show === 2 && (
                                                        <div className="icon_style">
                                                            <Image
                                                                src="/image/right.png"
                                                                alt="right arrow icon"
                                                                layout="fill"
                                                                objectFit="cover"
                                                                objectPosition="center"
                                                            />
                                                        </div>
                                                    )}
                                                    {show !== 2 && (
                                                        <div className="icon_style2">
                                                            <Image
                                                                src="/image/bottom.png"
                                                                alt="bottom arrow icon"
                                                                layout="fill"
                                                                objectFit="cover"
                                                                objectPosition="center"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                                <p className={`${show === 2 ? "para1" : "para"}`}>
                                                    The cut-to-size sticker or label is recommended for
                                                    orders with quantities under 250 pieces. The roll is
                                                    popular for quantities above 250. Each roll is 3” in
                                                    diameter and fits in most label guns.
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="faq_question1">
                                            <div style={{ width: "100%" }}>
                                                <div className="accordianss" onClick={handleClick3}>
                                                    <h4>
                                                        I need help with my artwork, do you offer design
                                                        services?
                                                    </h4>
                                                    {show === 3 && (
                                                        <div className="icon_style">
                                                            <Image
                                                                src="/image/right.png"
                                                                alt="right arrow icon"
                                                                layout="fill"
                                                                objectFit="cover"
                                                                objectPosition="center"
                                                            />
                                                        </div>
                                                    )}
                                                    {show !== 3 && (
                                                        <div className="icon_style2">
                                                            <Image
                                                                src="/image/bottom.png"
                                                                alt="bottom arrow icon"
                                                                layout="fill"
                                                                objectFit="cover"
                                                                objectPosition="center"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                                <p className={`${show === 3 ? "para1" : "para"}`}>
                                                    The cut-to-size sticker or label is recommended for
                                                    orders with quantities under 250 pieces. The roll is
                                                    popular for quantities above 250. Each roll is 3” in
                                                    diameter and fits in most label guns.
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="faq_question1">
                                            <div style={{ width: "100%" }}>
                                                <div className="accordianss" onClick={handleClick4}>
                                                    <h4>
                                                        What format can I upload my holographic stickers as?
                                                    </h4>
                                                    {show === 4 && (
                                                        <div className="icon_style">
                                                            <Image
                                                                src="/image/right.png"
                                                                alt="right arrow icon"
                                                                layout="fill"
                                                                objectFit="cover"
                                                                objectPosition="center"
                                                            />
                                                        </div>
                                                    )}
                                                    {show !== 4 && (
                                                        <div className="icon_style2">
                                                            <Image
                                                                src="/image/bottom.png"
                                                                alt="bottom arrow icon"
                                                                layout="fill"
                                                                objectFit="cover"
                                                                objectPosition="center"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                                <p className={`${show === 4 ? "para1" : "para"}`}>
                                                    The cut-to-size sticker or label is recommended for
                                                    orders with quantities under 250 pieces. The roll is
                                                    popular for quantities above 250. Each roll is 3” in
                                                    diameter and fits in most label guns.
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </div>
                )}

                {selected === 3 && (
                    <div className="sizechart_table">
                        <div className="size_guide">
                            <h2>Size Guide</h2>
                            <p>Find your perfect size</p>
                            <h4>Women's T-Shirt</h4>
                            <h5>CM | Inches</h5>
                        </div>
                        <table>
                            <tr>
                                <th>Size</th>
                                <th>Waist</th>
                                <th>Bust</th>
                                <th>Hip</th>
                            </tr>
                            <tr>
                                <td>XS</td>
                                <td>66-127</td>
                                <td>66</td>
                                <td>140</td>
                            </tr>
                            <tr>
                                <td>S</td>
                                <td>71.1-157</td>
                                <td>71.1</td>
                                <td>145</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>71.1-157</td>
                                <td>71.1</td>
                                <td>145</td>
                            </tr>
                            <tr>
                                <td>L</td>
                                <td>71.1-157</td>
                                <td>71.1</td>
                                <td>145</td>
                            </tr>
                            <tr>
                                <td>XL</td>
                                <td>71.1-157</td>
                                <td>71.1</td>
                                <td>145</td>
                            </tr>
                            <tr>
                                <td>XXL</td>
                                <td>71.1-157</td>
                                <td>71.1</td>
                                <td>145</td>
                            </tr>
                        </table>

                        <div className="head_measure">
                            <h3>How To Measure</h3>
                            <div className="data_measure">
                                <h6>
                                    To choose the correct size for you, measure your body as
                                    follow:
                                </h6>
                                <p>
                                    <span>Bust- </span>Measure around the fullest part.
                                </p>
                                <p>
                                    <span>Waist- </span>Measure around your natural waistline.
                                </p>
                                <p>
                                    <span>Hips- </span>Measure 20cm down from your natural
                                    waistline
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {selected === 4 && <Services />}

                {selected === 5 && (
                    <div className="main-description-boxes">
                        <div className="description_outside_boxes">
                            <div className="description1">
                                <h2>HD Print</h2>
                                <h4>Premium White</h4>
                                <h5>
                                    Lithographic quality prints without exorbitant setup costs
                                </h5>
                                <p>
                                    Fine details are preserved such as bar codes, sharp text, and
                                    smooth tone transitions Smoother print finish adds a premium
                                    feel to the box surface HD Print technology produces odor-free
                                    boxes
                                </p>
                                <Image src="/image/hdPrint1.png" width={280} height={215} alt="hd print image" />
                            </div>
                            <div className="description2">
                                <h2>Premium White Corrugated Cardboard</h2>
                                <h4>Premium White</h4>
                                <p>
                                    Soft, smooth surface with a luxurious feel Recommended for
                                    boxes with interior printing or large unprinted areas New HD
                                    Print option with Satin Finish Suited for luxury brands or
                                    companies sending out special gifts to VIP clients and
                                    customers.
                                </p>
                                <Image src="/image/hdPrint2.png" width={280} height={215} alt="hd print image" />
                            </div>
                            <div className="description3">
                                <h2>Kraft (Brown) Corrugated Cardboard</h2>
                                <h4>Kraft</h4>
                                <p>
                                    Popular, economical option. Made of sturdy, sustainable
                                    material. No extra packaging needed to mail. New HD Print
                                    process gives a smoother surface Perfect for clean,
                                    straightforward designs
                                </p>
                                <Image src="/image/hdPrint3.png" width={280} height={215} alt="hd print image" />
                            </div>
                            <div className="description1">
                                <h2>Standard White Corrugated Cardboard</h2>
                                <h4>HDPrint Matte</h4>
                                <p>
                                    Popular, economical option. Made of sturdy, sustainable
                                    material. No extra packaging needed to mail. New HD Print
                                    process gives a smoother surface Perfect for clean,
                                    straightforward designs
                                </p>
                                <Image src="/image/hdPrint4.png" width={280} height={215} alt="hd print image" />
                            </div>
                        </div>

                    </div>
                )}

                <div className="main-may-like">
                    <h3>You may also like</h3>
                    <div className="main_products_envelop">
                        {randomProducts.map((product,i) => (
                            <Link href={`/political-campaign-supplies/${product.slug}`} key={i}>
                                <div className="bottom">
                                    <div className="head_envelop_image">
                                        <div className="image_envelop">
                                            <img src={product.imgSrc} alt={product.title} width={492} height={539} />
                                        </div>
                                        <div className="headenvelop">
                                            <h3>{product.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CampaignMayLike;
