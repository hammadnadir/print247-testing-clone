import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

function ContactFaqs() {
  const { contactsData } = useSelector((state) => state.contacts);

  const [show, setShow] = useState(0);
  const [show2, setShow2] = useState("");

  const isRetina = useMediaQuery({ query: '(max-width: 768px)' });

  const handleClick = (id) => {
    if (isRetina) {
      setShow2("")
      if (show === id) {
        setShow(null);
      } else {
        setShow(id);
      }
    } else {
      if (show === id) {
        setShow(null);
      } else {
        setShow(id);
      }
    }
  };

  const handleClick2 = (id) => {
    if (isRetina) {
      setShow("")
      if (show2 === id) {
        setShow2(null);
      } else {
        setShow2(id);
      }
    } else {
      if (show2 === id) {
        setShow2(null);
      } else {
        setShow2(id);
      }
    }

  };

  const middleIndex = Math.ceil(contactsData?.data?.length / 2);
  const firstHalf = contactsData?.data?.slice(0, middleIndex);
  const secondHalf = contactsData?.data?.slice(middleIndex);
  const secondHalfLength = secondHalf?.length;

  return (
    <div className="contact_faqs">
      <Container>
        <div className="popular-question">
          <h3>Frequently Asked Questions</h3>
          <h5>Popular Questions</h5>
          <div className="main_contactsection">
            <div className="Faq_contactsectionOne">
              {firstHalf?.map((item, index) => (
                <div key={index} className="faq_question1">
                  <div className="faq-width">
                    <div className="accordianss" onClick={() => handleClick(index)}>
                      <h4>{item.question}</h4>
                      <div className={`${show === index ? "icon_style2" : "icon_style"}`}>
                        <Image src="/image/right.png" layout="fill" objectFit="cover" objectPosition="center" alt="icon"/>
                      </div>
                    </div>
                    <div className={`${show === index ? "para1_contact" : "para_contact"}`}>
                      {item.answer}
                    </div>
                    <hr />
                  </div>
                </div>
              ))}
            </div>
            <div className="Faq_contactsection_Two">
              {secondHalf?.map((item, index) => (
                <div key={index} className="faq_question1">
                  <div className="faq-width">
                    <div className="accordianss" onClick={() => handleClick2(index + secondHalfLength)}>
                      <h4>{item.question}</h4>
                      <div className={`${show2 === index + secondHalfLength ? "icon_style2" : "icon_style"}`}>
                        <Image src="/image/right.png" layout="fill" objectFit="cover" objectPosition="center" alt="icon"/>
                      </div>
                    </div>
                    <div className={`${show2 === index + secondHalfLength ? "para1_contact" : "para_contact"}`}>
                      {item.answer}
                    </div>
                    <hr />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactFaqs;