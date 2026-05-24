import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import "../CSS/Hero.css";
import Resume from "../assets/AyushPatel-resume.pdf"

import profileImg from '../assets/Profile.png';

const Hero = () => {

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.body.style.overflowX = "";
    };
  }, []);

  const theme = {
    bg: '#D9D9D2',
    text: '#1C1C1C',
    subtleText: '#757575',
    sans: "'Inter', sans-serif"
  };

  const statItemStyle = {
    textAlign: 'right',
    marginBottom: '25px'
  };

  const statNumberStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    margin: 0,
    lineHeight: 1
  };

  const statLabelStyle = {
    fontFamily: theme.sans,
    fontSize: '0.75rem',
    color: theme.subtleText,
    margin: '3px 0 0 0',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (

    <section
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        width: '100%',
        minHeight: '100vh',
        margin: 0,
        padding: '0px 60px 40px 60px',
        display: 'flex',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr 1fr',
          gap: '40px',
          alignItems: 'center',
          width: '100%'
        }}
        className='hero-grid'
      >

        {/* LEFT CONTENT */}
        <div
          style={{
            maxWidth: '400px',
            position: 'relative',
            zIndex: 5
          }}
          className='hero-left'
        >

          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className='font-container'
            style={{
              fontSize: '1.7rem',
              margin: '120px 0 10px 0',
              fontWeight: '500'
            }}
          >
            Hey. I'm Ayush,
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className='font-container hero-title'
            style={{
              fontWeight: '900',
              lineHeight: '0.9',
              margin: '0 0 30px 0',
              letterSpacing: '-2px'
            }}
          >

            FULL STACK <br />

            <span
              style={{
                position: 'relative',
                zIndex: 10
              }}
            >
              DEVELOPE
              <span style={{ color: 'aliceblue' }}>
                R
              </span>
            </span>

          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{
              fontFamily: theme.sans,
              fontSize: '1rem',
              color: theme.subtleText,
              lineHeight: '1.7',
              margin: '0 0 40px 0'
            }}
            className='hero-description'
          >
            Building high-performance web applications with a focus on clean
            code and interactive user experiences.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{
              display: 'flex',
              gap: '15px',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
            className='hero-buttons'
          >

            {/* LETS TALK */}
            <motion.button
              whileHover={{
                y: -2,
                backgroundColor: 'transparent',
                color: theme.text,
                border: `1px solid ${theme.text}`
              }}
              whileTap={{ y: 0 }}
              transition={{
                duration: 0.25,
                ease: "easeOut"
              }}
              style={{
                fontFamily: theme.sans,
                backgroundColor: theme.text,
                color: '#fff',
                padding: '15px 30px',
                borderRadius: '30px',
                border: '1px solid transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1.2px'
              }}
              className='hero-btn'
            >

              Let's Talk

              <motion.span
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>

            </motion.button>

            {/* DOWNLOAD CV */}
            {/* DOWNLOAD CV */}
<motion.a
  href={Resume}
  download={Resume}
  whileHover={{
    y: -2,
    backgroundColor: theme.text,
    color: '#fff'
  }}
  whileTap={{ y: 0 }}
  transition={{
    duration: 0.25,
    ease: "easeOut"
  }}
  style={{
    fontFamily: theme.sans,
    backgroundColor: 'transparent',
    color: theme.text,
    padding: '15px 30px',
    borderRadius: '30px',
    border: `1px solid ${theme.text}`,
    cursor: 'pointer',
    fontSize: '0.8rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1.2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    textDecoration: 'none'
  }}
  className='hero-btn'
>

  <motion.span
    whileHover={{ y: 2 }}
    transition={{ duration: 0.2 }}
  >
    ↓
  </motion.span>

  Download CV

</motion.a>

          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeOut"
          }}
          whileHover={{ scale: 1.02 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            position: 'relative'
          }}
          className='hero-image-wrapper'
        >

          <div
            style={{
              borderRadius: '0% 0% 50% 50%',
              overflow: 'hidden',
              position: 'relative'
            }}
            className='hero-image-container'
          >

            <img
              src={profileImg}
              alt="Ayush Patel"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center'
              }}
            />

          </div>

        </motion.div>

        {/* STATS */}
        <div
          style={{
            paddingLeft: '30px',
            marginTop: '120px'
          }}
          className='hero-stats'
        >

          {[
            { value: "6+", label: "Months Experience" },
            { value: "#1", label: "Web War Winner" },
            { value: "4+", label: "Fullstack Projects" },
            { value: "MERN", label: "Core Competency" }
          ].map((item, i) => (

            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              whileHover={{ x: -6 }}
              className='font-container stat-item'
              style={{
                ...statItemStyle,
                marginBottom: i === 3 ? 0 : '25px'
              }}
            >

              <h3
                style={statNumberStyle}
                className='stat-number'
              >
                {item.value}
              </h3>

              <p style={statLabelStyle}>
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

      {/* RESPONSIVE CSS */}
      <style>{`

        .hero-title{
          font-size: 8rem;
        }

        .hero-image-container{
          position:relative;
          top:-30px;
          width: 550px;
          height: 650px;
          // max-height: 760px;
        }

        /* ========================= */
        /* LARGE LAPTOP */
        /* ========================= */

        @media (max-width: 1440px){

          .hero-title{
            font-size: 6.5rem;
          }

          .hero-image-container{
            width: 470px;
            height: 580px;
            // max-height: 680px;
          }
        }

        /* ========================= */
        /* TABLET RESPONSIVE */
        /* ========================= */

        @media (max-width: 1024px){

          section{
            padding: 0px 40px 50px 40px !important;
            align-items: flex-start !important;
          }

          .hero-grid{
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 20px !important;
          }

          /* IMAGE FIRST */
          .hero-image-wrapper{
            order: 1 !important;
            justify-content: center !important;
            align-items: flex-start !important;
            margin-top: 0 !important;
          }

          /* TEXT SECOND */
          .hero-left{
            order: 2 !important;
            max-width: 100% !important;
            margin: 0 auto;
          }

          /* STATS THIRD */
          .hero-stats{
            order: 3 !important;
            padding-left: 0 !important;
            margin-top: 0 !important;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: 20px;
            width: 100%;
          }

          .stat-item{
            text-align: center !important;
            margin-bottom: 0 !important;
          }

          .hero-buttons{
            justify-content: center;
          }

          .hero-title{
            font-size: 5.2rem;
          }

          .hero-image-container{
            width: 420px;
            height: 520px;
            max-height: unset;
          }

          .stat-number{
            font-size: 2rem !important;
          }

          .hero-left p:first-child{
            margin-top: 0 !important;
          }
        }

        /* ========================= */
        /* MOBILE RESPONSIVE */
        /* ========================= */

        @media (max-width: 768px){

          section{
            padding: 0px 20px 40px 20px !important;
            align-items: flex-start !important;
          }

          .hero-grid{
            gap: 30px !important;
          }

          /* IMAGE FIRST */
          .hero-image-wrapper{
            order: 1 !important;
            justify-content: center !important;
            align-items: flex-start !important;
            margin-top: 0 !important;
          }

          /* TEXT SECOND */
          .hero-left{
            order: 2 !important;
          }

          /* STATS THIRD */
          .hero-stats{
            order: 3 !important;
            grid-template-columns: 1fr;
            gap: 25px;
            padding-left: 0 !important;
            margin-top: 0 !important;
          }

          .hero-title{
            font-size: 3.5rem;
            line-height: 1;
            letter-spacing: -1px;
          }

          .hero-description{
            font-size: 0.95rem !important;
          }

          .hero-buttons{
            flex-direction: column;
            width: 100%;
            justify-content: center;
          }

          .hero-btn{
            width: 100%;
          }

          .hero-image-container{
            width: 100%;
            max-width: 320px;
            height: 420px;
          }

          .stat-number{
            font-size: 1.8rem !important;
          }

          .hero-left p:first-child{
            margin-top: 0 !important;
          }
        }

        /* ========================= */
        /* SMALL MOBILE */
        /* ========================= */

        @media (max-width: 480px){

          .hero-title{
            font-size: 2.8rem;
          }

          .hero-image-container{
            max-width: 260px;
            height: 340px;
          }

          .hero-btn{
            padding: 14px 20px !important;
            font-size: 0.72rem !important;
          }
        }

      `}</style>

    </section>
  );
};

export default Hero;