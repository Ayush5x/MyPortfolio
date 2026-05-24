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
       NODEMAILER TRANSPORTER
    ----------------------------- */

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

      tls: {
        rejectUnauthorized: false,
      },

      family: 4,
    });

    /* -----------------------------
       EMAIL TEMPLATE
    ----------------------------- */

    const mailOptions = {
      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: `New Project Inquiry - ${projectType}`,

      html: `
        <div style="
          max-width:600px;
          margin:auto;
          padding:30px;
          background:#f8f8f8;
          border-radius:12px;
          font-family:Arial,sans-serif;
          color:#222;
        ">

          <h1 style="
            margin-bottom:20px;
            color:#111;
          ">
            New Portfolio Inquiry
          </h1>

          <div style="
            background:white;
            padding:20px;
            border-radius:10px;
          ">

            <p>
              <strong>Name:</strong><br/>
              ${name}
            </p>

            <p>
              <strong>Email:</strong><br/>
              ${email}
            </p>

            <p>
              <strong>Project Type:</strong><br/>
              ${projectType}
            </p>

            <p>
              <strong>Message:</strong><br/>
              ${message}
            </p>

          </div>

          <p style="
            margin-top:20px;
            font-size:14px;
            color:#777;
          ">
            Sent from your portfolio contact form.
          </p>

        </div>
      `,
    };

    /* -----------------------------
       VERIFY SMTP CONNECTION
    ----------------------------- */

    await transporter.verify();

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