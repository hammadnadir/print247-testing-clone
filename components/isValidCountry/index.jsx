import axios from 'axios';
import { getCountryRequest, setIpAddress } from '@/redux/getCountry';
import { wrapper } from '@/store';
import React from 'react';
import { useSelector } from 'react-redux';

function IpGetting() {
  const { countryName, ip } = useSelector((state) => state.getCountry);

  return (
    <div>
      <p>IP Address: {ip}</p>
      <p>Country Data: {countryName ? countryName : 'No country data available'}</p>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    store.dispatch(setIpAddress(data.ip));
    await store.dispatch(getCountryRequest(data.ip));
    return { props: {  } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { ip } };
  }
});

export default IpGetting;
