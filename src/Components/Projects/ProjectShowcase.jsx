import React, { useEffect, useState } from "react";
import { projects } from "../../data/project";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { style } from "framer-motion/client";

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  const currentProject = projects[activeProject];

  const nextSlide = () => {
    setActiveImage((prev) =>
      prev === currentProject.images.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveImage((prev) =>
      prev === 0
        ? currentProject.images.length - 1
        : prev - 1
    );
  };

  const switchProject = (index) => {
    setActiveProject(index);
    setActiveImage(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [activeProject]);

  return (
    <>
      <style>{`

      *{
        box-sizing:border-box;
      }

      .project-showcase{
        width:100%;
        background:#d8d6cf;
        padding:120px 0;
        overflow:hidden;
        animation:sectionFade 1.2s ease;
      }

      @keyframes sectionFade{
        from{
          opacity:0;
          transform:translateY(40px);
        }
        to{
          opacity:1;
          transform:translateY(0);
        }
      }

      .showcase-container{
        width:100%;
        max-width:1600px;
        margin:auto;
        padding:0 40px;
      }

      /* HEADER */

      .showcase-header{
        display:flex;
        justify-content:space-between;
        align-items:flex-end;
        gap:60px;
        margin-bottom:60px;
      }

      .showcase-left{
        max-width:820px;
      }

      .showcase-subtitle{
        font-size:12px;
        letter-spacing:.35em;
        color:#8a8174;
        margin-bottom:18px;
      }

      .showcase-title{
        font-size:110px;
        line-height:.88;
        font-weight:900;
        color:#111;
        text-transform:uppercase;
      }

      .showcase-description{
        max-width:470px;
        font-size:18px;
        line-height:1.9;
        color:#666;
      }

      /* PROJECT BUTTONS */

      .project-tabs{
        display:flex;
        flex-wrap:wrap;
        gap:16px;
        margin-bottom:45px;
      }

      .project-tab{
        padding:15px 24px;
        border-radius:999px;
        border:1px solid #b8b0a5;
        background:transparent;
        cursor:pointer;
        display:flex;
        align-items:center;
        gap:14px;
        transition:
        transform .35s ease,
        background .35s ease,
        color .35s ease,
        border .35s ease;
        color:#111;
        font-size:14px;
        font-weight:600;
        position:relative;
        overflow:hidden;
      }

      .project-tab::before{
        content:"";
        position:absolute;
        inset:0;
        background:#111;
        transform:translateY(100%);
        transition:.4s ease;
        z-index:0;
      }

      .project-tab span{
        position:relative;
        z-index:2;
        opacity:.55;
        font-size:12px;
      }

      .project-tab:hover::before{
        transform:translateY(0);
      }

      .project-tab:hover{
        color:white;
        transform:translateY(-4px);
      }

      .project-tab:hover span{
        color:white;
      }

      .active-project{
        background:#111;
        color:white;
      }

      .active-project span{
        color:white;
      }

      /* MAIN GRID */

      .showcase-grid{
        display:grid;
        grid-template-columns:1.2fr .8fr;
        gap:26px;
        align-items:start;
      }

      /* LEFT SIDE */

      .preview-wrapper{
        position:relative;
        height:540px;
        border-radius:34px;
        overflow:hidden;
        background:#111;
        transition:.5s ease;
      }

      .preview-wrapper:hover{
        transform:translateY(-6px);
        box-shadow:
        0 30px 80px rgba(0,0,0,.18);
      }

      .preview-image{
        width:100%;
        height:100%;
        object-fit:contain;
        background:#111;
        padding:24px;
        animation:imageReveal .8s cubic-bezier(.19,1,.22,1);
        transition:transform .6s ease;
      }

      .preview-wrapper:hover .preview-image{
        transform:scale(1.02);
      }

      @keyframes imageReveal{
        from{
          opacity:0;
          transform:scale(1.04);
        }
        to{
          opacity:1;
          transform:scale(1);
        }
      }

      .preview-overlay{
        position:absolute;
        inset:0;
        background:linear-gradient(
          to top,
          rgba(0,0,0,.6),
          rgba(0,0,0,.05)
        );
        pointer-events:none;
      }

      /* TOP */

      .preview-top{
        position:absolute;
        top:22px;
        left:22px;
        right:22px;
        display:flex;
        justify-content:flex-end;
      }

      .slide-number{
        width:58px;
        height:58px;
        border-radius:50%;
        background:rgba(255,255,255,.08);
        border:1px solid rgba(255,255,255,.15);
        backdrop-filter:blur(10px);
        display:flex;
        justify-content:center;
        align-items:center;
        color:white;
        font-size:14px;
        font-weight:700;
      }

      /* BOTTOM */

      .preview-bottom{
        position:absolute;
        left:22px;
        right:22px;
        bottom:22px;
        display:flex;
        justify-content:space-between;
        align-items:flex-end;
        gap:20px;
      }

      /* THUMBNAILS */

      .thumbnail-wrapper{
        display:flex;
        gap:12px;
        flex-wrap:wrap;
      }

      .thumbnail-btn{
        width:68px;
        height:68px;
        border-radius:18px;
        overflow:hidden;
        border:2px solid transparent;
        cursor:pointer;
        opacity:.55;
        transition:.35s ease;
        padding:0;
        background:none;
      }

      .thumbnail-btn img{
        width:100%;
        height:100%;
        object-fit:cover;
        display:block;
      }

      .thumbnail-btn:hover{
        opacity:1;
        transform:translateY(-4px);
      }

      .active-thumbnail{
        border-color:white;
        opacity:1;
        transform:translateY(-4px);
      }

      /* CONTROLS */

      .slider-controls{
        display:flex;
        gap:12px;
      }

      .slider-controls button{
        width:52px;
        height:52px;
        border-radius:50%;
        border:none;
        cursor:pointer;
        background:white;
        color:#111;
        transition:.3s ease;
        display:flex;
        justify-content:center;
        align-items:center;
      }

      .slider-controls button:hover{
        transform:scale(1.08);
      }

      /* RIGHT SIDE */

      .project-details{
        display:flex;
        flex-direction:column;
        gap:18px;
      }

      /* DETAILS CARD */

      .details-card{
        background:#ebe7df;
        border:1px solid #c8c1b7;
        border-radius:28px;
        padding:28px;
        transition:
        transform .4s ease,
        box-shadow .4s ease;
      }

      .details-card:hover{
        transform:translateY(-6px);
        box-shadow:
        0 18px 40px rgba(0,0,0,.08);
      }

      .card-header{
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        margin-bottom:20px;
      }

      .card-header p{
        font-size:10px;
        letter-spacing:.28em;
        color:#8d8579;
        margin-bottom:10px;
      }

      .card-header h3{
        font-size:30px;
        line-height:1;
        color:#111;
        font-weight:800;
      }

      .arrow-btn{
        width:48px;
        height:48px;
        border-radius:50%;
        background:#111;
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-shrink:0;
      }

      .project-text{
        font-size:15px;
        line-height:1.85;
        color:#666;
      }

      /* TECH CARD */

      .tech-card{
        background:#111;
        border-radius:28px;
        padding:28px;
        color:white;
        border:1px solid rgba(255,255,255,.08);
        transition:
        transform .4s ease,
        box-shadow .4s ease;
      }

      .tech-card:hover{
        transform:translateY(-6px);
        box-shadow:
        0 18px 40px rgba(0,0,0,.18);
      }

      .tech-top{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:26px;
      }

      .tech-top p{
        font-size:10px;
        letter-spacing:.28em;
        color:rgba(255,255,255,.45);
        margin-bottom:10px;
      }

      .tech-top h3{
        font-size:28px;
        line-height:1;
        font-weight:700;
        color:white;
      }

      .tech-indicator{
        width:12px;
        height:12px;
        border-radius:50%;
        background:white;
        flex-shrink:0;
      }

      /* STACK */

      .tech-wrapper{
        display:flex;
        flex-wrap:wrap;
        gap:12px;
      }

      .tech-pill{
        padding:12px 18px;
        border-radius:999px;
        background:#1a1a1a;
        border:1px solid rgba(255,255,255,.08);
        color:white;
        font-size:13px;
        font-weight:500;
        transition:
        transform .35s ease,
        background .35s ease,
        color .35s ease;
        cursor:pointer;
      }

      .tech-pill:hover{
        background:white;
        color:black;
        transform:
        translateY(-4px)
        scale(1.03);
      }

      /* META */

      .project-meta{
        margin-top:26px;
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:14px;
      }

      .meta-box{
        background:#1a1a1a;
        border:1px solid rgba(255,255,255,.08);
        border-radius:18px;
        padding:18px;
      }

      .meta-box p{
        font-size:10px;
        letter-spacing:.22em;
        color:rgba(255,255,255,.4);
        margin-bottom:10px;
      }

      .meta-box h4{
        font-size:17px;
        color:white;
        font-weight:600;
      }

      /* ================================================= */
      /* LARGE LAPTOP */
      /* ================================================= */

      @media(max-width:1400px){

        .showcase-title{
          font-size:88px;
        }

        .showcase-grid{
          grid-template-columns:1fr;
        }

        .project-details{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:20px;
        }

      }

      /* ================================================= */
      /* TABLET */
      /* ================================================= */

      @media(max-width:1024px){

        .project-showcase{
          padding:100px 0;
        }

        .showcase-container{
          padding:0 28px;
        }

        .showcase-header{
          flex-direction:column;
          align-items:flex-start;
          gap:28px;
        }

        .showcase-title{
          font-size:72px;
        }

        .showcase-description{
          max-width:100%;
          font-size:17px;
        }

        .preview-wrapper{
          height:500px;
        }

        .project-details{
          grid-template-columns:1fr;
        }

      }

      /* ================================================= */
      /* MOBILE */
      /* ================================================= */

      @media(max-width:768px){

        .project-showcase{
          padding:80px 0;
        }

        .showcase-container{
          padding:0 18px;
        }

        .showcase-header{
          margin-bottom:40px;
          gap:22px;
        }

        .showcase-title{
          font-size:52px;
          line-height:.95;
        }

        .showcase-description{
          font-size:15px;
          line-height:1.8;
        }

        /* BUTTONS */

        .project-tabs{
          overflow-x:auto;
          flex-wrap:nowrap;
          padding-bottom:6px;
          scrollbar-width:none;
        }

        .project-tabs::-webkit-scrollbar{
          display:none;
        }

        .project-tab{
          min-width:max-content;
          padding:12px 18px;
          font-size:12px;
        }
    

        /* IMAGE */

        .preview-wrapper{
          height:420px;
          border-radius:24px;
        }

        .preview-image{
          padding:12px;
        }

        .preview-bottom{
          left:16px;
          right:16px;
          bottom:16px;
          flex-direction:column;
          align-items:flex-start;
          gap:14px;
        }

        /* THUMBNAILS */

        .thumbnail-wrapper{
          width:100%;
          overflow-x:auto;
          flex-wrap:nowrap;
          scrollbar-width:none;
        }

        .thumbnail-wrapper::-webkit-scrollbar{
          display:none;
        }

        .thumbnail-btn{
          min-width:52px;
          height:52px;
          border-radius:12px;
        }

        /* CONTROLS */

        .slider-controls button{
          width:44px;
          height:44px;
        }

        /* RIGHT SIDE */

        .details-card,
        .tech-card{
          padding:22px;
          border-radius:22px;
        }

        .card-header h3{
          font-size:24px;
        }

        .tech-top h3{
          font-size:22px;
        }

        .project-text{
          font-size:14px;
        }

        .project-meta{
          grid-template-columns:1fr;
        }

      }

      /* ================================================= */
      /* SMALL MOBILE */
      /* ================================================= */

      @media(max-width:480px){

        .showcase-title{
          font-size:42px;
        }

        .preview-wrapper{
          height:340px;
        }

        .details-card,
        .tech-card{
          padding:18px;
        }

        .card-header h3{
          font-size:20px;
        }

        .tech-top h3{
          font-size:20px;
        }

      }
      
      }
}
  
      `}</style>

      <section className="project-showcase">
        <div className="showcase-container">

          {/* HEADER */}

          <div className="showcase-header">

            <div className="showcase-left">

              <p className="showcase-subtitle font-container">
                FEATURED PROJECTS
              </p>

              <h2 className="showcase-title font-container">
                Crafted
                <br />
                Experiences
              </h2>

            </div>

            <p className="showcase-description">
              A collection of immersive digital products focused on clean
              architecture, responsive interfaces, smooth interactions,
              and premium user experiences.
            </p>

          </div>

          {/* PROJECT BUTTONS */}

          <div className="project-tabs">

            {projects.map((project, index) => (
              <button
                key={project.id}
                className={`project-tab btn-hover font-container ${
                  activeProject === index
                    ? "active-project"
                    : ""
                }`} 
                onClick={() => switchProject(index)}
                
              >
                <span>0{index + 1}</span>
                {project.title}
              </button>
            ))}

          </div>

          {/* MAIN GRID */}

          <div className="showcase-grid">

            {/* LEFT SIDE */}

            <div className="preview-wrapper">

              <img
                src={currentProject.images[activeImage]}
                alt={currentProject.title}
                className="preview-image"
              />

              <div className="preview-overlay"></div>

              {/* TOP */}

              <div className="preview-top">

                <div className="slide-number">
                  0{activeImage + 1}
                </div>

              </div>

              {/* BOTTOM */}

              <div className="preview-bottom">

                {/* THUMBNAILS */}

                <div className="thumbnail-wrapper">

                  {currentProject.images.map((img, index) => (
                    <button
                      key={index}
                      className={`thumbnail-btn ${
                        activeImage === index
                          ? "active-thumbnail"
                          : ""
                      }`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img
                        src={img}
                        alt={`${currentProject.title}-${index}`}
                      />
                    </button>
                  ))}

                </div>

                {/* CONTROLS */}

                <div className="slider-controls">

                  <button onClick={prevSlide}>
                    <ChevronLeft size={20} />
                  </button>

                  <button onClick={nextSlide}>
                    <ChevronRight size={20} />
                  </button>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="project-details">

              {/* OVERVIEW */}

              <div className="details-card">

                <div className="card-header">

                  <div>

                    <p>PROJECT OVERVIEW</p>

                    <h3 className="font-container">
                      {currentProject.title}
                    </h3>

                  </div>

                  <div className="arrow-btn ">
                    <ArrowUpRight size={18} />
                  </div>

                </div>

                <p className="project-text " >
                  {currentProject.description}
                </p>

              </div>

              {/* TECH STACK */}

              <div className="tech-card">

                <div className="tech-top">

                  <div>

                    <p>TECHNOLOGIES USED</p>

                    <h3 className="font-container" style={{fontSize:"2rem"}}>
                      Tech Stack
                    </h3>

                  </div>

                  <div className="tech-indicator"></div>

                </div>

                <div className="tech-wrapper">

                  {currentProject.techStack.map((tech, index) => (
                    <div
                      className="tech-pill"
                      key={index}
                    >
                      {tech}
                    </div>
                  ))}

                </div>

                {/* META */}

                <div className="project-meta">

                  <div className="meta-box">

                    <p>PROJECT TYPE</p>

                    <h4>
                      {currentProject.category}
                    </h4>

                  </div>

                  <div className="meta-box">

                    <p>SCREENSHOTS</p>

                    <h4>
                      0{currentProject.images.length}
                    </h4>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default ProjectShowcase;