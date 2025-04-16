import React from 'react';
import { Space, Table, Tag, Menu } from "antd";
import { useSelector } from 'react-redux';
import ReactToPrint from 'react-to-print';
import { OrderSummaryCom } from './printbtn';
import { Container } from 'react-bootstrap';

function OrderSummaryNew({ componentRef }) {

  const { orderData } = useSelector((state) => state.order)

  const columns = [
    {
      title: "Item Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Item Name",
      dataIndex: "name",
      key: "Item Name",
    },
    {
      title: "Item Details",
      dataIndex: "item_detail",
      key: "Item Details",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Unit Price",
      dataIndex: "unit_price",
      key: "unit_price",
    },
    {
      title: "Total Price",
      dataIndex: "price",
      key: "price",
    }
  ];

  function capitalizeFirstLetter(string) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return ""
  }

  function formatText(inputText) {
    if (!inputText) {
      return ""
    }
    // Replace underscores with spaces and split the string into words
    const val = Array.isArray(inputText) ? inputText.join(" , ") : inputText.replace(/,/g, " , ");
    const words = val.replace(/_/g, ' ').split(' ');

    // // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // // Join the words back together with spaces
    const formattedText = capitalizedWords.join(' ');

    return formattedText;
  }

  function formatAttributeSlug(attrSlug) {
    const words = attrSlug?.split('_') || [];
    const formattedWords = words.map(word => {
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      return capitalizedWord;
    });
    return formattedWords.join(' ');
  }

  function renderAttributeDetails(datas) {
    const attrSlug = datas?.attr_slug;
    const attrValue = datas?.attr_value;
    const attrOptionDetail = datas?.order_item_opt_detail;

    if (attrSlug === "dimensions") {
      return Object.keys(JSON.parse(attrValue)).map((objectdata) => (
        <div className='webview_dimension'>
          <div className='inner_webview_dimension'>
            <h3 style={{ fontWeight: "500" }}>{capitalizeFirstLetter(objectdata)}:</h3>
          </div>
          <div>
            <p>{JSON.parse(attrValue)?.[objectdata]} inches</p>
          </div>
        </div>
      ));
    } else {
      const formattedString = formatAttributeSlug(attrSlug);
      const val = attrValue?.includes("[") ? JSON.parse(attrValue) : attrValue;

      const matchedOptions = attrOptionDetail.map((optDetail) => {
        if (attrOptionDetail?.length > 0) {
          if (Array.isArray(val) && val.length > 0) {
            if (val.includes(optDetail.opt_detail_slug)) {
              const indexToChange = val.findIndex((item) => item === optDetail.opt_detail_slug)
              val[indexToChange] = `${optDetail.opt_detail_slug} (${optDetail.opt_detail_val})`
              return val;
            }
          } else {
            const valuesOptions = `${optDetail.opt_detail_slug} (${optDetail.opt_detail_val})`
            return valuesOptions;
          }
        }
        return optDetail.opt_detail_slug;
      });

      const result = matchedOptions.length > 0 ? matchedOptions.join(" , ") : val;
      return (
        <div className='webview_dimension'>
          <div className='inner_webview_dimension'>
            <h3 style={{ fontWeight: "500" }}>{formattedString}:</h3>
          </div>
          <div>
            <p>{formatText(result)}</p>
          </div>
        </div>
      );
    }
  }
  function renderAttributeDetailsRes(datas) {
    const attrSlug = datas?.attr_slug;
    const attrValue = datas?.attr_value;
    const attrOptionDetail = datas?.order_item_opt_detail;

    if (attrSlug === "dimensions") {
      return Object.keys(JSON.parse(attrValue)).map((objectdata) => (
        <div className='data_diimension'>
          <div className='inner_data_diimension'>
            <h2>{capitalizeFirstLetter(objectdata)}:</h2>
          </div>
          <div>
            <p>{JSON.parse(attrValue)?.[objectdata]} inches</p>
          </div>
        </div>
      ));
    } else {
      const formattedString = formatAttributeSlug(attrSlug);
      const val = attrValue?.includes("[") ? JSON.parse(attrValue) : attrValue;

      const matchedOptions = attrOptionDetail.map((optDetail) => {
        if (attrOptionDetail?.length > 0) {
          if (Array.isArray(val) && val.length > 0) {
            if (val.includes(optDetail.opt_detail_slug)) {
              const indexToChange = val.findIndex((item) => item === optDetail.opt_detail_slug)
              val[indexToChange] = `${optDetail.opt_detail_slug} (${optDetail.opt_detail_val})`
              return val;
            }
          } else {
            const valuesOptions = `${optDetail.opt_detail_slug} (${optDetail.opt_detail_val})`
            return valuesOptions;
          }
        }
        return optDetail.opt_detail_slug;
      });

      const result = matchedOptions.length > 0 ? matchedOptions.join(" , ") : val;
      return (
        <div className='data_diimension'>
          <div className='inner_data_diimension'>
            <h2>{formattedString}:</h2>
          </div>
          <div>
            <p>{formatText(result)}</p>
          </div>
        </div>
      );
    }
  }


  const data = orderData?.data?.order_items?.map((item, i) => {
    return {
      key: "1",
      image: (
        <div className='imageAndnum'  key={i}>
          <img src={item?.product?.photo?.[0]} alt='product photo'/>
          {/* <p>5732130</p> */}
        </div>
      ),
      name: <div style={{ color: "#616161", fontSize: "12px" }}>{item?.product?.title}</div>,
      item_detail: item?.order_item_option.map((datas, i) => (
        <div key={i} style={{ color: "#707070", fontSize: "12px" }}>{renderAttributeDetails(datas)}</div>
      )),
      quantity: item.quantity,
      unit_price: <span>{(item?.product_amount ? `$${(parseFloat(item.product_amount) / parseFloat(item.quantity)).toFixed(2)}` : "Pending")}</span>,
      price: <span>{item?.product_amount ? `$${item?.product_amount}` : "Pending"}</span>
    };
  });

  function getDate(params) {
    const date = new Date(params)
    const formated = date.toLocaleDateString().split("/")
    const updatedDate = formated?.[0] + "-" + formated?.[2] + "-" + formated?.[1]
    return updatedDate
  }

  function PrintComponent() {
    return (
      <>
        <div>
          <ReactToPrint
            trigger={() => <button className="print_btn">Print Quote</button>}
            content={() => componentRef}
          />
          <OrderSummaryCom ref={(el) => (componentRef = el)} />
        </div>
      </>
    );
  }

  const calculateTotalPrice = () => {
    const data = orderData?.data?.order_items
    let totalPrice = 0;

    if (data && Array.isArray(data)) {
      data.forEach((item) => {
        const price = parseFloat(item?.product_amount);
        if (!isNaN(price)) {
          totalPrice += price;
        }
      });
    }

    return totalPrice.toFixed(2); // Return the total price rounded to 2 decimal places
  };

  function formatDateToYearMonthDay(isoString) {
    const date = new Date(isoString);
    
    // Extract year, month, and day
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }

  return (
    <div className='main_order_summary_new'>
      <Container>
        <div className="order_summeries">
          <h2 className="account_summary">Quote Details</h2>
          <div>
            {PrintComponent()}
          </div>
          <div className="top_btns">
            <div className="section1">
              <p>Order Date:</p>
              <h4>{formatDateToYearMonthDay(orderData?.data?.created_at)}</h4>
            </div>
            <div className="section_new2">
              <p>Order no:</p>
              <h4>{orderData?.data?.order_number?.slice(0, 10)}{'.'.repeat(5)}</h4>
            </div>
            <div className="section3">
              <p>Status:</p>
              <h4>{orderData?.data?.status ? capitalizeFirstLetter(orderData?.data?.status) : ""}</h4>
            </div>
          </div>

          <div className="order_details">
            <h5>Quote Items</h5>
            <div className="main_cards">
              <div className="cards_table">
                <Table columns={columns} dataSource={data} />
              </div>
            </div>


            {orderData?.data?.order_items?.map((item, i) => {
              return (
                <div key={i} className="secondtable">
                  <div className="detail_table">
                    <div className="seven-box">
                      <div className='image_no2'>
                        <img src={item?.product?.photo?.[0]} alt='product photo' />
                      </div>
                    </div>
                  </div>
                  <div className="data_diimension">
                    <div className="inner_data_diimension">
                      <h2>Item Name</h2>
                    </div>
                    <div>
                      <p>{item?.product?.title}</p>
                    </div>
                  </div>
                  <div className="detail_table">
                    <div className="seven-box" >
                      {
                        item?.order_item_option.map((datas, i) => (
                          renderAttributeDetailsRes(datas)
                        ))
                      }
                    </div>
                  </div>
                  <div className="data_diimension" >
                    <div className="inner_data_diimension">
                      <h2>Quantity</h2>
                    </div>
                    <div className="">
                      <p>{item?.quantity}</p>
                    </div>
                  </div>
                  <div className="data_diimension">
                    <div className="inner_data_diimension">
                      <h2>Unit Price</h2>
                    </div>
                    <div>
                      <p>${(item?.product_amount ? (parseFloat(item.product_amount) / parseFloat(item.quantity)).toFixed(2) : 0)}</p>
                    </div>
                  </div>
                  <div className=" data_diimension">
                    <div className="inner_data_diimension">
                      <h2>Price</h2>
                    </div>
                    <div>
                      <p>${item?.product_amount ? item?.product_amount : 0}</p>
                    </div>
                  </div>
                </div>
              )
            })
            }
          </div>

          <div className="total_amounts">
            <div className="card_totals">
              <h3>Subtotal</h3>
              <h4>{`${calculateTotalPrice() > 0 ? `$${calculateTotalPrice()}` : "Pending"}`}</h4>
            </div>
            <hr />
          </div>

          <div className="bottom_data_quote">
            <div className="img_data img_data_width">
              <img src="/image/cartlocation.png" width={17} height={25} alt='location icon' />
              <a 
                  href="https://www.google.com/maps/place/1631+Cottonwood+School+Rd,+Rosenberg,+TX+77471,+USA/@29.5243243,-95.8307941,867m/data=!3m2!1e3!4b1!4m6!3m5!1s0x86411b9dbaf843bf:0xb87f9d80c5990d5e!8m2!3d29.5243197!4d-95.8282138!16s%2Fg%2F11b8z01lhk!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <p>1631 Cottonwood School Rd Rosenberg, TX 77471,USA</p>
                </a>
            </div>
            <div className="img_data">
              <img src="/image/cartphone.png" width={20} height={20} alt='phone icon' />
              <a href='tel:13462461639'><p>+1 (346) 246-1639</p></a>
            </div>
            <div className="img_data">
              <img src="/image/cartmail.png" width={23} height={18} alt='mail icon'/>
              <a href='mailto: Support@print247.us'><p>Support@print247.us</p></a>
            </div>
            <div className="img_data">
              <img src="/image/carthtc.png" width={18} height={19} alt='cart icon' />
              <p>HST# 829456746RT0003</p>
            </div>
          </div>

        </div>
      </Container >
    </div >
  );
}

export default OrderSummaryNew;
