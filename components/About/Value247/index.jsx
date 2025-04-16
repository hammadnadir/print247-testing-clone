import React from 'react'
import { Container } from 'react-bootstrap'

function Value247() {

    const values = [
        {
            id: "01.",
            subheading: "Do Big Things",
            paragraph: "We dare to do big things, create big ideas, make big leaps, and take big risks."
        },
        {
            id: "02.",
            subheading: "We Before Me",
            paragraph: "We work as a team to get the best from each other. No one can move a mountain alone."
        },
        {
            id: "03.",
            subheading: "Great Not Good",
            paragraph: "We are obsessed with excellence and refuse to accept mediocrity or good enough."
        },
        {
            id: "04.",
            subheading: "Transparency",
            paragraph: "Everyone talks about it, but few actually put it into practice. It is extremely important to us because it is the only way to build true partnerships with our clients."
        },
        {
            id: "05.",
            subheading: "Bullshit free Design",
            paragraph: "We won't force trendy graphic solutions on you just because we like them. When creating brands, we delve into the history of your company and the needs of your customers."
        },
        {
            id: "06.",
            subheading: "Effects, Effects, Effects",
            paragraph: "Positivity creates opportunity; pessimism kills it. We are optimistic about the future, and in turn, promote creativity and new ideas."
        }
    ];

    return (
        <div>
            <Container>
                <div className='main_Value247'>
                    <div className='main_value_r'>
                        <div className='values_247'>Values <span className='span_247'>247</span>
                            {/* <div className='value_r'> */}
                                <img className='value_r' src="/image/About/value_r.png" alt="Image of value print47" />
                            {/* </div> */}
                        </div>

                    </div>
                    <p className='value_para'>We operate not only with expertise but also with unwavering adherence to our values.
                        This commitment enhances the quality of our work and fosters strong,
                        positive relationships with our clients.</p>

                    {/* <div className='value_padding_grid'>
                        <div className='value_grid'>
                            <div className="inner_value_grid">
                                <h2>01.</h2>
                                <h3>Do Big Things</h3>
                                <p>We dare to do big things, create big ideas, make big leaps, and take big risks.</p>
                            </div>
                            <div className="inner_value_grid">
                                <h2>02.</h2>
                                <h3>We Before Me</h3>
                                <p>We work as a team to get the best from each other. No one can move a mountain alone.</p>
                            </div>
                            <div className="inner_value_grid">
                                <h2>03.</h2>
                                <h3>Great Not Good</h3>
                                <p>We are obsessed with excellence and refuse to accept mediocrity or good enough.</p>
                            </div>
                            <div className="inner_value_grid">
                                <h2>04.</h2>
                                <h3>Transparency</h3>
                                <p>Everyone talks about it, but few actually put it into practice.
                                    it is extremely important to us because it is the only way to build true partnerships with our clients.</p>
                            </div>
                            <div className="inner_value_grid">
                                <h2>05.</h2>
                                <h3>Bullshit free Design</h3>
                                <p>We won't force trendy graphic solutions on you just because we like them.
                                    when creating brands, we delve into the history of your company and the needs of your customers</p>
                            </div>
                            <div className="inner_value_grid">
                                <h2>06.</h2>
                                <h3>Effects, Effects, Effects</h3>
                                <p>Positivity creates opportunity; pessimism kills it.
                                    We are optimistic about the future, and in turn, promote creativity and new ideas.</p>
                            </div>
                        </div>
                    </div> */}
                    <div className='value_padding_grid'>
                        <div className='value_grid'>
                            {values.map((item, index) => (
                                <div key={index} className="inner_value_grid">
                                    <h2>{item.id}</h2>
                                    <h3>{item.subheading}</h3>
                                    <p>{item.paragraph}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Value247
