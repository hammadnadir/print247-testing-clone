import { campignObj } from "@/data/compaignData";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container } from "react-bootstrap";

function CampignFaqs() {

    const [show, setShow] = useState(0);
    const router = useRouter()

    const handleClick = (index) => {
        setShow(show === index ? null : index);
    };

    return (
        <div className="campign_faqs">

            <div className='boxes_package_faq'>
                <div className='main_boxes_faq'>
                    <Container>
                        <div className='Faq_sectionbox'>
                            <h3>Frequently Asked Question</h3>
                            <div>
                                {campignObj?.[router?.query?.id] &&
                                    Array.isArray(campignObj?.[router?.query?.id].faqs) &&
                                    campignObj?.[router?.query?.id]?.faqs.map((item, index) => (
                                        <div  key={index}>
                                            <div className='faq_question1'>
                                                <div style={{ width: "100%" }}>
                                                    <div className='accordianss' onClick={() => handleClick(index)}>
                                                        <h4>{item?.question}</h4>
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
                                                    <div className={show === index ? "para1" : "para"}>
                                                        <p>{item?.answer}</p>
                                                        {
                                                            <ul>
                                                                {item?.isLists &&
                                                                    item?.listData?.map((data, i) => (
                                                                        <li key={i}>
                                                                            {data}
                                                                        </li>
                                                                    ))}
                                                            </ul>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default CampignFaqs;
