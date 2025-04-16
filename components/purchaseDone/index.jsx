import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";

function ThanksMessage() {
  return (
    <div className="thanks_page">
      <div className="white_back">
        <div className="shopping_cart">
          <Image src="/image/shopping-cart.png" width={164} height={164} alt="shopping cart icon" />
          <h2>Thank you for your purchase !</h2>
          <p>
            You will receive order confirmation email with details of your
            order.
          </p>
          <div className="shopping_btn">
            <Link href="/">
              <Button>Continue to Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThanksMessage;
