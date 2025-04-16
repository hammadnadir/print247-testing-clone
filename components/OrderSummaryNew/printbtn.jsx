import React, { useRef } from 'react';
import { Space, Table, Tag, Menu } from "antd";
import Image from 'next/image';
import { useSelector } from 'react-redux';
import ReactToPrint from 'react-to-print';
import PrintOrderSummary from './printView';

export class OrderSummaryCom extends React.Component {
    render() {
        return (
            <PrintOrderSummary />
        );
    }
}