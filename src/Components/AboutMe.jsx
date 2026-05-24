import React from "react";
import DpImage from "../../src/assets/Dp_About_Section.png"

export default function AboutSection() {
  return (
    <>
      <section className="about-section">

        {/* =========================
            LEFT SIDE
        ========================= */}

        <div className="about-left">

          {/* DOT GRID */}

          <div className="dot-grid"></div>

          {/* STARS */}

          <div className="small-star star-1">✦</div>
          <div className="small-star star-2">✦</div>

          {/* ARROW */}

          <div className="arrow">
            ↘
          </div>

          {/* BACKGROUND SHAPE */}

          <div className="bg-shape"></div>

          {/* IMAGE */}

          <div className="image-wrapper">

            <img
              src={DpImage}
              alt="profile"
            />

          </div>

          {/* QUOTE CARD */}

          <div className="quote-card">

            <div className="quote-icon">
              ❝
            </div>

            <p>
              I turn ideas
              <br />
              into digital
              <br />
              experiences.
            </p>

            <div className="quote-line"></div>

          </div>

          {/* CURVE */}

          <div className="curve-line"></div>

        </div>

        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className="about-right">

          {/* TOP */}

          <div className="about-top">

            <div className="about-header">

              <span className="about-tag font-container">
                ABOUT ME
              </span>

              <div className="header-line"></div>

            </div>

            {/* BADGE */}

            

              <div className="badge-star">
                ✦
              </div>

        

          </div>

          {/* HEADING */}

          <h1 className="about-heading font-container" style={{fontSize:"5rem"}}>

            I’m a Full Stack
            <br />

            Developer
            <br />

            who <span>loves</span> building
            <br />

            modern, fast and
            <br />

            scalable web apps.

          </h1>

          {/* UNDERLINES */}

          <div className="underline underline-1"></div>
          <div className="underline underline-2"></div>

          {/* DESCRIPTION */}

          <p className="about-desc">

            I enjoy turning complex problems into simple,
            beautiful and intuitive solutions. My goal is
            to deliver high quality products that provide
            real value and exceptional user experience.

          </p>

          {/* FLOATING TAGS */}

          <div className="floating-tags">

            <div className="tag-item">
              Full Stack Developer
            </div>

            <div className="tag-item">
              MERN Specialist
            </div>

            <div className="tag-item">
              UI/UX Focused
            </div>

            <div className="tag-item">
              Modern Web Apps
            </div>

            <div className="tag-item">
              Clean Code
            </div>

            <div className="tag-item">
              Performance Driven
            </div>

          </div>

          {/* CTA */}

          <div className="cta-row">

            <button className="main-btn">
              LET’S BUILD SOMETHING →
            </button>

          </div>

          {/* RIGHT VERTICAL */}

          <div className="vertical-line">

            <div className="line-dot"></div>

          </div>

        </div>

      </section>

      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          background:#D9D9D2;
          overflow-x:hidden;
          font-family:Arial, sans-serif;
        }

        .about-section{
          width:100%;
          min-height:100vh;

         background:#D9D9D2;

          padding:40px 5%;

          display:grid;
          grid-template-columns:.85fr 1.15fr;

          gap:30px;

          position:relative;

          overflow:hidden;
        }

        /* =========================
           LEFT SIDE
        ========================= */

        .about-left{
          position:relative;

          height:760px;
        }

        /* DOT GRID */

        .dot-grid{
          position:absolute;

          top:10px;
          left:10px;

          width:120px;
          height:120px;

          background-image:
          radial-gradient(#cfc7bc 1.6px, transparent 1.6px);

          background-size:22px 22px;

          z-index:10;
        }

        /* STARS */

        .small-star{
          position:absolute;

          font-size:1rem;

          z-index:10;

          animation:floatStar 4s ease-in-out infinite;
        }

        .star-1{
          top:150px;
          left:20px;
        }

        .star-2{
          top:290px;
          right:30px;
        }

        /* ARROW */

        .arrow{
          position:absolute;

          left:10px;
          top:230px;

          font-size:3rem;

          transform:rotate(12deg);

          z-index:10;

          animation:floatArrow 5s ease-in-out infinite;
        }

        /* BG SHAPE */

        .bg-shape{
          position:absolute;

          width:470px;
          height:620px;

          background:#E9E1D6;

          border-radius:240px;

          left:90px;
          top:25px;
        }

        /* IMAGE */

        .image-wrapper{
          position:absolute;

          width:420px;
          height:620px;

          border-radius:240px;

          overflow:hidden;

          left:110px;
          top:45px;

          z-index:5;

          transition:.5s ease;
        }

        .image-wrapper:hover{
          transform:translateY(-8px);
        }

        .image-wrapper img{
          width:100%;
          height:100%;

          object-fit:cover;

          filter:grayscale(100%);
        }

        /* QUOTE */

        .quote-card{
          position:absolute;

          left:0;
          top:360px;

          width:150px;

          background:#fff;

          border-radius:24px;

          padding:24px;

          z-index:20;

          box-shadow:
          0 10px 30px rgba(0,0,0,.05);

          animation:floatCard 6s ease-in-out infinite;
        }

        .quote-icon{
          font-size:2.5rem;

          color:#111;

          margin-bottom:8px;
        }

        .quote-card p{
          font-size:1rem;

          line-height:1.8;

          color:#111;
        }

        .quote-line{
          width:54px;
          height:2px;

          background:#111;

          margin-top:18px;
        }

        /* CURVE */

        .curve-line{
          position:absolute;

          width:640px;
          height:640px;

          border:2px solid #ddd3c5;

          border-radius:50%;

          left:-40px;
          bottom:-140px;

          z-index:1;
        }

        /* =========================
           RIGHT SIDE
        ========================= */

        .about-right{
          position:relative;

          padding-top:30px;
        }

        /* TOP */

        .about-top{
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
        }

        /* HEADER */

        .about-header{
          display:flex;
          align-items:center;

          gap:18px;

          margin-bottom:28px;
        }

        .about-tag{
          font-size:1rem;

          font-weight:700;

          letter-spacing:2px;

          color:#111;
        }

        .header-line{
          width:80px;
          height:1px;

          background:#111;

          opacity:.25;
        }

        /* BADGE */

        .badge-circle{
          width:120px;
          height:120px;

          border:1.5px solid #111;

          border-radius:50%;

          position:relative;

          display:flex;
          align-items:center;
          justify-content:center;

          margin-right:20px;

          animation:rotateBadge 18s linear infinite;
        }

        .badge-circle::before{
          content:"CODE • DESIGN • BUILD";

          position:absolute;

          width:130px;

          font-size:.62rem;

          letter-spacing:2px;

          text-align:center;

          transform:rotate(-40deg);
        }

        .badge-star{
          font-size:2rem;
        }

        /* HEADING */

        .about-heading{
          font-size:clamp(48px,4vw,78px);

          line-height:1.08;

          letter-spacing:-3px;

          color:#111;

          font-weight:700;

          max-width:760px;

          position:relative;

          animation:fadeUp 1s ease;
        }

        .about-heading span{
          font-style:italic;

          font-family:serif;

          font-weight:500;
        }

        /* UNDERLINES */

        .underline{
          position:absolute;

          height:3px;

          background:#111;

          border-radius:50px;
        }

        .underline-1{
          width:72px;

          top:215px;
          left:0;

          transform:rotate(-7deg);
        }

        .underline-2{
          width:120px;

          top:308px;
          right:220px;

          transform:rotate(-3deg);
        }

        /* DESC */

        .about-desc{
          margin-top:34px;

          max-width:650px;

          font-size:1rem;

          line-height:1.9;

          color:#555;
        }

        /* =========================
           FLOATING TAGS
        ========================= */

        .floating-tags{
          margin-top:55px;

          display:flex;
          flex-wrap:wrap;

          gap:16px;

          max-width:720px;
        }

        .tag-item{
          padding:16px 24px;

          background:#FAF6F0;

          border:1px solid #e8dfd2;

          border-radius:999px;

          font-size:.88rem;

          font-weight:600;

          color:#111;

          letter-spacing:.3px;

          transition:.35s cubic-bezier(.22,1,.36,1);

          animation:floatTag 4s ease-in-out infinite;
        }

        .tag-item:nth-child(2){
          animation-delay:.3s;
        }

        .tag-item:nth-child(3){
          animation-delay:.6s;
        }

        .tag-item:nth-child(4){
          animation-delay:.9s;
        }

        .tag-item:nth-child(5){
          animation-delay:1.2s;
        }

        .tag-item:nth-child(6){
          animation-delay:1.5s;
        }

        .tag-item:hover{
          transform:translateY(-6px);

          background:#111;
          color:#fff;

          border-color:#111;

          box-shadow:
          0 12px 30px rgba(0,0,0,.08);
        }

        /* CTA */

        .cta-row{
          margin-top:45px;
        }

        .main-btn{
          background:#111;
          color:#fff;

          border:none;

          padding:18px 34px;

          border-radius:999px;

          font-size:.82rem;

          font-weight:700;

          letter-spacing:1px;

          cursor:pointer;

          transition:.35s ease;
        }

        .main-btn:hover{
          transform:translateY(-4px);

          box-shadow:
          0 14px 30px rgba(0,0,0,.12);
        }

        /* RIGHT LINE */

        .vertical-line{
          position:absolute;

          top:140px;
          right:-10px;

          height:520px;

          border-left:2px dashed #111;

          opacity:.25;
        }

        .line-dot{
          width:18px;
          height:18px;

          background:#111;

          border-radius:50%;

          position:absolute;

          top:-10px;
          left:-10px;
        }

        /* =========================
           ANIMATIONS
        ========================= */

        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes rotateBadge{
          from{
            transform:rotate(0deg);
          }
          to{
            transform:rotate(360deg);
          }
        }

        @keyframes floatCard{
          0%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-10px);
          }
          100%{
            transform:translateY(0px);
          }
        }

        @keyframes floatArrow{
          0%{
            transform:translateY(0px) rotate(12deg);
          }
          50%{
            transform:translateY(-10px) rotate(12deg);
          }
          100%{
            transform:translateY(0px) rotate(12deg);
          }
        }

        @keyframes floatStar{
          0%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-8px);
          }
          100%{
            transform:translateY(0px);
          }
        }

        @keyframes floatTag{
          0%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-8px);
          }
          100%{
            transform:translateY(0px);
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media(max-width:1200px){

          .about-section{
            grid-template-columns:1fr;

            gap:80px;
          }

          .about-left{
            height:700px;
          }

          .vertical-line{
            display:none;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media(max-width:700px){

          .about-section{
            padding:50px 20px;
          }

          .about-left{
            height:620px;
          }

          .bg-shape{
            width:360px;
            height:500px;

            left:50%;
            transform:translateX(-50%);
          }

          .image-wrapper{
            width:320px;
            height:500px;

            left:50%;
            transform:translateX(-50%);
          }

          .curve-line{
            width:460px;
            height:460px;
          }

          .button-row{
            flex-direction:column;
          }

          .main-btn{
            width:100%;
          }

          .badge-circle{
            display:none;
          }

          .about-heading{
            font-size:52px;
          }

          .underline{
            display:none;
          }
        }

      `}</style>
    </>
  );
}