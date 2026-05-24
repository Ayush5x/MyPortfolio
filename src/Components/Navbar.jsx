import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Prevent body scroll when menu open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { title: "Portfolio", href: "#portfolio" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
    { title: "Resume", href: "/resume.pdf" },
  ];

  return (
    <>
      {/* LOGO */}
      <div
        className="navbar-logo"
        style={{
          position: "fixed",
          top: "10px",
          left: "40px",
          zIndex: 3000,
          transition: "all 0.3s ease",
        }}
      >
        <img
          src="/AP_Logo.png"
          alt="Logo"
          style={{
            height: "60px",
            width: "auto",
            display: "block",
            objectFit: "contain",
          }}
        />
      </div>

      {/* NAVBAR */}
      <nav
        className="navbar-main"
        style={{
          position: "fixed",
          top: scrolled ? "10px" : "0px",
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "10px 40px",
          backgroundColor: "transparent",
          zIndex: 2000,
          boxSizing: "border-box",
          transition: "top 0.3s ease",
        }}
      >
        {/* MENU BUTTON */}
        <button
          onClick={toggleMenu}
          className="menu-button"
          style={{
            backgroundColor: "#1a1a1a",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "0.9rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            transition: "all 0.3s ease",
          }}
        >
          MENU
          <HiOutlineMenuAlt3 style={{ fontSize: "1.3rem" }} />
        </button>
      </nav>

      {/* SIDE MENU */}
      <div
        className="side-menu"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "320px",
          maxWidth: "100%",
          height: "100vh",
          backgroundColor: "#fff",
          zIndex: 4000,
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.45s cubic-bezier(0.77,0,0.175,1)",
          transform: isMenuOpen
            ? "translateX(0)"
            : "translateX(100%)",
          boxShadow: isMenuOpen
            ? "-10px 0 30px rgba(0,0,0,0.05)"
            : "none",
          boxSizing: "border-box",
        }}
      >
        {/* CLOSE BUTTON */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={toggleMenu}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "2rem",
              color: "#1a1a1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MdClose />
          </button>
        </div>

        {/* MENU LINKS */}
        <div
          className="menu-links"
          style={{
            marginTop: "60px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={toggleMenu}
              style={{
                fontSize: "1.2rem",
                textDecoration: "none",
                color: "#1a1a1a",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                transition: "0.3s ease",
                width: "fit-content",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateX(6px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateX(0px)";
              }}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>

      {/* OVERLAY */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.15)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            zIndex: 3000,
            transition: "0.3s ease",
          }}
        />
      )}

      {/* RESPONSIVE CSS */}
      <style>{`

        /* ========================= */
        /* LARGE LAPTOP */
        /* ========================= */

        @media (max-width: 1440px){

          .navbar-logo img{
            height: 55px !important;
          }

          .menu-button{
            padding: 11px 22px !important;
          }
        }

        /* ========================= */
        /* TABLET */
        /* ========================= */

        @media (max-width: 1024px){

          .navbar-main{
            padding: 10px 30px !important;
          }

          .navbar-logo{
            left: 30px !important;
          }

          .navbar-logo img{
            height: 52px !important;
          }

          .menu-button{
            padding: 11px 22px !important;
            font-size: 0.82rem !important;
          }

          .side-menu{
            width: 300px !important;
            padding: 35px !important;
          }

          .menu-links a{
            font-size: 1.05rem !important;
          }
        }

        /* ========================= */
        /* MOBILE */
        /* ========================= */

        @media (max-width: 768px){

          .navbar-main{
            padding: 15px 20px !important;
          }

          .navbar-logo{
            top: 12px !important;
            left: 20px !important;
          }

          .navbar-logo img{
            height: 48px !important;
          }

          .menu-button{
            padding: 10px 18px !important;
            font-size: 0.75rem !important;
            gap: 8px !important;
          }

          .side-menu{
            width: 100% !important;
            padding: 30px 25px !important;
          }

          .menu-links{
            margin-top: 40px !important;
            gap: 24px !important;
          }

          .menu-links a{
            font-size: 1rem !important;
          }
        }

        /* ========================= */
        /* SMALL MOBILE */
        /* ========================= */

        @media (max-width: 480px){

          .navbar-logo img{
            height: 42px !important;
          }

          .menu-button{
            padding: 9px 16px !important;
            font-size: 0.72rem !important;
          }

          .side-menu{
            padding: 25px 20px !important;
          }

          .menu-links a{
            font-size: 0.95rem !important;
          }
        }

      `}</style>
    </>
  );
};

export default Navbar;