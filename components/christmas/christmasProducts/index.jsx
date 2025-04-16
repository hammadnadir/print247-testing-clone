import React from 'react';
import { Container } from 'react-bootstrap';
import { ChristmasData } from '../../../data/christmasData';
import Link from 'next/link';

function ChristmasProducts() {
  return (
    <div>
      <Container>
        <div className="main_christmas_product">
          <div className="inner_product_christmas">
            {ChristmasData.map((product, i) => (
              <Link key={i} href={`${product.slug}`}>
                <div className="christmas_data">
                  <img src={product.main_image} alt={product.title} />
                  <h4>{product.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ChristmasProducts;
