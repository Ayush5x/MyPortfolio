import React from "react";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

export default function Footer() {
  return (
    <>
      <footer className="footer-section">

        {/* TOP BLUR */}

        <div className="footer-blur footer-blur-1"></div>
        <div className="footer-blur footer-blur-2"></div>

        {/* DOTS */}

        <div className="footer-dots top-right">
          {[...Array(16)].map((_, i) => (
            <span key={i}></span>
          ))}
        </div>

        <div className="footer-dots bottom-left">
          {[...Array(12)].map((_, i) => (
            <span key={i}></span>
          ))}
        </div>

        {/* MAIN CONTAINER */}

        <div className="footer-container">

          {/* TOP SECTION */}

          <div className="footer-top">

            {/* LEFT */}

            <div className="footer-brand">

              <div className="footer-tag font-container">
                ✦ AVAILABLE FOR FREELANCE
              </div>

              <h1 className="font-container">

                Let’s create
                <br />

                something{" "}

                <span className="special-text">
                  exceptional.
                </span>

              </h1>

              <p className="font-container" style={{fontSize:"1.4rem"}}>

                I design and develop modern web experiences
                focused on performance, scalability and
                meaningful user interaction.

              </p>

              {/* CTA */}

              <button className="footer-btn">

                START A PROJECT

                <FiArrowUpRight />

              </button>

            </div>

            {/* RIGHT */}

            <div className="footer-links-wrapper">

              {/* NAVIGATION */}

              <div className="footer-column ">

                <h3>
                  Navigation
                </h3>

                <a href="#">
                  Home
                </a>

                <a href="#">
                  About
                </a>

                <a href="#">
                  Tech Stack
                </a>

                <a href="#">
                  Projects
                </a>

                <a href="#">
                  Contact
                </a>

              </div>

              {/* SERVICES */}

              <div className="footer-column">

                <h3>
                  Services
                </h3>

                <a href="#">
                  Web Design
                </a>

                <a href="#">
                  Full Stack Apps
                </a>

                <a href="#">
                  UI/UX Design
                </a>

                <a href="#">
                  Responsive Websites
                </a>

                <a href="#">
                  API Integration
                </a>

              </div>

              {/* CONTACT */}

              <div className="footer-column">

                <h3>
                  Contact
                </h3>

                <div className="contact-item">

                  <FiMail />

                  <span>
                    ayushpatel1921@gmail.com
                  </span>

                </div>

                <div className="contact-item">

                  <FiPhone />

                  <span>
                    +91 93487 75634
                  </span>

                </div>

                <div className="contact-item">

                  <FiMapPin />

                  <span>
                    Kuchinda , Sambalpur Odisha
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* DIVIDER */}

          <div className="footer-divider"></div>

          {/* BOTTOM */}

          <div className="footer-bottom">

            {/* COPYRIGHT */}

            <p>

              © 2026 Ayush Patel. All rights reserved.

            </p>

            {/* SOCIALS */}

            <div className="social-links">

              <a href="#">
                <FiGithub />
              </a>

              <a href="#">
                <FiLinkedin />
              </a>

              <a href="#">
                <FiInstagram />
              </a>

              <a href="#">
                <FiTwitter />
              </a>

            </div>

          </div>

        </div>

      </footer>

      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          font-family:'Inter',sans-serif;
          background:#D9D9D2;
        }

        .footer-section{
          width:100%;

          background:#D9D9D2;

          padding:70px 5% 40px;

          position:relative;

          overflow:hidden;
        }

        /* BLURS */

        .footer-blur{
          position:absolute;

          border-radius:50%;

          filter:blur(120px);

          z-index:0;
        }

        .footer-blur-1{
          width:320px;
          height:320px;

          background:#D9D9D2;

          top:-100px;
          left:-100px;
        }

        .footer-blur-2{
          width:280px;
          height:280px;

          background:#ead8c4;

          right:-80px;
          bottom:-80px;
        }

        /* DOTS */

        .footer-dots{
          position:absolute;

          display:grid;

          grid-template-columns:repeat(4,12px);

          gap:12px;

          z-index:2;
        }

        .footer-dots span{
          width:5px;
          height:5px;

          border-radius:50%;

          background:#b58e68;
        }

        .top-right{
          top:70px;
          right:70px;
        }

        .bottom-left{
          bottom:70px;
          left:70px;
        }

        /* CONTAINER */

        .footer-container{
          position:relative;

          z-index:5;

          border-radius:40px;

          padding:80px;

          overflow:hidden;
        }

        /* TOP */

        .footer-top{
          display:grid;

          grid-template-columns:1.2fr 1fr;

          gap:100px;
        }

        /* BRAND */

        .footer-tag{
          width:fit-content;

          padding:16px 28px;

          border-radius:999px;

          border:1.5px solid #ccb49b;

          font-size:.9rem;

          font-weight:700;

          letter-spacing:2px;

          margin-bottom:40px;
        }

        .footer-brand h1{
          font-size:clamp(65px,7vw,110px);

          line-height:.93;

          letter-spacing:-4px;

          color:#111;

          font-weight:900;
        }

        .footer-brand h1 span{
          color:#b18159;

          font-style:italic;

          font-family:serif;

          font-weight:500;
        }

        .footer-brand p{
          margin-top:35px;

          max-width:560px;

          font-size:1.15rem;

          line-height:1.9;

          color:#555;
        }

        /* BUTTON */

        .footer-btn{
          margin-top:45px;

          height:70px;

          padding:0 38px;

          border:none;

          border-radius:999px;

          background:#050505;

          color:#fff;

          font-size:.92rem;

          font-weight:700;

          letter-spacing:1px;

          display:flex;
          align-items:center;

          gap:14px;

          cursor:pointer;

          transition:.35s ease;
        }

        .footer-btn:hover{
          transform:translateY(-5px);

          box-shadow:
          0 18px 40px rgba(0,0,0,.12);
        }

        /* RIGHT */

        .footer-links-wrapper{
          display:grid;

          grid-template-columns:repeat(3,1fr);

          gap:40px;

          padding-top:40px;
        }

        .footer-column h3{
          font-size:1.4rem;

          font-weight:800;

          margin-bottom:30px;

          color:#111;
        }

        .footer-column a{
          display:block;

          text-decoration:none;

          color:#666;

          margin-bottom:18px;

          font-size:1rem;

          transition:.3s ease;
        }

        .footer-column a:hover{
          color:#111;

          transform:translateX(4px);
        }

        /* CONTACT */

        .contact-item{
          display:flex;

          align-items:center;

          gap:12px;

          margin-bottom:22px;

          color:#666;

          line-height:1.7;
        }

        .contact-item svg{
          font-size:1.1rem;
        }

        /* DIVIDER */

        .footer-divider{
          width:100%;
          height:1px;

          background:#ddd0c2;

          margin:70px 0 35px;
        }

        /* BOTTOM */

        .footer-bottom{
          display:flex;

          justify-content:space-between;

          align-items:center;

          gap:20px;

          flex-wrap:wrap;
        }

        .footer-bottom p{
          color:#666;

          font-size:.98rem;
        }

        /* SOCIAL */

        .social-links{
          display:flex;

          align-items:center;

          gap:18px;
        }

        .social-links a{
          width:58px;
          height:58px;

          border-radius:50%;

          background:#ECE2D7;

          color:#111;

          display:flex;
          align-items:center;
          justify-content:center;

          font-size:1.3rem;

          text-decoration:none;

          transition:.35s ease;
        }

        .social-links a:hover{
          background:#111;

          color:#fff;

          transform:translateY(-6px);
        }

        /* RESPONSIVE */

        @media(max-width:1200px){

          .footer-top{
            grid-template-columns:1fr;

            gap:70px;
          }

          .footer-links-wrapper{
            padding-top:0;
          }
        }

        @media(max-width:768px){

          .footer-section{
            padding:50px 20px 30px;
          }

          .footer-container{
            padding:0;
          }

          .footer-brand h1{
            font-size:60px;
          }

          .footer-links-wrapper{
            grid-template-columns:1fr;
          }

          .footer-bottom{
            flex-direction:column;

            align-items:flex-start;
          }

          .footer-dots{
            display:none;
          }
        }

        @media(max-width:520px){

          .footer-section{
            padding:40px 16px 25px;
          }

          .footer-brand h1{
            font-size:48px;

            letter-spacing:-2px;
          }

          .footer-brand p{
            font-size:1rem !important;

            line-height:1.8;
          }

          .footer-tag{
            width:100%;

            justify-content:center;

            text-align:center;

            padding:14px 18px;
          }

          .footer-btn{
            width:100%;

            justify-content:center;
          }

          .social-links{
            width:100%;

            justify-content:space-between;
          }

          .social-links a{
            width:52px;
            height:52px;
          }

          .footer-column h3{
            font-size:1.2rem;
          }
        }

      `}</style>
    </>
  );
}