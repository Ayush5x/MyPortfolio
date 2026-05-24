import React, { useState } from "react";

import {
  FiArrowUpRight,
  FiSend,
  FiUser,
  FiMail,
  FiGrid,
  FiEdit3,
  FiZap,
  FiTarget,
  FiShield,
} from "react-icons/fi";

import { FaHandshake } from "react-icons/fa";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;

    setError("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.projectType ||
      !formData.message
    ) {
      setError("Please fill all the fields.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(
        "https://myportfolio-v2-4ngb.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 2500);
    } catch (err) {
      setError(err.message || "Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="cta-section">
        {/* DECOR */}

        <div className="circle-left"></div>

        <div className="dots-top">
          {[...Array(16)].map((_, i) => (
            <span key={i}></span>
          ))}
        </div>

        <div className="dots-bottom">
          {[...Array(12)].map((_, i) => (
            <span key={i}></span>
          ))}
        </div>

        <div className="star-top">✦</div>

        <div className="floating-circle">✦</div>

        {/* MAIN GRID */}

        <div className="cta-grid">
          {/* LEFT */}

          <div className="cta-left">
            <div className="tag font-container">✦ LET’S WORK TOGETHER</div>

            <h1 className="font-container">
              Have an idea?
              <br />
              Let’s build
              <br />
              something <span>amazing.</span>
            </h1>

            <p>
              I’m always excited to collaborate on meaningful projects and help
              turn ideas into real digital solutions that make an impact.
            </p>

            {/* BUTTONS */}

            <div className="button-group">
              <button className="primary-btn">
                START A PROJECT
                <FiArrowUpRight />
              </button>

              <button className="secondary-btn">
                VIEW MY WORK
                <FiArrowUpRight />
              </button>
            </div>
          </div>

          {/* RIGHT */}

          <div className="form-card">
            <div className="form-top">
              <div className="mail-icon">
                <FiMail />
              </div>

              <div>
                <h2 className="font-container" style={{ fontSize: "2rem" }}>
                  Let’s start a conversation!
                </h2>

                <p>Fill out the form and I’ll get back to you soon.</p>
              </div>
            </div>

            {/* FORM */}

            <div className="form-grid">
              <div className="input-box">
                <FiUser />

                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="input-box">
                <FiMail />

                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-box full">
              <FiGrid />

              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
              >
                <option value="">Project Type</option>

                <option value="Portfolio Website">
                  Portfolio Website
                </option>

                <option value="Business Website">
                  Business Website
                </option>

                <option value="Full Stack App">
                  Full Stack App
                </option>
              </select>
            </div>

            <div className="textarea-box">
              <FiEdit3 />

              <textarea
                rows="6"
                placeholder="Tell me about your idea..."
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* ERROR */}

            {error && <p className="error-message">{error}</p>}

            {/* SUBMIT BUTTON */}

            <button
              className={`send-btn ${isSubmitting ? "loading" : ""} ${
                isSubmitted ? "success" : ""
              }`}
              onClick={handleSubmit}
            >
              {isSubmitting ? (
                <>
                  <span className="loader"></span>
                  SENDING...
                </>
              ) : isSubmitted ? (
                <>✓ MESSAGE SENT</>
              ) : (
                <>
                  SEND MESSAGE
                  <FiSend />
                </>
              )}
            </button>
          </div>
        </div>

        {/* FEATURES */}

        <div className="feature-wrapper">
          {/* ITEM */}

          <div className="feature-item" style={{ width: "100%" }}>
            <div className="feature-icon">
              <FiZap />
            </div>

            <div>
              <h3 className="font-container" style={{ fontSize: "2rem" }}>
                Fast Response
              </h3>

              <p>I’ll get back to you as soon as possible.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <FiShield />
            </div>

            <div>
              <h3 className="font-container" style={{ fontSize: "2rem" }}>
                Quality Focused
              </h3>

              <p>High quality work that delivers real value.</p>
            </div>
          </div>

          {/* ITEM */}

          <div className="feature-item">
            <div className="feature-icon">
              <FiTarget />
            </div>

            <div>
              <h3 className="font-container" style={{ fontSize: "2rem" }}>
                Clear Communication
              </h3>

              <p>We’ll keep everything clear and transparent.</p>
            </div>
          </div>

          {/* ITEM */}

          <div className="feature-item">
            <div className="feature-icon">
              <FaHandshake />
            </div>

            <div>
              <h3 className="font-container" style={{ fontSize: "2rem" }}>
                Reliable Partner
              </h3>

              <p>I’m committed to your success.</p>
            </div>
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

        .cta-section{
          width:100%;
          min-height:100vh;

          padding:70px 5%;

          background:#D9D9D2;

          position:relative;
        }

        /* MAIN BOX */

        .cta-section::before{
          content:"";

          position:absolute;

          inset:50px;

          background:#D9D9D2;

          border:1px solid #ddd3c8;

          border-radius:40px;

          z-index:0;
        }

        /* GRID */

        .cta-grid{
          position:relative;

          z-index:5;

          display:grid;

          grid-template-columns:1fr 560px;

          gap:80px;

          align-items:center;

          padding:90px 90px 0;
        }

        /* LEFT */

        .tag{
          display:inline-flex;

          align-items:center;

          gap:12px;

          padding:16px 28px;

          border-radius:999px;

          border:1.5px solid #cdb79e;

          font-size:.92rem;

          font-weight:700;

          letter-spacing:2px;

          margin-bottom:40px;
        }

        .cta-left h1{
          font-size:clamp(70px,7vw,110px);

          line-height:.93;

          letter-spacing:-4px;

          font-weight:900;

          color:#111;
        }

        .cta-left h1 span{
          color:#b18159;

          font-style:italic;

          font-family:serif;

          font-weight:500;
        }

        .cta-left p{
          margin-top:35px;

          max-width:560px;

          font-size:1.2rem;

          line-height:1.9;

          color:#555;
        }

        /* BUTTONS */

        .button-group{
          margin-top:50px;

          display:flex;

          gap:22px;

          flex-wrap:wrap;
        }

        .primary-btn,
        .secondary-btn{
          height:68px;

          padding:0 38px;

          border-radius:999px;

          font-size:.92rem;

          font-weight:700;

          letter-spacing:1px;

          display:flex;
          align-items:center;
          gap:14px;

          cursor:pointer;

          transition:.35s ease;
        }

        .primary-btn{
          background:#050505;

          color:#fff;

          border:none;
        }

        .secondary-btn{
          background:transparent;

          color:#111;

          border:1.5px solid #111;
        }

        .primary-btn:hover,
        .secondary-btn:hover{
          transform:translateY(-5px);
        }

        /* FORM */

        .form-card{
          background:#F7F3EE;

          border:1px solid #e2d8cd;

          border-radius:36px;

          padding:42px;

          position:relative;

          z-index:5;
        }

        .form-top{
          display:flex;

          align-items:flex-start;

          gap:20px;

          margin-bottom:35px;
        }

        .mail-icon{
          width:68px;
          height:68px;

          border-radius:50%;

          background:#ECE2D7;

          display:flex;
          align-items:center;
          justify-content:center;

          font-size:1.6rem;
        }

        .form-top h2{
          font-size:2rem;

          font-weight:800;

          color:#111;
        }

        .form-top p{
          margin-top:8px;

          color:#666;

          line-height:1.7;
        }

        /* INPUTS */

        .form-grid{
          display:grid;

          grid-template-columns:1fr 1fr;

          gap:18px;

          margin-bottom:18px;
        }

        .input-box,
        .textarea-box{
          border:1px solid #ddd1c4;

          border-radius:20px;

          background:transparent;

          display:flex;

          gap:14px;

          padding:0 22px;

          color:#777;

          transition:.35s ease;
        }

        .input-box:hover,
        .textarea-box:hover{
          border-color:#b18159;
        }

        .input-box{
          height:68px;

          align-items:center;
        }

        .input-box.full{
          margin-bottom:18px;
        }

        .textarea-box{
          padding-top:22px;

          margin-bottom:25px;
        }

        .input-box input,
        .input-box select,
        .textarea-box textarea{
          width:100%;

          border:none;

          outline:none;

          background:transparent;

          font-size:1rem;

          color:#444;

          font-family:'Inter',sans-serif;
        }

        .textarea-box textarea{
          resize:none;
        }

        .error-message{
          color:#d11a2a;

          margin-bottom:18px;

          font-size:.95rem;

          font-weight:600;
        }

        /* SEND */

        .send-btn{
          width:100%;

          height:72px;

          border:none;

          border-radius:999px;

          background:#050505;

          color:#fff;

          font-size:.95rem;

          font-weight:700;

          letter-spacing:1px;

          display:flex;
          align-items:center;
          justify-content:center;

          gap:14px;

          cursor:pointer;

          transition:.35s ease;
        }

        .send-btn:hover{
          transform:translateY(-4px);
        }

        /* LOADER */

        .loader{
          width:20px;
          height:20px;

          border:2px solid rgba(255,255,255,.35);
          border-top:2px solid #fff;

          border-radius:50%;

          animation:spin .8s linear infinite;
        }

        /* BUTTON STATES */

        .send-btn.loading{
          pointer-events:none;

          opacity:.95;

          transform:scale(.98);
        }

        .send-btn.success{
          background:#1d9b5f;

          box-shadow:
          0 10px 30px rgba(29,155,95,.25);
        }

        /* FEATURES */

        .feature-wrapper{
          position:relative;

          z-index:5;

          margin:70px 90px 0;

          background:#F7F3EE;

          border:1px solid #e2d8cd;

          border-radius:34px;

          padding:40px;

          display:grid;

          grid-template-columns:repeat(4,1fr);

          gap:25px;
        }

        .feature-item{
          display:flex;

          align-items:flex-start;

          gap:18px;
        }

        .feature-icon{
          min-width:72px;
          height:72px;

          border-radius:50%;

          background:#ECE2D7;

          display:flex;
          align-items:center;
          justify-content:center;

          font-size:2rem;
        }

        .feature-item h3{
          font-size:1.5rem;

          font-weight:800;

          color:#111;
        }

        .feature-item p{
          margin-top:10px;

          line-height:1.8;

          color:#666;
        }

        /* DECOR */

        .circle-left{
          position:absolute;

          width:260px;
          height:260px;

          border:1px solid #ceb8a2;

          border-radius:50%;

          left:-120px;
          top:220px;
        }

        .circle-left::after{
          content:"";

          position:absolute;

          width:18px;
          height:18px;

          border-radius:50%;

          background:#b9906a;

          right:10px;
          top:50%;
        }

        .dots-top{
          position:absolute;

          top:85px;
          left:50%;

          display:grid;

          grid-template-columns:repeat(4,12px);

          gap:12px;

          z-index:5;
        }

        .dots-top span,
        .dots-bottom span{
          width:5px;
          height:5px;

          border-radius:50%;

          background:#b9906a;
        }

        .dots-bottom{
          position:absolute;

          left:70px;
          bottom:130px;

          display:grid;

          grid-template-columns:repeat(4,12px);

          gap:12px;

          z-index:5;
        }

        .star-top{
          position:absolute;

          top:140px;
          left:47%;

          font-size:2rem;

          z-index:5;
        }

        .floating-circle{
          position:absolute;

          right:110px;
          top:380px;

          width:110px;
          height:110px;

          border-radius:50%;

          background:#DDBA94;

          border:12px solid #F3EFEA;

          display:flex;
          align-items:center;
          justify-content:center;

          font-size:2rem;

          z-index:5;
        }

        /* ANIMATION */

        @keyframes spin{
          from{
            transform:rotate(0deg);
          }
          to{
            transform:rotate(360deg);
          }
        }

        /* RESPONSIVE */

        @media(max-width:1300px){

          .cta-grid{
            grid-template-columns:1fr;

            padding:70px 50px 0;
          }

          .feature-wrapper{
            grid-template-columns:1fr 1fr;

            margin:60px 50px 0;
          }

          .floating-circle{
            display:none;
          }
        }

        @media(max-width:768px){

          .cta-section::before{
            inset:20px;
          }

          .cta-grid{
            padding:60px 30px 0;
          }

          .cta-left h1{
            font-size:62px;
          }

          .form-grid{
            grid-template-columns:1fr;
          }

          .feature-wrapper{
            grid-template-columns:1fr;

            margin:50px 30px 0;

            padding:30px;
          }

          .form-card{
            padding:28px;
          }

          .dots-top,
          .dots-bottom,
          .circle-left,
          .star-top{
            display:none;
          }
        }

        @media(max-width:520px){

          .cta-left h1{
            font-size:52px;
          }

          .button-group{
            flex-direction:column;
          }

          .primary-btn,
          .secondary-btn{
            width:100%;

            justify-content:center;
          }

          .feature-item{
            flex-direction:column;
          }

          .form-top{
            flex-direction:column;
          }
        }

      `}</style>
    </>
  );
}