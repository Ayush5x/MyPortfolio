const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* -----------------------------
   MIDDLEWARE
----------------------------- */

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

/* -----------------------------
   HEALTH CHECK
----------------------------- */

app.get("/", (req, res) => {
  res.send("Backend server is running...");
});

/* -----------------------------
   CONTACT ROUTE
----------------------------- */

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, projectType, message } = req.body;

    /* -----------------------------
       VALIDATION
    ----------------------------- */

    if (!name || !email || !projectType || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    /* -----------------------------
       BREVO SMTP TRANSPORTER
    ----------------------------- */

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 2525,
      secure: false,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /* -----------------------------
       EMAIL TEMPLATE
    ----------------------------- */

    const mailOptions = {
      from: '"AyushPortfolio" <patelayush0920@gmail.com>',

      to: "ayushpatel1921@gmail.com",

      replyTo: email,

      subject: `New Project Inquiry - ${projectType}`,

      html: `
      
      <div style="
        background:#D9D9D2;
        padding:40px 20px;
        font-family:Inter,Arial,sans-serif;
      ">

        <div style="
          max-width:720px;
          margin:auto;
          background:#F7F3EE;
          border:1px solid #ddd2c5;
          border-radius:34px;
          overflow:hidden;
          box-shadow:0 10px 40px rgba(0,0,0,0.04);
        ">

          <!-- TOP HEADER -->

          <div style="
            padding:50px 45px 30px;
            border-bottom:1px solid #e7ddd2;
            background:#F7F3EE;
          ">

            <div style="
              display:inline-block;
              padding:14px 24px;
              border:1.5px solid #ccb49b;
              border-radius:999px;
              font-size:13px;
              letter-spacing:2px;
              font-weight:700;
              color:#111;
              margin-bottom:30px;
            ">
              ✦ NEW PROJECT INQUIRY
            </div>

            <h1 style="
              margin:0;
              font-size:58px;
              line-height:0.95;
              letter-spacing:-3px;
              color:#111;
              font-weight:900;
            ">
              New client
              <br/>
              inquiry
              <span style="
                color:#b18159;
                font-style:italic;
                font-family:Georgia,serif;
                font-weight:500;
              ">
                received.
              </span>
            </h1>

            <p style="
              margin-top:28px;
              font-size:18px;
              line-height:1.9;
              color:#5d5d5d;
              max-width:520px;
            ">
              Someone submitted your portfolio contact form.
              Here are the project details.
            </p>

          </div>

          <!-- CONTENT -->

          <div style="
            padding:45px;
          ">

            <!-- CARD -->

            <div style="
              background:#ECE2D7;
              border-radius:28px;
              padding:35px;
              border:1px solid #dbcdbf;
            ">

              <!-- NAME -->

              <div style="
                margin-bottom:28px;
              ">

                <p style="
                  margin:0 0 10px;
                  font-size:12px;
                  letter-spacing:2px;
                  font-weight:700;
                  color:#8a6b4f;
                  text-transform:uppercase;
                ">
                  Client Name
                </p>

                <h2 style="
                  margin:0;
                  font-size:28px;
                  color:#111;
                  font-weight:800;
                ">
                  ${name}
                </h2>

              </div>

              <!-- EMAIL -->

              <div style="
                margin-bottom:28px;
              ">

                <p style="
                  margin:0 0 10px;
                  font-size:12px;
                  letter-spacing:2px;
                  font-weight:700;
                  color:#8a6b4f;
                  text-transform:uppercase;
                ">
                  Email Address
                </p>

                <p style="
                  margin:0;
                  font-size:18px;
                  color:#333;
                  line-height:1.7;
                ">
                  ${email}
                </p>

              </div>

              <!-- PROJECT -->

              <div style="
                margin-bottom:28px;
              ">

                <p style="
                  margin:0 0 10px;
                  font-size:12px;
                  letter-spacing:2px;
                  font-weight:700;
                  color:#8a6b4f;
                  text-transform:uppercase;
                ">
                  Project Type
                </p>

                <div style="
                  display:inline-block;
                  padding:12px 20px;
                  border-radius:999px;
                  background:#111;
                  color:white;
                  font-size:14px;
                  font-weight:700;
                  letter-spacing:1px;
                ">
                  ${projectType}
                </div>

              </div>

              <!-- MESSAGE -->

              <div>

                <p style="
                  margin:0 0 12px;
                  font-size:12px;
                  letter-spacing:2px;
                  font-weight:700;
                  color:#8a6b4f;
                  text-transform:uppercase;
                ">
                  Project Message
                </p>

                <div style="
                  background:#F7F3EE;
                  border:1px solid #d8cabc;
                  border-radius:22px;
                  padding:24px;
                ">

                  <p style="
                    margin:0;
                    font-size:17px;
                    line-height:1.9;
                    color:#444;
                    white-space:pre-line;
                  ">
                    ${message}
                  </p>

                </div>

              </div>

            </div>

            <!-- FOOTER -->

            <div style="
              margin-top:35px;
              padding-top:25px;
              border-top:1px solid #e3d6c8;
              text-align:center;
            ">

              <p style="
                margin:0;
                font-size:14px;
                color:#777;
                line-height:1.8;
              ">
                This email was sent from your portfolio contact form.
              </p>

            </div>

          </div>

        </div>

      </div>
      `,
    };

    /* -----------------------------
       SEND EMAIL
    ----------------------------- */

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
});

/* -----------------------------
   PORT
----------------------------- */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});