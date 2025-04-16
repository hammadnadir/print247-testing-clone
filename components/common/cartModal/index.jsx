import React, { useState } from "react";
import { Modal } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getUserIdFromLocalStorage } from "@/utils";
import { checkoutDataRequest } from "@/redux/payment";
import RequestMessage from "../RequestMessage";
import { toast } from "react-toastify";

function CartProcessingModal({ isMoveCart, setIsMoveCart }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleProceed = () => {
    const userFormData =
      localStorage !== undefined && localStorage.getItem("quoteDetail")
        ? JSON.parse(localStorage.getItem("quoteDetail"))
        : {};
    const email = userFormData?.email;
    const phone_no = userFormData?.phone_no;
    const userId = getUserIdFromLocalStorage();
    const payload = {
      customer_id: userId,
      cartid: [],
      email: email,
      phone: phone_no,
      whatsapp_no: null
    };
    try {
      dispatch(checkoutDataRequest(payload)).then((res) => {
        if (res?.payload?.status) {
        //   router.push("/shoppingCart");
        } else {
          toast(
            <RequestMessage
              image="/icons/error.png"
              color="red"
              message={res?.payload?.message}
            />
          );
          setQuoteModal(false);
        }
      });
    } catch (error) {
      toast(
        <RequestMessage image="/icons/error.png" color="red" message={error} />
      );
      // console.error("error", error);
      setIsMoveCart(false);
    }
    // router.push("/shoppingCart")
  };

  return (
    <div className="cart_procesing_modal">
      <Modal centered open={isMoveCart}>
        <div className="procesing_request_modal">
          {/* <Link href="/shoppingCart"> */}
            <button onClick={handleProceed} className="btn1_style">
              Proceed To Cart
            </button>
          {/* </Link> */}
          <Link href="/">
            <button className="btn2_style">Explore More</button>
          </Link>
        </div>
      </Modal>
    </div>
  );
}

export default CartProcessingModal;
