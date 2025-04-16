import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import RequestMessage from '@/components/common/RequestMessage'
import { useDispatch } from 'react-redux'
import { emailSubscrriptionRequest } from '@/redux/home'
import emailjs from "@emailjs/browser";

function Chat() {

  const [email, setEmail] = useState("")
  const dispatch = useDispatch();
  const ref = useRef()

  const handleChange = (event) => {
    setEmail(event.target.value)
  }

  const handleFilter = (e) => {
    e.preventDefault();
    if (email) {
      dispatch(emailSubscrriptionRequest(email)).then((res) => {
        emailjs.sendForm('service_ktc2isj', 'template_nsto93k', ref.current, 'eKeAE09PqlRljmUv2')
          .then((result) => {
            if (res?.payload?.status) {
              toast(<RequestMessage image="/icons/subscribe.png" color="green" message={res?.payload?.message} />)
              setEmail("")
            } else {
              toast(<RequestMessage image="/icons/invalid.png" color="red" message={res?.payload?.message} />)
              setEmail("")
            }
          }, (error) => {
            if (res?.payload?.status) {
              toast(<RequestMessage image="/icons/subscribe.png" color="green" message={res?.payload?.message} />)
              setEmail("")
            } else {
              toast(<RequestMessage image="/icons/invalid.png" color="red" message={res?.payload?.message} />)
              setEmail("")
            }
          });

      })
    } else {
      toast(<RequestMessage image="/icons/error.png" color="red" message="Email Required" />)
    }
  }

  return (
    <>
      <div className="background-image-container">
        {/* <div className="overlay"></div> */}
        <div className="text-container">
          <h2>All Good Things Start With a Chat...</h2>
          <form onSubmit={handleFilter} ref={ref}>
            <div className='email_section'>
              <input onChange={handleChange} className='input_email' type="email" value={email} id="email-input" name="email" placeholder="Enter your email" />
              <button className='arrow' type='submit'><Image src="/image/chatarrow.png" width={61} height={61}></Image></button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Chat;