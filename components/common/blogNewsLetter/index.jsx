import React, { useState } from 'react';
import { Modal } from "antd";
import Image from 'next/image';
import { toast } from 'react-toastify'
import RequestMessage from '@/components/common/RequestMessage'
import { emailSubscrriptionRequest } from '@/redux/home'
import { useDispatch } from 'react-redux';

const BlogNewsLetter = ({ newsLetter, setNewsLetter }) => {

    const [email, setEmail] = useState("")
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setEmail(event.target.value)
    }

    const handleCloseModal = () => {
        setNewsLetter(false);
    };

    const handleFilter = (e) => {
        e.preventDefault();
        toast.dismiss()
        if (email) {
            try {
                dispatch(emailSubscrriptionRequest(email)).then((res) => {
                    setNewsLetter(false)
                    if (res?.payload?.status) {
                        toast(<RequestMessage image="/icons/subscribe.png" color="green" message={res?.payload?.message} />)
                        setEmail("")
                    } else {
                        toast(<RequestMessage image="/icons/invalid.png" color="red" message={res?.payload?.message} />)
                        setEmail("")
                    }
                })
            } catch (error) {
                console.log(error)
            }

        } else {
            toast(<RequestMessage image="/icons/error.png" color="red" message="Email Required" />)
        }
    }

    return (
        <div className="blog_news_letterr">
            <Modal centered open={newsLetter} onOk={() => setNewsLetter(false)} onCancel={() => setNewsLetter(false)}>
                <div className="newsletter_modal">

                    <div className='newsletter_inner'>
                        <div className='img_newsletter'>
                            <Image src="/image/footer_arrow.png" height={20} width={20} style={{ transform: 'rotate(180deg)' }} alt='arrow' />
                            <div>
                                <h3>Subscribe to <br /> our newsletter</h3>
                            </div>
                        </div>
                        <div onClick={handleCloseModal} className='cross_image'>
                            <Image src="/image/whitecross.png" height={20} width={20} alt='cross icon'/>
                        </div>
                    </div>

                    <form onSubmit={handleFilter}>
                        <div className='newsletter_input'>
                            <div onChange={handleChange} style={{ width: "100%" }}>
                                <input type="email"  placeholder="Enter your email" value={email} id="email-input" name="email" />
                            </div>
                            <div>
                                <button>Send</button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default BlogNewsLetter;