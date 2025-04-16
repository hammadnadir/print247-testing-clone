import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function NotFound() {
  const [prePage, setPrevPage] = useState("/");

  const router = useRouter()
  useEffect(() => {
    const referrer = document.referrer;
    if (referrer && referrer !== window.location.href) {
      setPrevPage(referrer)
    }
  }, [])

  const hanldeLink = () => {
    router.push(prePage)
  }

  return (
    <>

      <div className="not-found-container">
        <section style={{ backgroundColor: 'white', color: 'black' }}>
          <div
            style={{
              padding: '32px 16px',
              margin: '0 auto',
              maxWidth: '1280px',
              paddingTop: '64px',
              paddingBottom: '64px',
              paddingLeft: '24px',
              paddingRight: '24px',
            }}
          >
            <div style={{ margin: '0 auto', maxWidth: '640px', textAlign: 'center' }}>
              <h1
                style={{
                  marginBottom: '16px',
                  fontSize: '5rem',
                  letterSpacing: '-0.05em',
                  fontWeight: 800,
                  color: 'black',
                }}
              >
                404
              </h1>
              <p
                style={{
                  marginBottom: '16px',
                  fontSize: '2rem',
                  letterSpacing: '-0.05em',
                  fontWeight: 700,
                  color: '#1f2937',
                }}
              >
                Something's missing.
              </p>
              <p
                style={{
                  marginBottom: '16px',
                  fontSize: '1.125rem',
                  fontWeight: 300,
                  color: '#6b7280',
                }}
              >
                Sorry, we can't find that page. You'll find lots to explore on the home page.
              </p>
              <button
                onClick={hanldeLink}
                style={{
                  display: 'inline-flex',
                  color: 'white',
                  backgroundColor: 'black',
                  borderRadius: '8px',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  padding: '10px 16px',
                  textAlign: 'center',
                  marginTop: '16px',
                  marginBottom: '16px',

                }}
              >
                Back to Homepage
              </button>

            </div>
          </div>
        </section>
      </div>
    </>

  );
}

export default NotFound;

