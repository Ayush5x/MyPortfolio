import React from "react";

export default function ServicesSection() {
  const services = [
    {
      icon: "</>",
      title: ["FULL STACK", "DEVELOPMENT"],
      desc: "End-to-end web app development using modern technologies like React, Node.js, and MongoDB.",
    },
    {
      icon: "⌘",
      title: ["FRONTEND", "DEVELOPMENT"],
      desc: "Building responsive, interactive, and accessible interfaces with a focus on performance.",
    },
    {
      icon: "◫",
      title: ["BACKEND", "DEVELOPMENT"],
      desc: "Designing secure APIs, databases, and server-side logic that power your product.",
    },
    {
      icon: "✦",
      title: ["UI/UX", "DESIGN"],
      desc: "Crafting clean, user-focused designs that enhance usability and drive engagement.",
    },
  ];

  return (
    <>
      <section className="services-section">
        {/* LEFT */}
        <div className="services-left">
          <p className="services-tag font-container">What I Do</p>

          <h1 className="services-heading font-container">SERVICES</h1>

          <p className="services-desc">
            I build fast, scalable, and user-friendly web applications that turn
            ideas into real digital experiences.
          </p>

          <button className="services-btn">VIEW ALL SERVICES →</button>
        </div>

        {/* RIGHT */}
        <div className="services-grid">
          {services.map((item, index) => (
            <div
              className="service-card"
              key={index}
              style={{
                animationDelay: `${index * 0.12}s`,
              }}
            >
              <div className="service-icon">{item.icon}</div>

              <h2 className="font-container">
                {item.title.map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </h2>

              <div className="service-line"></div>

              <p>{item.desc}</p>

              <a href="/">LEARN MORE →</a>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
        
          background:#D9D9D2;
          overflow-x:hidden;

        }

        .services-section{
         

          background:#D9D9D2;

          padding:70px ; 

          display:flex;
          gap:28px;

          align-items:flex-start;
        }

        /* LEFT SIDE */

        .services-left{
          width:28%;
          min-width:260px;

          animation:leftReveal 1s ease;
        }

        .services-tag{
          font-size:1.7rem;
          margin-bottom:8px;

          opacity:0;
          animation:fadeUp .8s ease forwards;
        }

        .services-heading{
          font-size:clamp(58px,6vw,100px);

          line-height:.88;

          letter-spacing:-2px;

          color:#1C1C1C;

          opacity:0;
          transform:translateY(40px);

          animation:heroReveal 1s ease forwards;

          transition:.4s ease;
        }

        .services-heading:hover{
          transform:translateY(-4px);
        }

        .services-desc{
          margin-top:28px;

          max-width:330px;

          color:#757575;

          line-height:1.9;

          font-size:1rem;

          font-family:'Inter', sans-serif;

          opacity:0;

          animation:fadeUp 1s ease forwards;
          animation-delay:.2s;
        }

        .services-btn{
          margin-top:36px;

          background:#1C1C1C;
          color:#fff;

          border:none;

          padding:15px 28px;

          border-radius:999px;

          font-size:.78rem;

          font-weight:700;

          letter-spacing:1.2px;

          cursor:pointer;

          transition:.35s ease;

          opacity:0;

          animation:fadeUp 1s ease forwards;
          animation-delay:.35s;
        }

        .services-btn:hover{
          background:transparent;
          color:#1C1C1C;

          border:1px solid #1C1C1C;

          transform:translateY(-3px);
        }

        /* RIGHT SIDE */

        .services-grid{
          flex:1;

          display:grid;

          grid-template-columns:repeat(4,1fr);

          gap:18px;
        }

        .service-card{
          background:#ECEAE4;

          border:1px solid #d6d1c8;

          border-radius:26px;

          padding:26px;

          min-height:360px;

          display:flex;
          flex-direction:column;

          opacity:0;

          transform:translateY(50px);

          animation:cardReveal .8s ease forwards;

          transition:.45s cubic-bezier(.22,1,.36,1);
        }

        .service-card:hover{
          transform:translateY(-10px);

          box-shadow:
          0 10px 30px rgba(0,0,0,0.06),
          0 30px 60px rgba(0,0,0,0.04);
        }

        .service-icon{
          width:58px;
          height:58px;

          border-radius:18px;

          background:#000;

          color:#fff;

          display:flex;
          align-items:center;
          justify-content:center;

          font-size:22px;

          margin-bottom:28px;

          transition:.35s ease;
        }

        .service-card:hover .service-icon{
          transform:scale(1.08) rotate(4deg);
        }

        .service-card h2{
          font-size:2rem;

          line-height:1;

          color:#111;

          margin-bottom:20px;
        }

        .service-card h2 span{
          display:block;
        }

        .service-line{
          width:100%;
          height:1px;

          background:#d8d8d8;

          margin-bottom:20px;
        }

        .service-card p{
          color:#666;

          font-size:.96rem;

          line-height:1.9;

          flex:1;

          font-family:'Inter', sans-serif;
        }

        .service-card a{
          margin-top:24px;

          text-decoration:none;

          color:#111;

          font-size:.76rem;

          font-weight:700;

          letter-spacing:1px;

          transition:.3s ease;

          font-family:'Inter', sans-serif;
        }

        .service-card:hover a{
          transform:translateX(4px);
        }

        /* ANIMATIONS */

        @keyframes heroReveal{

          0%{
            opacity:0;
            transform:translateY(50px) scale(.96);
          }

          100%{
            opacity:1;
            transform:translateY(0) scale(1);
          }
        }

        @keyframes cardReveal{

          0%{
            opacity:0;
            transform:translateY(60px);
          }

          100%{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes fadeUp{

          0%{
            opacity:0;
            transform:translateY(20px);
          }

          100%{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes leftReveal{

          0%{
            opacity:0;
            transform:translateX(-40px);
          }

          100%{
            opacity:1;
            transform:translateX(0);
          }
        }

        /* TABLET */

        @media(max-width:1200px){

          .services-section{
            flex-direction:column;
          }

          .services-left{
            width:100%;
          }

          .services-grid{
            width:100%;

            grid-template-columns:repeat(2,1fr);
          }

          .services-desc{
            max-width:600px;
          }
        }

        /* MOBILE */

        @media(max-width:700px){

          .services-section{
            padding:50px 20px;
          }

          .services-grid{
            grid-template-columns:1fr;
          }

          .service-card{
            min-height:auto;
          }

          .services-heading{
            font-size:68px;
          }

          .services-btn{
            width:100%;
          }
        }

      `}</style>
    </>
  );
}
