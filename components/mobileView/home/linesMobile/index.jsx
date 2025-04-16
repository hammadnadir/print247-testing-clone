import Link from 'next/link'
import React from 'react'

function LinesMobile() {
    return (
        <>
            <div className='main_boxes_grid'>
                <div className='boxes_grid'>
                    <div>
                        <img src="/image/About/line4.webp" alt="about product image" />
                        <img className='img_2' src="/image/About/line10.webp" alt="about product image" />
                        <img src="/image/About/line5.webp" alt="about product image" />
                        <img src="/image/About/line3.webp" alt="about product image" />
                        <img src="/image/About/line8.webp" alt="about product image" />
                    </div>
                    <div>
                        <img src="/image/About/line6.webp" alt="about product image" />
                        <img src="/image/About/line2.webp" alt="about product image" />
                        <img src="/image/About/line7.webp" alt="about product image" />
                        <img src="/image/About/line9.webp" alt="about product image" />
                    </div>

                    <div className='mainbox_abosulte'>
                        <div className='box_abosulte'>
                            <h2>Endless Printing And Packaging Possibilities</h2>
                            <div className='line_buttonmob'>
                                <Link href="/about-us"><button>About Us</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LinesMobile
