import React from 'react';

const OrderNumberEnpt = ({ OrderNumber }) => {

  const dots = 5
  const formattedOrderNumber = OrderNumber ? `${OrderNumber.slice(0, 3)}${'.'.repeat(dots)}${OrderNumber.slice(-4)}` : "";

  const handleCopyOrderNumber = () => {
    navigator.clipboard.writeText(OrderNumber);
  };

  return (
    <div onClick={handleCopyOrderNumber}>{formattedOrderNumber}</div>
  );
};

export default OrderNumberEnpt;