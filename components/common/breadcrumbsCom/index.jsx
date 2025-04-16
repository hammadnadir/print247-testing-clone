import { industries } from "@/data/industries";
import { slugToWords } from "@/utils";
import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function BreadcrumbsCom() {
  const { detailData } = useSelector((state) => state.detail);


  const values = Object.keys(industries).map(value => value);


  return (
    <div>
      <Breadcrumb separator="/">
        <Breadcrumb.Item>
          {values?.includes(detailData?.cat_slug) ?
            <Link href={`/industry/${detailData?.cat_slug}`}> 
              {slugToWords(detailData?.cat_slug)}
            </Link>
            :
            <Link href={`/category/${detailData?.page_slug}-${detailData?.cat_slug}`}>
              {slugToWords(detailData?.cat_slug)}
            </Link>
          }
        </Breadcrumb.Item>
        <Breadcrumb.Item>{slugToWords(detailData?.slug)}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbsCom;
