import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import ShippingModal from "../ShippingModal";
import Image from "next/image";
import { estimatedCostRequest, timeTransitRequest } from "@/redux/payment";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import RequestMessage from "../RequestMessage";
import { useRouter } from "next/router";

function EstimatedModal({ modalOpen, setModalOpen, material, quantity, area }) {
  const [modal2Open, setModal2Open] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const [payload, setPayload] = useState({});
  const dispatch = useDispatch()
  const router = useRouter()
  const id = router?.query?.id

  const { estimatedCost } = useSelector((state) => state.payment)

  const handleClick = () => {
    if (!data) {
      setError("zipcode required")
      // toast(
      //   <RequestMessage
      //     image="/icons/error.png"
      //     color="red"
      //     message="Req"
      //   />
      // );
    } else {
      setLoader(true)
      const payloaddata = {
        zipcode: data,
        product_slug: id,
        quantity: quantity,
        material: material,
        area
      }
      setPayload(payloaddata)
      dispatch(estimatedCostRequest(payloaddata)).then((res) => {
        setLoader(false)
        if (res?.payload?.data) {
          setModalOpen(false)
          setModal2Open(true)
        }
      })
    }
  }
  // const handleChange = (e) => {
  //   setData({...data, [e.target.name]: e.target.value})
  // }

  return (
    <div>
      <Modal
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <div className="modal_data">
          <div className="modal_header">
            <h2>Estimate Shipping & Delivery</h2>
          </div>
          <div className="modal_subdata">
            <div className="zip-input">
              <input value={data} onChange={(e) => setData(e.target.value)} className={`${error ? "error_border" : ""}`} type="text" placeholder="City Zip Code" />
              <Image src="/image/zip.png" width={30} height={20} alt="zip icon"/>
            </div>
            <div className="example_zipcode">
              <span>Hint : 99501</span>
            </div>
            <div className="modal_button">
              <div className="modal_button1" onClick={handleClick}>
                {loader ? <Button disabled>Loading...</Button> :
                  <Button>Show Options</Button>}
              </div>
              <div className="modal_button2" onClick={() => setModalOpen(false)}>
                <Button>Cancel</Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <ShippingModal modal2Open={modal2Open} setModal2Open={setModal2Open} setZipCode={setData} zipcode={data} payload={payload} />
    </div>
  );
}

export default EstimatedModal;
