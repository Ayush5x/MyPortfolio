import React from "react";

export default function HowIWork() {
  const steps = [
    {
      number: "01",
      title: "DISCOVER",
      icon: "⌕",
      desc: "I understand your goals, audience, and project requirements to define a clear roadmap.",
      position: "bottom",
    },
    {
      number: "02",
      title: "STRATEGIZE",
      icon: "◎",
      desc: "I plan the structure, features, and technical foundation for scalability.",
      position: "top",
    },
    {
      number: "03",
      title: "DESIGN",
      icon: "✎",
      desc: "I create clean, intuitive UI/UX systems focused on usability and aesthetics.",
      position: "bottom",
    },
    {
      number: "04",
      title: "DEVELOP",
      icon: "</>",
      desc: "I build performant and maintainable applications using modern technologies.",
      position: "top",
    },
    {
      number: "05",
      title: "TEST",
      icon: "☑",
      desc: "I rigorously test responsiveness, accessibility, and overall experience.",
      position: "bottom",
    },
    {
      number: "06",
      title: "LAUNCH",
      icon: "✦",
      desc: "I deploy confidently and provide support to ensure long-term product growth.",
      position: "top",
    },
  ];

  return (
    <>
      <section className="workflow-section">
        {/* TOP */}

        <div className="workflow-top">
          <div className="workflow-left">
            <p className="workflow-tag font-container">My Process</p>

            <h1 className="workflow-heading font-container">HOW I WORK</h1>

            <p className="workflow-desc">
              A clear roadmap that transforms ideas into polished digital
              experiences.
            </p>
          </div>

          <button className="workflow-btn">LET'S WORK TOGETHER →</button>
        </div>

        {/* ROADMAP */}

        <div className="roadmap-wrapper">
          {/* ROAD */}
          <div className="road"></div>

          {/* STEPS */}

          {steps.map((step, index) => (
            <div
              key={index}
              className={`step-card ${step.position}`}
              style={{
                left: `${index * 16.2}%`,
                animationDelay: `${index * 0.12}s`,
              }}
            >
              {/* NUMBER */}

              <div className="step-number">{step.number}</div>

              {/* CONNECTOR */}

              <div className="step-line"></div>

              {/* CONTENT */}

              <div className="step-content">
                <div className="step-icon">{step.icon}</div>

                <h2 className="font-container">{step.title}</h2>

                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`

    

        body{
        
          background:#D9D9D2;
          overflow-x:hidden;
          font-family:Arial, sans-serif;
        }

        .workflow-section{
          width:100%;
          min-height:100vh;
          
          

          background:#D9D9D2;

          padding:80px;

          overflow:hidden;
        }

        /* =========================
           TOP SECTION
        ========================= */

        .workflow-top{
          display:flex;
          justify-content:space-between;
          align-items:flex-start;

          margin-bottom:80px;
        }

        .workflow-left{
          max-width:650px;
        }

        .workflow-tag{
          font-size:1.6rem;
          margin-bottom:10px;
          color:#111;
        }

        .workflow-heading{
          font-size:clamp(62px,7vw,118px);

          line-height:.9;

          letter-spacing:-3px;

          color:#111;

          animation:headingReveal 1s ease;
        }

        .workflow-desc{
          margin-top:24px;

          max-width:380px;

          font-size:1rem;

          line-height:1.8;

          color:#666;

          font-family:'Inter', sans-serif;
        }

        .workflow-btn{
          background:#111;
          color:#fff;

          border:none;

          padding:17px 30px;

          border-radius:999px;

          font-size:.76rem;

          font-weight:700;

          letter-spacing:1px;

          cursor:pointer;

          transition:.35s ease;

          margin-top:10px;
        }

        .workflow-btn:hover{
          transform:translateY(-4px);

          box-shadow:
          0 10px 30px rgba(0,0,0,.12);
        }

        /* =========================
           ROADMAP WRAPPER
        ========================= */

        .roadmap-wrapper{
          position:relative;

          width:100%;

          height:620px;

          margin-top:40px;
        }

        /* =========================
           ROAD
        ========================= */

        .road{
          position:absolute;

          top:50%;
          left:0;

          width:100%;
          height:180px;

          transform:translateY(-50%);

          border-top:3px dashed #111;
          border-bottom:3px dashed #111;

          border-radius:200px;

          opacity:.18;
        }

        /* =========================
           STEP CARD
        ========================= */

        .step-card{
          position:absolute;

          width:200px;

          display:flex;
          flex-direction:column;
          align-items:center;

          animation:fadeUp .8s ease forwards;

          opacity:0;
        }

        .step-card.top{
          top:70px;
        }

        .step-card.bottom{
          bottom:30px;
        }

        /* =========================
           NUMBER
        ========================= */

        .step-number{
          width:48px;
          height:48px;

          background:#111;
          color:#fff;

          border-radius:50%;

          display:flex;
          align-items:center;
          justify-content:center;

          font-size:.95rem;
          font-weight:700;

          margin-bottom:14px;

          z-index:5;

          box-shadow:
          0 10px 25px rgba(0,0,0,.08);
        }

        /* =========================
           CONNECTOR LINE
        ========================= */

        .step-line{
          width:2px;
          height:54px;

          background:#111;

          opacity:.18;
        }

        /* =========================
           CARD CONTENT
        ========================= */

        .step-content{
          margin-top:18px;

          display:flex;
          flex-direction:column;
          align-items:center;

          text-align:center;
        }

        /* =========================
           ICON BOX
        ========================= */

        .step-icon{
          width:82px;
          height:82px;

          background:#F3F0EA;

          border-radius:22px;

          display:flex;
          align-items:center;
          justify-content:center;

          font-size:2rem;

          margin-bottom:18px;

          border:1px solid #e4dfd7;

          box-shadow:
          0 8px 24px rgba(0,0,0,.04);

          transition:.35s cubic-bezier(.22,1,.36,1);
        }

        .step-card:hover .step-icon{
          transform:translateY(-6px);
        }

        /* =========================
           TITLE
        ========================= */

        .step-content h2{
          font-size:1.6rem;

          line-height:1;

          color:#111;

          margin-bottom:14px;

          letter-spacing:-1px;
        }

        /* =========================
           DESCRIPTION
        ========================= */

        .step-content p{
          font-size:.92rem;

          line-height:1.8;

          color:#666;

          max-width:210px;

          font-family:'Inter', sans-serif;
        }

        /* =========================
           ANIMATIONS
        ========================= */

        @keyframes fadeUp{

          0%{
            opacity:0;
            transform:translateY(50px);
          }

          100%{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes headingReveal{

          0%{
            opacity:0;
            transform:translateY(30px);
          }

          100%{
            opacity:1;
            transform:translateY(0);
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media(max-width:1200px){

          .workflow-top{
            flex-direction:column;
            gap:30px;
          }

          .roadmap-wrapper{
            height:auto;

            display:grid;

            grid-template-columns:repeat(2,1fr);

            gap:60px;

            margin-top:40px;
          }

          .road{
            display:none;
          }

          .step-card{
            position:relative !important;

            width:100%;

            left:auto !important;
            top:auto !important;
            bottom:auto !important;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media(max-width:700px){

          .workflow-section{
            padding:60px 20px 100px;
          }

          .workflow-heading{
            font-size:72px;
          }

          .roadmap-wrapper{
            grid-template-columns:1fr;
          }

          .workflow-btn{
            width:100%;
          }

          .step-content h2{
            font-size:1.5rem;
          }

          .step-content p{
            font-size:.9rem;
          }
        }

      `}</style>
    </>
  );
}
