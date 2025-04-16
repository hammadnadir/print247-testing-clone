import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { estimatedCostRequest } from "@/redux/payment";

function ShippingModal({ modal2Open, setModal2Open, zipcode, payload, setZipCode }) {

  // const [modal2Open, setModal2Open] = useState(false);
  const [delay, setDelay] = useState("");
  const [estimatedData, setEstimatedData] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  const { estimatedCost } = useSelector((state) => state.payment)
  const dispatch = useDispatch()

  const handleClick = () => {
    // setModalOpen(false)
    setModal2Open(false)
    setZipCode("")
  }
  useEffect(() => {
    setEstimatedData(zipcode)
  }, [zipcode])

  const handleChange = (data) => {
    setDelay(data);
  };
  const handleShowOtions = () => {
    if (!estimatedData) {
      setError("required")
    } else {
      setLoader(true)
      const payloadData = {
        ...payload,
        zipcode: estimatedData,
      }
      setError("")
      dispatch(estimatedCostRequest(payloadData)).then((res) => {
        setLoader(false)
      })
    }
  }

  const shippingDetail = estimatedCost?.data?.emsResponse?.services ? estimatedCost?.data?.emsResponse?.services : []
  return (
    <div>
      <Modal
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <div className="modal_data_shipping">

          <div className="modal_header_shipping">
            <h2>Estimate Shipping & Delivery</h2>
          </div>

          <div className="modal_subdata_shipping">
            <div className="zip-input-shipping">
              {/* <input value={estimatedData} onChange={(e) => setEstimatedData(e.target.value)} type="text" placeholder="10005" /> */}
              <div className="zip-input">
                <input value={estimatedData} onChange={(e) => setEstimatedData(e.target.value)} type="text" placeholder="10005" />
                <img src="/image/zip.png" width={30} height={20} alt="zip"/>
              </div>
              <div className="example_zipcode">
                <span>Hint : 99501</span>
              </div>

            </div>

            <div className="modal_button_shipping">
              <div className="modal_button2_shipping">
                {loader ? <Button disabled>Loading...</Button> : <Button onClick={handleShowOtions}>Show Options</Button>}
              </div>
              <div className="modal_button1_shipping" onClick={handleClick}>
                <Button>Cancel</Button>
              </div>
            </div>
            <div className="shipments_data">
              {
                shippingDetail?.map((item, i) => {
                  return (
                    <div className="main_sub_shipment" key={i} >
                      <hr />
                      <div className="time-transit">
                        <div className="delivery-time">
                          <div className="inner-time">
                            <h5>Deliver On:  {item?.shipDate}</h5>
                            <h5>{item?.serviceLevelDescription}</h5>
                          </div>
                        </div>
                        <div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              {shippingDetail && shippingDetail?.length === 0 && <div className="no_shippment">No Shipping Avalible</div>}
            </div>
            <div className="main-note">
              <h3>Note</h3>
              <p>Order by 5pm PT / 8pm ET. Full details & restrictions</p>
              <p>Surcharges may apply based on delivery address</p>
            </div>
          </div>

        </div>
      </Modal>
    </div>
  );
}

export default ShippingModal;
