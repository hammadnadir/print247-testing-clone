import React from 'react';
import { Table } from "antd";
import { useSelector } from 'react-redux';

function PrintOrderSummary() {

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
            <p style={{ fontWeight: "500" }}>{capitalizeFirstLetter(objectdata)}:</p>
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
            <p style={{ fontWeight: "500" }}>{formattedString}:</p>
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
          <img src={item?.product?.photo?.[0]} />
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
    <div className='print_view_new'>
      <div className="order_summeries">
        <h3 className="account_summary">Quote Details</h3>

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
          <div className="total_amounts">
            <div className="card_totalss">
              <h3>Subtotal</h3>
              <h4>{`${calculateTotalPrice() > 0 ? `$${calculateTotalPrice()}` : "Pending"}`}</h4>
            </div>
            <hr />

          </div>
          <div className="bottom_data_quotee">  
            <div style={{ width: "90%" }} className="imgg_data">
              <img src="/image/cartlocation.png" width={15} height={23} alt='location icon'/>
              {/* <p>12744 SAN FERNANDO RD BLDG 2 SYLMAR, CA 91342</p> */}
              <p>1631 Cottonwood School Rd Rosenberg, TX 77471,USA</p>
            </div>
            <div className="imgg_data">
              <img src="/image/cartphone.png" width={18} height={18} alt='phone icon'/>
              <a href='tel:13462461639'><p>+1 (346) 246-1639</p></a>
            </div>
            <div className="imgg_data">
              <img src="/image/cartmail.png" width={20} height={16} alt='mail icon'/>
              <a href='mailto: Support@print247-testing-clone.vercel.app'><p>Support@print247-testing-clone.vercel.app</p></a>
            </div>
            <div className="imgg_data">
              <img src="/image/carthtc.png" width={16} height={17} alt='cart icon'/>
              <p>HST# 829456746RT0003</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrintOrderSummary;
