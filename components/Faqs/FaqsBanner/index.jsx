import React from 'react';
import { Container } from 'react-bootstrap';

function FaqsBanner() {
  return (
    <div className="padding_head_faq">
      <div className="main_faqs_banner">
        <Container>
          <div className="faqhelp">
            <h2>Frequently Asked Questions</h2>
            <p>We{"’"}ve answered all the questions you may have before ordering a custom box.
              Not found a relevant answer to your query? We are happy to answer any questions about your package at any time.</p>
          </div>
        </Container>
      </div>
    </div >
  );
}

export default FaqsBanner;
