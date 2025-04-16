import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

function PrintingPackaging() {
  const printingImages = [
    {
      src: "/products/free-front-tuck-mailer-box-mockup copy-1.webp",
      title: "Chocolate Boxes",
      delivery: "Delivery: 4-5 Days",
      description:
        "Ideal for lawns, intersections, and high-traffic areas, they help you reach voters where it matters most",
    },
    {
      src: "/products/free-front-tuck-mailer-box-mockup copy.webp",
      title: "Custom Boxes",
      delivery: "Delivery: 4-5 Days",
      description:
        "Ideal for lawns, intersections, and high-traffic areas, they help you reach voters where it matters most",
    },
    {
      src: "/products/free-front-tuck-mailer-box-mockup copy-2.webp",
      title: "Soap Boxes",
      delivery: "Delivery: 4-5 Days",
      description:
        "Ideal for lawns, intersections, and high-traffic areas, they help you reach voters where it matters most",
    },
    {
      src: "/products/free-front-tuck-mailer-box-mockup copy-3.webp",
      title: "Food Boxes",
      delivery: "Delivery: 4-5 Days",
      description:
        "Grab attention at rallies, events, and public spaces. Make your message seen and remembered",
    },
    {
      src: "/products/free-front-tuck-mailer-box-mockup copy-4.webp",
      title: "Cardboard Shoe Boxes",
      delivery: "Delivery: 4-5 Days",
      description:
        "Grab attention at rallies, events, and public spaces. Make your message seen and remembered",
    },
    {
      src: "/products/free-front-tuck-mailer-box-mockup copy-5.webp",
      title: "Sleeve Boxes",
      delivery: "Delivery: 4-5 Days",
      description:
        "Ideal for lawns, intersections, and high-traffic areas, they help you reach voters where it matters most",
    },
    {
      src: "/products/free-front-tuck-mailer-box-mockup copy-7.webp",
      title: "Candle Boxes",
      delivery: "Delivery: 4-5 Days",
      description:
        "Ideal for lawns, intersections, and high-traffic areas, they help you reach voters where it matters most",
    },
    {
      src: "/products/free-front-tuck-mailer-box-mockup copy-8.webp",
      title: "Mailer Boxes",
      delivery: "Delivery: 4-5 Days",
      description:
        "Ideal for lawns, intersections, and high-traffic areas, they help you reach voters where it matters most",
    },
    {
      src: "/products/free-front-tuck-mailer-box-mockup copy-6.webp",
      title: "Gable Boxes",
      delivery: "Delivery: 4-5 Days",
      description:
        "Ideal for lawns, intersections, and high-traffic areas, they help you reach voters where it matters most",
    },
  ];

  return (
    <div className="main_printing_packaging">
      <Container>
        <div className="printing_packaging_data">
          <h2>All-in-One Solution for Custom Printed Packaging</h2>
          <p>
            Offering a complete solution for custom printed packaging, we handle
            every detail from design to delivery.
          </p>
        </div>

        <div className="printing_image_section">
          {printingImages.map((image, index) => (
            <div className="printing_image" key={index}>
              <img src={image.src} alt={image.title} />
              <div className="printing_image_detail">
                <h3>{image.title}</h3>
                <h4>{image.delivery}</h4>
              </div>
              <p>{image.description}</p>
            </div>
          ))}
          <div className="support_main">
            <img src="/products/support.webp" alt="product support image" />
            <div>
              <p className="support_text">
                Need something different? We're here to help!
              </p>
              <Link href="/contact-us">
                {" "}
                <button className="support_btn">Support</button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PrintingPackaging;