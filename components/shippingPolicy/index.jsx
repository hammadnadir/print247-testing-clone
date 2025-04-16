// import React from 'react'

// function ShippingData() {
//   return (
//     <div>ShippingData</div>
//   )
// }

// export default ShippingData

import React from "react";
import { Container } from "react-bootstrap";

const ShippingData = () => {
    return (
        <div
            className="shipping_policy_main"
        >
            <Container>
                <h1 className="title_refund_policy">
                    Delivery and Shipping
                </h1>
                <hr />


                <section style={{ marginBottom: "20px" }}>
                    <ul>
                        <li className="refund_policy_para">
                            Our Standard turnaround time is 12 to 15 business days.


                        </li>
                        <li className="refund_policy_para">
                            The Company will make every effort to meet the agreed-upon delivery date for completed orders.
                        </li>
                        <li className="refund_policy_para">
                            The Company shall not be held responsible for delays caused by circumstances beyond its control, including but not limited to natural disasters, weather conditions, public holidays, floods, fire, delays by shipping companies, global custom disputes, or accidents during deliveries.

                        </li>
                        <li className="refund_policy_para">
                            The risk of loss or damage to the packaging products shall pass to the Customer upon delivery.


                        </li>
                   
                        <p className="refund_policy_para">
                        *  Our Delivery and Shipping Policy can be changed or modified with or without prior notice. 



                        </p>
                    </ul>
                </section>


            </Container>
        </div>
    );
};

export default ShippingData;
