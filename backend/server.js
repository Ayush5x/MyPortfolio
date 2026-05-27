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
  margin:0;
  padding:40px 16px;
  background:#d8d7cf;
  font-family:Arial,sans-serif;
">

  <div style="
    max-width:680px;
    margin:0 auto;
    background:#f5f2eb;
    border-radius:28px;
    overflow:hidden;
    border:1px solid #d9d2c7;
  ">

    <!-- HEADER -->

    <div style="
      padding:50px 45px 36px;
      background:#f5f2eb;
      border-bottom:1px solid #e2dbd0;
    ">

      <div style="
        display:inline-block;
        padding:10px 18px;
        border:1px solid #111;
        border-radius:999px;
        font-size:11px;
        font-weight:700;
        letter-spacing:2px;
        color:#111;
        margin-bottom:28px;
      ">
        NEW CLIENT INQUIRY
      </div>

      <h1 style="
        margin:0;
        font-size:44px;
        line-height:1.05;
        font-weight:900;
        color:#111;
        letter-spacing:-2px;
      ">
        New project
        <br />
        request received.
      </h1>

      <p style="
        margin:24px 0 0;
        font-size:16px;
        line-height:1.8;
        color:#5f5f5f;
        max-width:500px;
      ">
        Someone submitted a new inquiry through your portfolio contact form.
      </p>

    </div>

    <!-- BODY -->

    <div style="
      padding:40px;
    ">

      <!-- INFO CARD -->

      <div style="
        background:#ebe4d8;
        border-radius:24px;
        padding:32px;
        border:1px solid #ddd3c5;
      ">

        <!-- NAME -->

        <div style="margin-bottom:28px;">

          <p style="
            margin:0 0 8px;
            font-size:11px;
            letter-spacing:2px;
            text-transform:uppercase;
            color:#8a745e;
            font-weight:700;
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

        <div style="margin-bottom:28px;">

          <p style="
            margin:0 0 8px;
            font-size:11px;
            letter-spacing:2px;
            text-transform:uppercase;
            color:#8a745e;
            font-weight:700;
          ">
            Email Address
          </p>

          <p style="
            margin:0;
            font-size:17px;
            line-height:1.7;
            color:#333;
          ">
            ${email}
          </p>

        </div>

        <!-- PROJECT TYPE -->

        <div style="margin-bottom:28px;">

          <p style="
            margin:0 0 10px;
            font-size:11px;
            letter-spacing:2px;
            text-transform:uppercase;
            color:#8a745e;
            font-weight:700;
          ">
            Project Type
          </p>

          <span style="
            display:inline-block;
            padding:12px 18px;
            background:#111;
            color:#fff;
            border-radius:999px;
            font-size:13px;
            font-weight:700;
            letter-spacing:1px;
          ">
            ${projectType}
          </span>

        </div>

        <!-- MESSAGE -->

        <div>

          <p style="
            margin:0 0 10px;
            font-size:11px;
            letter-spacing:2px;
            text-transform:uppercase;
            color:#8a745e;
            font-weight:700;
          ">
            Project Message
          </p>

          <div style="
            background:#f7f4ee;
            border-radius:18px;
            padding:24px;
            border:1px solid #ddd5ca;
          ">

            <p style="
              margin:0;
              font-size:16px;
              line-height:1.9;
              color:#444;
              white-space:pre-line;
            ">
              ${message}
            </p>

          </div>

        </div>

      </div>

      <!-- CTA -->

      <div style="
        margin-top:32px;
        text-align:center;
      ">

        <a
          href="mailto:${email}"
          style="
            display:inline-block;
            padding:16px 28px;
            background:#111;
            color:#fff;
            text-decoration:none;
            border-radius:999px;
            font-size:14px;
            font-weight:700;
            letter-spacing:1px;
          "
        >
          REPLY TO CLIENT →
        </a>

      </div>

      <!-- FOOTER -->

      <div style="
        margin-top:34px;
        padding-top:24px;
        border-top:1px solid #e1d9cd;
        text-align:center;
      ">

        <p style="
          margin:0;
          font-size:13px;
          color:#777;
          line-height:1.8;
        ">
          Sent from your portfolio contact form.
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