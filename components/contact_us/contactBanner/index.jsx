
import React from "react";
import { Container } from "react-bootstrap";

function ContactBanner() {
  return (
    <div className="padding_head">
      <div className="main_contact_banner">
        <Container>
          <div className="needhelp">
            <h2>Need Help!</h2>
            <p>Are you searching for innovative solutions? Are you keen to align with a business that places value on purpose
              beyond profit? Strategically aligning with your broader objectives, print247-testing-clone.vercel.app is here to transform your communications.</p>
            {/* <div className="track-order">
              <Link href="/user/track_order" ><button>Track order</button></Link>
            </div> */}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ContactBanner;
