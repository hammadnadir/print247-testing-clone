// import React, { useEffect } from 'react';

// const TawkToChat = () => {
//   // useEffect(() => {
//   //   const s1 = document.createElement('script');
//   //   const s0 = document.getElementsByTagName('script')[0];
//   //   s1.async = true;
//   //   s1.src = 'https://embed.tawk.to/63d3e65cc2f1ac1e202fee6b/1gnprnn3n';
//   //   s1.charset = 'UTF-8';
//   //   s1.setAttribute('crossorigin', '*');
//   //   s0.parentNode.insertBefore(s1, s0);

//   //   return () => {
//   //     // Clean up the script when the component is unmounted
//   //     s1.parentNode.removeChild(s1);
//   //   };
//   // }, []);

//   return <div id="tawkto-chat-container" />;
// };

// export default TawkToChat;

// components/ZohoSalesIQ.js

// pages/_document.js or specific page where you want to include the script

import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <div>
      <div>
        <script>
          {`
            window.$zoho=window.$zoho || {};
            $zoho.salesiq=$zoho.salesiq||{ready:function(){}} 
          `}
        </script>
        <script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siq4a5402d8d638be6789be8db6255c4735afa78be87725188dd2c85335875226e7"
          defer
        ></script>
      </div>
    </div>
  );
};

export default MyDocument;
