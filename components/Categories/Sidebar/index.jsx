import { hideCategories } from '@/data/hideCategories';
import { industriesProduct } from '@/data/industries';
import { capitalizeAllWords } from '@/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Sidebar() {

  const { pages } = useSelector((state) => state.product);
const [products , setProducts] = useState([])
  const router = useRouter()
  const { id } = router?.query
  const [openMenu, setOpenMenu] = useState(false)
  
  const handleClick = () => {
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };
  useEffect(()=>{
    if (router?.asPath?.includes("boxes-packaging")) {
      // const data = pages?.catgeory ? pages?.catgeory?.filter((item)=>item?.slug !== "packaging-supplies") : []
      const data = pages?.catgeory
      setProducts(data)
    } else {
      const data = pages?.catgeory ? pages?.catgeory : []
      setProducts(data)
    }
  },[pages?.catgeory])

  return (
    <>
      <div className="ham_iconss">
        <img src="/image/ham-header1.png" alt="Hamburger Icon" onClick={handleClick} />
      </div>

      <div className="sidebar">
        {products && products?.length > 0 &&
          products
            .filter((items) => !hideCategories?.includes(items?.slug))
            .map((item, i) => {
              return (
                <div key={i}>
                  <div className='sidebar_data2' >
                    <div>
                      <h5>{item?.title}</h5>
                    </div>
                    <div className='scroll_menu'>
                      {Array.isArray(item?.category_products) && item?.category_products?.map((items, index) => {
                        return (
                          items?.is_featured === 1 &&
                          <Link href={`/${items?.slug}`} key={index}>
                            <p style={{ color: "black", cursor: "pointer" }}>{capitalizeAllWords(items?.title)}</p>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    {products?.filter((data)=>!hideCategories?.includes(data?.slug)).length === i + 1 ? "" : <hr className='underlinehr' />}
                  </div>
                </div>
              );
            })
        }
      </div>

      {/* ###################### Mobile View Code ###################### */}


      <div className={`sidebarrTwo  ${openMenu ? "showed1" : "hidden1"}`}>
        <div className="main_close_icon">
          <img className="close_icon" onClick={handleClose} src="/image/closee.png" width={20} height={20} alt='close icon'/>
        </div>
        {products && products?.length > 0 &&
          products
          .filter((items) => !industriesProduct?.includes(items?.slug))
          ?.map((item, i) => {
            return (
              <div key={i}>
                <div className='sidebar_datas' >
                  {/* <Link href={`/category/${id}-${item?.slug}`}> */}
                    <h5>{item?.title}</h5>
                  {/* </Link> */}
                  <div className='scroll_menu'>
                    {
                      item.category_products?.map((items, index) => {
                        return (
                          items?.is_featured === 1 &&
                          <Link href={`/${items?.slug}`} key={index}>
                            <p style={{ color: "black" }}>{capitalizeAllWords(items?.title)}</p>
                          </Link>
                        )
                      })
                    }
                  </div>
                </div>
                <hr className='underlinehr' />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Sidebar
