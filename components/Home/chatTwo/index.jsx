import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import RequestMessage from "@/components/common/RequestMessage";
import { useDispatch } from "react-redux";
import { emailSubscrriptionRequest } from "@/redux/home";
import emailjs from "@emailjs/browser";
import { Container } from "react-bootstrap";
import { postLeadsRequest } from "@/redux/zohoLeads";

function ChatTwo({ color }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef();

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFilter = async (e) => {
    e.preventDefault();
    toast.dismiss();
    if (email) {
      setIsSubmitting(true);
      try {
        dispatch(
          postLeadsRequest({
            First_Name: "News Letter",
            Last_Name: "Subscription",
            Email: email,
            Lead_Source: "Ecommerce",
            tags: ["News Letter Subscription"]
          })
        );
        dispatch(emailSubscrriptionRequest(email)).then((res) => {
          toast(
            <RequestMessage
              image="/icons/subscribe.png"
              color="green"
              message={res?.payload?.message}
            />
          );
        });
        await emailjs.sendForm(
          "service_ktc2isj",
          "template_nsto93k",
          ref.current,
          "eKeAE09PqlRljmUv2"
        );

        setEmail("");
        setIsSubmitting(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      toast.dismiss();
      toast(
        <RequestMessage
          image="/icons/error.png"
          color="red"
          message="Email Required"
        />
      );
    }
  };

  return (
    <div
      className="chat-two-wrapper"
      style={{ backgroundColor: color || "white" }}
    >
      <div className="background-image-container">
        <Container>
          <div className="text-container">
            <p className="heading">
              {/* Skyrocket Your Brand Impact and Sales With Us */}
              {/* Explore! Packaging Secrets And Cost-Saving Tips */}
              Explore! Packaging Secrets, Cost-Saving Tips, & Much More!
            </p>
            <form onSubmit={handleFilter} ref={ref}>
              <div className="email_section">
                <input
                  onChange={handleChange}
                  className="input_email"
                  type="email"
                  value={email}
                  id="email-input"
                  name="email"
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                />
                <button className="arrow" type="submit" disabled={isSubmitting}>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ChatTwo;
