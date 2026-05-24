import React from "react";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiNetlify,
  SiVercel,
  SiPostman,
  SiRedux,
  SiMysql,
  SiCanva,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

export default function TechStack() {

  const frontend = [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
  ];

  const backend = [
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
  ];

  const tools = [
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
    {
      icon: <VscCode />,
      name: "VS Code",
    },
  ];

  const designTools = [
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiCanva />,
      name: "Canva",
    },
  ];

  const deployment = [
    {
      icon: <SiVercel />,
      name: "Vercel",
    },
    {
      icon: <SiNetlify />,
      name: "Netlify",
    },
  ];

  return (
    <>
      <section className="tech-section">

        {/* BACKGROUND */}

        <div className="dot-grid"></div>
        <div className="big-circle"></div>

        <div className="blur blur-1"></div>
        <div className="blur blur-2"></div>

        {/* FLOATING CARD */}

        <div className="floating-card">

          <div className="card-icon">
            ✦
          </div>

          <p
            className="font-container"
            style={{ fontSize: "1.5rem" }}
          >
            The right tools
            <br />
            make ideas powerful.
            <br />
            I choose the best to
            <br />
            build the best.
          </p>

        </div>

        {/* HEADER */}

        <div className="tech-header">

          <div className="toolkit-tag font-container">
            ✦ MY TOOLKIT
          </div>

          <h1 className="font-container">
            Tech Stack
          </h1>

          <p>
            I use modern technologies and industry best
            practices to build high-performance,
            scalable and secure web applications.
          </p>

          <div className="line"></div>

        </div>

        {/* STACK GRID */}

        <div className="stack-wrapper">

          {/* FRONTEND */}

          <div className="stack-group font-container">

            <div className="group-title">
              <span>⌘</span> FRONTEND
            </div>

            <div className="card-grid">

              {frontend.map((item, index) => (
                <div
                  className="tech-card"
                  key={index}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >

                  <div className="tech-icon">
                    {item.icon}
                  </div>

                  <h3>
                    {item.name}
                  </h3>

                </div>
              ))}

            </div>

          </div>

          {/* BACKEND */}

          <div className="stack-group">

            <div className="group-title font-container">
              <span>◫</span> BACKEND
            </div>

            <div className="card-grid">

              {backend.map((item, index) => (
                <div
                  className="tech-card"
                  key={index}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >

                  <div className="tech-icon">
                    {item.icon}
                  </div>

                  <h3>
                    {item.name}
                  </h3>

                </div>
              ))}

            </div>

          </div>

          {/* TOOLS */}

          <div className="stack-group">

            <div className="group-title font-container">
              <span>✦</span> TOOLS & LIBRARIES
            </div>

            <div className="card-grid">

              {tools.map((item, index) => (
                <div
                  className="tech-card"
                  key={index}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >

                  <div className="tech-icon">
                    {item.icon}
                  </div>

                  <h3>
                    {item.name}
                  </h3>

                </div>
              ))}

            </div>

          </div>

          {/* DESIGN */}

          <div className="stack-group">

            <div className="group-title font-container">
              <span>✎</span> WEB DESIGN
            </div>

            <div className="card-grid">

              {designTools.map((item, index) => (
                <div
                  className="tech-card"
                  key={index}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >

                  <div className="tech-icon">
                    {item.icon}
                  </div>

                  <h3>
                    {item.name}
                  </h3>

                </div>
              ))}

            </div>

          </div>

          {/* DEPLOYMENT */}

          <div className="stack-group">

            <div className="group-title font-container">
              <span>⬢</span> DEPLOYMENT
            </div>

            <div className="card-grid">

              {deployment.map((item, index) => (
                <div
                  className="tech-card"
                  key={index}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >

                  <div className="tech-icon">
                    {item.icon}
                  </div>

                  <h3>
                    {item.name}
                  </h3>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}

        <div className="bottom-bar">

          <div className="bottom-left">

            <div className="small-icon">
              ✦
            </div>

            <p>
              I’m always learning and exploring
              new technologies to build better.
            </p>

          </div>

          <div className="bottom-right">

            <span>
              Open to work with exciting
              tech and great people.
            </span>

            <button>
              LET'S BUILD TOGETHER ↗
            </button>

          </div>

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
          font-family:'Inter',sans-serif;
          background:#D9D9D2;
        }

        .tech-section{
          width:100%;
          min-height:100vh;
          background:#D9D9D2;
          padding:90px 5%;
          position:relative;
          overflow:hidden;
        }

        /* BLURS */

        .blur{
          position:absolute;
          border-radius:50%;
          filter:blur(120px);
          z-index:0;
        }

        .blur-1{
          width:300px;
          height:300px;
          background:#efe4d6;
          top:120px;
          left:-80px;
        }

        .blur-2{
          width:240px;
          height:240px;
          background:#eadfd1;
          right:-50px;
          bottom:100px;
        }

        /* DOT GRID */

        .dot-grid{
          position:absolute;
          top:60px;
          right:60px;
          width:120px;
          height:120px;

          background-image:
          radial-gradient(#bca892 1.6px, transparent 1.6px);

          background-size:22px 22px;

          animation:floatDots 6s ease-in-out infinite;
        }

        /* BIG CIRCLE */

        .big-circle{
          position:absolute;
          width:480px;
          height:480px;
          border:1.5px solid #d9cfc2;
          border-radius:50%;
          top:20px;
          right:260px;
          animation:rotateCircle 30s linear infinite;
        }

        /* FLOATING CARD */

        .floating-card{
          position:absolute;
          top:120px;
          right:170px;
          background:#F8F4EF;
          padding:30px;
          border-radius:30px;

          display:flex;
          align-items:flex-start;
          gap:20px;

          box-shadow:
          0 10px 30px rgba(0,0,0,.04);

          z-index:10;

          animation:floatCard 5s ease-in-out infinite;
        }

        .card-icon{
          width:60px;
          height:60px;
          border-radius:50%;
          background:#EFE5D9;

          display:flex;
          align-items:center;
          justify-content:center;

          font-size:1.3rem;
        }

        .floating-card p{
          font-size:1.05rem;
          line-height:1.8;
          color:#333;
        }

        /* HEADER */

        .tech-header{
          max-width:700px;
          position:relative;
          z-index:20;
        }

        .toolkit-tag{
          width:fit-content;
          padding:14px 24px;
          border-radius:999px;
          background:#E8DDD0;

          font-size:.9rem;
          font-weight:700;
          letter-spacing:2px;

          margin-bottom:30px;

          animation:fadeUp .8s ease;
        }

        .tech-header h1{
          font-size:clamp(60px,8vw,120px);
          line-height:.92;
          letter-spacing:-4px;
          color:#111;
          font-weight:900;
          animation:fadeUp 1s ease;
        }

        .tech-header p{
          margin-top:25px;
          max-width:580px;

          font-size:1.2rem;
          line-height:1.9;

          color:#555;

          animation:fadeUp 1.2s ease;
        }

        .line{
          width:320px;
          height:2px;
          background:#b99d84;
          margin-top:35px;
          position:relative;
        }

        .line::after{
          content:"✦";
          position:absolute;
          right:-10px;
          top:-14px;
          color:#b99d84;
        }

        /* STACK */

        .stack-wrapper{
          margin-top:80px;

          display:grid;
          grid-template-columns:repeat(2,1fr);

          gap:50px;

          position:relative;
          z-index:10;
        }

        .group-title{
          display:flex;
          align-items:center;
          gap:14px;

          margin-bottom:25px;

          font-size:1rem;
          font-weight:800;
          letter-spacing:2px;

          color:#111;
        }

        .group-title span{
          width:42px;
          height:42px;
          border-radius:50%;
          background:#EFE5D9;

          display:flex;
          align-items:center;
          justify-content:center;
        }

        /* GRID */

        .card-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
          gap:20px;
        }

        .tech-card{
          background:#F8F4EF;
          border:1px solid #eee3d6;
          border-radius:24px;

          padding:35px 20px;

          text-align:center;

          transition:.4s cubic-bezier(.22,1,.36,1);

          cursor:pointer;

          animation:cardReveal .8s ease both;
        }

        .tech-card:hover{
          transform:
          translateY(-10px)
          scale(1.03);

          box-shadow:
          0 20px 40px rgba(0,0,0,.08);
        }

        .tech-icon{
          font-size:3rem;
          color:#111;
          margin-bottom:22px;
          transition:.35s ease;
        }

        .tech-card:hover .tech-icon{
          transform:scale(1.15) rotate(5deg);
        }

        .tech-card h3{
          font-size:1rem;
          font-weight:700;
          color:#111;
        }

        /* BOTTOM BAR */

        .bottom-bar{
          margin-top:80px;

          background:#F8F4EF;

          border:1px solid #eee3d6;

          border-radius:32px;

          padding:35px 40px;

          display:flex;
          justify-content:space-between;
          align-items:center;

          gap:40px;

          flex-wrap:wrap;
        }

        .bottom-left{
          display:flex;
          align-items:center;
          gap:20px;
        }

        .small-icon{
          width:58px;
          height:58px;

          min-width:58px;
          min-height:58px;

          flex-shrink:0;

          border-radius:50%;

          background:#EFE5D9;

          display:flex;
          align-items:center;
          justify-content:center;

          font-size:1.2rem;

          animation:pulse 3s ease infinite;
        }

        .bottom-left p{
          max-width:380px;

          font-size:1rem;
          line-height:1.8;

          color:#444;
        }

        .bottom-right{
          display:flex;
          align-items:center;
          gap:30px;
          flex-wrap:wrap;
        }

        .bottom-right span{
          max-width:260px;
          line-height:1.7;
          color:#444;
        }

        .bottom-right button{
          background:#111;
          color:#fff;

          border:none;

          padding:18px 32px;

          border-radius:999px;

          font-size:.85rem;
          font-weight:700;
          letter-spacing:1px;

          cursor:pointer;

          transition:.35s ease;
        }

        .bottom-right button:hover{
          transform:translateY(-5px);

          box-shadow:
          0 15px 35px rgba(0,0,0,.15);
        }

        /* ANIMATIONS */

        @keyframes cardReveal{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes floatCard{
          0%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-12px);
          }
          100%{
            transform:translateY(0px);
          }
        }

        @keyframes rotateCircle{
          from{
            transform:rotate(0deg);
          }
          to{
            transform:rotate(360deg);
          }
        }

        @keyframes floatDots{
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

        @keyframes pulse{
          0%{
            transform:scale(1);
          }
          50%{
            transform:scale(1.08);
          }
          100%{
            transform:scale(1);
          }
        }

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

        /* RESPONSIVE */

        @media(max-width:1200px){

          .stack-wrapper{
            grid-template-columns:1fr;
          }

          .floating-card{
            position:relative;
            top:auto;
            right:auto;

            margin-top:50px;
            margin-bottom:40px;

            width:fit-content;
          }

          .big-circle{
            display:none;
          }
        }

        @media(max-width:768px){

          .tech-section{
            padding:60px 20px;
          }

          .tech-header h1{
            font-size:68px;
          }

          .card-grid{
            grid-template-columns:repeat(2,1fr);
          }

          .bottom-bar{
            padding:30px 25px;
            border-radius:26px;
          }

          .bottom-left{
            width:100%;
            align-items:flex-start;
          }

          .small-icon{
            min-width:58px;
            min-height:58px;
            flex-shrink:0;
          }

          .bottom-left p{
            font-size:.95rem;
            line-height:1.7;
          }

          .bottom-right{
            width:100%;
            flex-direction:column;
            align-items:flex-start;
            gap:20px;
          }

          .bottom-right span{
            max-width:100%;
            font-size:.95rem;
            line-height:1.7;
          }

          .bottom-right button{
            width:100%;
          }

          .floating-card{
            width:100%;
          }

          .dot-grid{
            display:none;
          }
        }

        @media(max-width:520px){

          .tech-header h1{
            font-size:56px;
          }

          .card-grid{
            grid-template-columns:1fr 1fr;
          }

          .tech-card{
            padding:28px 16px;
          }

          .tech-icon{
            font-size:2.4rem;
          }

          .bottom-bar{
            padding:24px 18px;
            border-radius:22px;
          }

          .bottom-left{
            gap:14px;
          }

          .small-icon{
            min-width:52px;
            min-height:52px;
            font-size:1rem;
          }

          .bottom-left p{
            font-size:.9rem;
          }

          .bottom-right span{
            font-size:.9rem;
          }

          .bottom-right button{
            padding:16px 22px;
            font-size:.8rem;
          }
        }

      `}</style>
    </>
  );
}