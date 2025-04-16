import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {

  const [data, setData] = useState("");
  const currentYear = new Date().getFullYear();

  const [openSection, setOpenSection] = useState(null);

  const toggleAccordion = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: 'Quick Links',
      links: [
        { href: '/', label: 'Home', icon: '/image/footer_arrow.png' },
        { href: '/about-us', label: 'About us', icon: '/image/footer_arrow.png' },
        { href: '/contact-us', label: 'Contact us', icon: '/image/footer_arrow.png' },
        { href: '/sitemap', label: 'Sitemap', icon: '/image/footer_arrow.png' },
        { href: '/post', label: 'Insights', icon: '/image/footer_arrow.png' },
      ],
    },
    {
      title: 'About',
      links: [
        { href: '/faq', label: 'FAQ', icon: '/image/footer_arrow.png' },
        { href: '/privacy-policy', label: 'Privacy Policy', icon: '/image/footer_arrow.png' },
        { href: '/terms-and-conditions', label: 'Terms and Conditions', icon: '/image/footer_arrow.png' },
        { href: '/return-policy', label: 'Return Policy', icon: '/image/footer_arrow.png' },
        { href: '/shipping-policy', label: 'Shipping Policy', icon: '/image/footer_arrow.png' },
      ],
    },
    {
      title: 'Support',
      links: [
        { href: 'tel:13462461639', label: '+1 (346) 246-1639', icon: '/image/phone.png' },
        { href: 'mailto:Support@print247.us', label: 'Support@print247.us', icon: '/image/mail.png' },
        {
          href: 'https://www.google.com/maps/place/1631+Cottonwood+School+Rd,+Rosenberg,+TX+77471,+USA',
          label: '1631 Cottonwood School Rd, Rosenberg, TX 77471, USA',
          icon: '/image/address.png',
        },
        {
          href: 'https://www.google.com/maps/place/12744+San+Fernando+Rd+BLDG+2,+Sylmar,+CA+91342,+USA',
          label: '12744 San Fernando Rd, Bldg 2, Sylmar, CA 91342',
          icon: '/image/mailing-address.png',
        },
      ],
    },
  ];

  return (
    <div className="main_footer">
      <div className="container">
        <div className="footer_data">
          <div className="first">
            <Link href="/">
              <Image src="/image/print247originalwhitelogo.svg" alt="logo" width={136} height={57} />
            </Link>
            <p>We are a leading American Brand of Printing and Packaging Products. It is the time to Embrace the Packaging of Tomorrow. <br /> Start!</p>
            <div className="main_stamp_logos">
              <div className="stamp_logo1">
                <img src="/home/latestFooter/stamp.webp" alt="stamp logo" />
              </div>
              <div className="stamp_logo2">
                <img src="/home/latestFooter/fpa.webp" alt="stamp logo" />
              </div>
            </div>

          </div>
          <div className="main">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Image
                  className="margin-right"
                  src="/image/footer_arrow.png"
                  width={13}
                  height={13}
                  alt="arrow"
                ></Image>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Image
                  className="margin-right"
                  src="/image/footer_arrow.png"
                  width={13}
                  height={13}
                  alt="arrow"
                ></Image>
                <Link href="/about-us">About us</Link>
              </li>

              <li>
                <Image
                  className="margin-right"
                  src="/image/footer_arrow.png"
                  width={13}
                  height={13}
                  alt="arrow"
                ></Image>
                <Link href="/contact-us">Contact us</Link>
              </li>
              <li>
                <Image
                  className="margin-right"
                  src="/image/footer_arrow.png"
                  width={13}
                  height={13}
                  alt="arrow"
                ></Image>
                <Link href="/sitemap">Sitemap</Link>
              </li>
              <li>
                <Image
                  className="margin-right"
                  src="/image/footer_arrow.png"
                  width={13}
                  height={13}
                  alt="arrow"
                ></Image>
                <Link href="/post">Insights</Link>
              </li>
            </ul>
          </div>
          <div className="main">
            <h3>About</h3>
            <ul className="footer-links">

              <li>
                <Image
                  className="margin-right"
                  src="/image/footer_arrow.png"
                  width={13}
                  height={13}
                  alt="arrow"
                ></Image>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Image
                  className="margin-right"
                  src="/image/footer_arrow.png"
                  width={13}
                  height={13}
                  alt="arrow"
                ></Image>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Image
                  className="margin-right"
                  src="/image/footer_arrow.png"
                  width={13}
                  height={13}
                  alt="arrow"
                ></Image>
                <Link href="/terms-and-conditions">Terms and Conditions</Link>
              </li>
              <li>
                <Image
                  className="margin-right"
                  src="/image/footer_arrow.png"
                  width={13}
                  height={13}
                  alt="arrow"
                ></Image>
                <Link href="/return-policy">
                  Return Policy
                </Link>
              </li>
              <li>
                <Image
                  className="margin-right"
                  src="/image/footer_arrow.png"
                  width={13}
                  height={13}
                  alt="arrow"
                ></Image>
                <Link href="/shipping-policy">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="main">
            <h3>Contact us</h3>
            <ul className="footer-links">
              <li>
                <Image className="margin-icons" src="/image/phone.png" width={23} height={23} alt="phone icon" />
                <Link id="lets-talk4" href="tel:13462461639">+1 (346) 246-1639</Link>
              </li>
              <li>
                <Image className="margin-icons" src="/image/mail.png" width={22} height={18} alt="mail icon" />
                <a href="mailto: Support@print247.us">
                  Support@print247.us
                </a>
              </li>
              <li style={{ display: "flex" }}>
                <Image className="margin-icons"
                  src="/image/address.png"
                  width={16}
                  height={22}
                  alt="address icon"
                />
                <a
                  href="https://www.google.com/maps/place/1631+Cottonwood+School+Rd,+Rosenberg,+TX+77471,+USA/@29.5243243,-95.8307941,867m/data=!3m2!1e3!4b1!4m6!3m5!1s0x86411b9dbaf843bf:0xb87f9d80c5990d5e!8m2!3d29.5243197!4d-95.8282138!16s%2Fg%2F11b8z01lhk!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1631 Cottonwood School Rd
                  Rosenberg, <br />TX 77471,USA
                </a>
              </li>
              <li style={{ display: "flex" }}>
                <Image className="margin-icons"
                  src="/image/mailing-address.png"
                  width={23}
                  height={23}
                  alt="address icon"
                />
                <a
                  href="https://www.google.com/maps/place/12744+San+Fernando+Rd+BLDG+2,+Sylmar,+CA+91342,+USA/@34.3021648,-118.4638787,906m/data=!3m2!1e3!4b1!4m6!3m5!1s0x80c28fdfb4c00001:0x49b964c6c4d7e4c4!8m2!3d34.3021604!4d-118.4613038!16s%2Fg%2F11y29v54jl!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  12744 San Fernando Rd, Bldg 2, Sylmar, <br />
                  CA 91342
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* RESPONSIVE DROPDOWN SECTION */}

        <div className="mobile_res_drop">
          {sections.map((section, index) => (
            <div className="main" key={index}>
              <div className="res_inner_main" onClick={() => toggleAccordion(index)}>
                <h3>{section.title}</h3>
                <span>
                  {openSection === index ? (
                    <Image src="/home/latestFooter/down.png" width={20} height={20} alt="arrow down" />
                  ) : (
                    <Image src="/home/latestFooter/next.png" width={20} height={20} alt="arrow right" />
                  )}
                </span>
              </div>
              <ul className={`footer-links ${openSection === index ? 'open' : ''}`}>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Image className="margin-right" src={link.icon} width={15} height={15} alt="arrow" />
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              <hr />
            </div>
          ))}
        </div>

        {/* LOWER SECTION */}

        <div>
          <h3 className="follow_us">Follow us on</h3>
        </div>

        <div className="social_media_links">
          <hr />
          <div className="follow_section">
            <div className="main-social">
              <a href="https://www.facebook.com/officialprint247.us" onMouseEnter={() => setData("1")} onMouseLeave={() => setData("")} target="_blank">
                {data !== "1" ? <Image className="social-icon" src="/image/fb.png" width={44} height={44} alt="socail icon" /> : <Image className="social-icon" src="/image/whitefb.png" width={44} height={44} alt="socail icon" />}
              </a>
              <a href="https://www.instagram.com/print247.us/" onMouseEnter={() => setData("2")} onMouseLeave={() => setData("")} target="_blank">
                {data !== "2" ? <Image className="social-icon" src="/image/footinsta.png" width={44} height={44} alt="socail icon" /> : <Image className="social-icon" src="/image/whiteinsta.png" width={44} height={44} alt="socail icon" />}
              </a>
              <a href="https://www.linkedin.com/company/print247-us" onMouseEnter={() => setData("4")} onMouseLeave={() => setData("")} target="_blank">
                {data !== "4" ? <Image className="social-icon" src="/image/inlcon.png" width={44} height={44} alt="socail icon" /> : <Image className="social-icon" src="/image/whitelinked.png" width={44} height={44} alt="socail icon" />}
              </a>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="container">
        <div className="main_copyright">
          <div className="copyright">
            <p>Print247.us © {currentYear}. All Rights Reserved.</p>
          </div>
          <div className="inner_copyright">
            <p>We accept all major credit cards</p>
            <Image
              className="social-visa"
              // src="/image/payment.webp"
              src="/home/latestFooter/payment.webp"
              width={290}
              height={90}
              alt="payment gateway icon"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;