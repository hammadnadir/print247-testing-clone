// import Image from 'next/image';
// import React, { useState } from 'react';
// import { Container } from 'react-bootstrap';

// function ChristmasFaqs() {
//     const [show2, setShow2] = useState(null);

//     const faqs = [
//         {
//             question: "Do you charge any die or plate fee to make personalized Christmas boxes?",
//             answer: "No, we don’t charge any extra fee for die or plates to make personalized Christmas boxes. Our prices are all-inclusive."
//         },
//         {
//             question: "What is your standard turnaround time for delivering Christmas packaging supplies?",
//             answer: "Our standard time to deliver Christmas packaging supplies is 12 to 15 business days. Furthermore, we can expedite the production as per demand."
//         },
//         {
//             question: "How can I save more while ordering custom Christmas boxes at Print 247?",
//             answer: "You can order in bulk and get 'custom Christmas boxes wholesale deals' from us. Hence, you can save in abundance. And be happy; we are already offering inexpensive packaging boxes for Christmas, and you would be jubilant by partnering with us."
//         },
//         {
//             question: "How many types of materials do you use to make customized Christmas packaging boxes?",
//             answer: "We make high-quality and fully customizable Christmas packaging boxes in premium paperboard stocks, i.e., grayboard, aka rigid board, rigid white cardboard, rigid holographic cardboard, rigid metallic cardboard, single and double coated card stock, kraft board, along with bux board."
//         },
//     ];

//     const handleClick2 = (id) => {
//         setShow2(prev => (prev === id ? null : id));
//     };

//     return (
//         <div>
//             <Container>
//                 <div className="Faq_contactsectionTwo">

//                     <h2>Frequently Asked Questions</h2>

//                     {faqs.map((item, index) => (
//                         <div key={index} className="faq_question1">
//                             <div className="faq-width">
//                                 <div className="accordianss" onClick={() => handleClick2(index)}>
//                                     <h4>{item.question}</h4>
//                                     <div className={`arrow_icon ${show2 === index ? "icon_styleTwo" : "icon_styleOne"}`}>
//                                         <Image height={8} width={8} src="/image/right-arrow.png" alt="icon" />
//                                     </div>
//                                 </div>
//                                 <div className={`${show2 === index ? "para1_contact" : "para_contact"}`}>
//                                     {show2 === index && <p>{item.answer}</p>}
//                                 </div>
//                                 <hr />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     );
// }

// export default ChristmasFaqs;

import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';

function ChristmasFaqs() {
    const [show2, setShow2] = useState(null);
    const contentRefs = useRef([]);

    const faqs = [
        {
            question: "Do you charge any die or plate fee to make personalized Christmas boxes?",
            answer: "No, we don’t charge any extra fee for die or plates to make personalized Christmas boxes. Our prices are all-inclusive."
        },
        {
            question: "What is your standard turnaround time for delivering Christmas packaging supplies?",
            answer: "Our standard time to deliver Christmas packaging supplies is 12 to 15 business days. Furthermore, we can expedite the production as per demand."
        },
        {
            question: "How can I save more while ordering custom Christmas boxes at Print 247?",
            answer: "You can order in bulk and get 'custom Christmas boxes wholesale deals' from us. Hence, you can save in abundance. And be happy; we are already offering inexpensive packaging boxes for Christmas, and you would be jubilant by partnering with us."
        },
        {
            question: "How many types of materials do you use to make customized Christmas packaging boxes?",
            answer: "We make high-quality and fully customizable Christmas packaging boxes in premium paperboard stocks, i.e., grayboard, aka rigid board, rigid white cardboard, rigid holographic cardboard, rigid metallic cardboard, single and double coated card stock, kraft board, along with bux board."
        },
    ];

    const handleClick2 = (id) => {
        setShow2(prev => (prev === id ? null : id));
    };

    return (
        <div>
            <Container>
                <div className="Faq_contactsectionTwo">

                    <h2>Frequently Asked Questions</h2>

                    {faqs.map((item, index) => (
                        <div key={index} className="faq_question1">
                            <div className="faq-width">
                                <div className="accordianss" onClick={() => handleClick2(index)}>
                                    <h4>{item.question}</h4>
                                    <div className={`arrow_icon ${show2 === index ? "icon_styleTwo" : "icon_styleOne"}`}>
                                        <Image height={8} width={8} src="/image/right-arrow.png" alt="icon" />
                                    </div>
                                </div>
                                <div className="faq-content" ref={el => contentRefs.current[index] = el} style={{
                                        maxHeight: show2 === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
                                        overflow: 'hidden',
                                        transition: 'max-height 0.3s ease-in-out',
                                    }}>
                                    <p>{item.answer}</p>
                                </div>
                                <hr />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default ChristmasFaqs;
