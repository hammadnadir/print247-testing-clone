import { combineReducers } from "@reduxjs/toolkit";
import home from "./home";
import global from "./global";
import product from "./product";
import cart from "./cart";
import detail from "./detail";
import auth from "./auth";
import payment from "./payment";
import user from "./user";
import contacts from "./contacts";
import catalog from "./catalog";
import dielinesample from "./dielinesample";
import privacy from "./privacy";
import condition from "./condition";
import about from "./about";
import blog from "./blog";
import price from "./price";
import productDetail from "./productDetail";
import order from "./order";
import sitemap from "./sitemap"
import meta from "./meta"
import industry from "./industry";
import getCountry from "./getCountry";
import quote from "./quote";
import zohoLeads from "./zohoLeads";

export const combinedReducer = combineReducers({
  home,
  product,
  global,
  cart,
  auth,
  detail,
  payment,
  user,
  order,
  contacts,
  catalog,
  dielinesample,
  privacy,
  condition,
  about,
  blog,
  price,
  productDetail,
  sitemap,
  meta,
  industry,
  getCountry,
  zohoLeads,
  quote
});
