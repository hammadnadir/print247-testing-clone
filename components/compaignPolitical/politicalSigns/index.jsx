import { politicalSignsProducts } from '@/data/politicalSignsProducts';
import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';

function PoliticalSigns() {
    
    return (
        <div className='main_political_compaign'>
            <Container>
                <div className='political_signs_head'>
                    <h2>Show Them!<br />Your Political Campaign Products Are Better</h2>
                    <p>Adorn your areas with campaign signs. Whether it is Snow or Sun in the sky, our eye-catching campaign products popularize the candidates at their best.
                        Buy from us, and place them in your yards, areas, councils, cities, and states.
                    </p>
                </div>
                <div className="main_grid_political">
                    {politicalSignsProducts.map((product) => (
                        <div className="inner_political" key={product.id}>
                            <Link href={`/political-campaign-supplies/${product.slug}`}>
                                <img src={product.imgSrc} alt="product images" />
                            </Link>
                            <div className="data_political">
                                <div className="head_politcial">
                                    <Link href={`/political-campaign-supplies/${product.slug}`}>
                                        <h4>{product.title}</h4>
                                    </Link>
                                    <button>{product.delivery}</button>
                                </div>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default PoliticalSigns;
