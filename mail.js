const nodemailer = require("nodemailer");


const RegisterationEmail = async (name, email) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Disables certificate validation
      },
    });

    const mailoptions = {
      form: process.env.SMTP_USER,
      to: email,
      subject: "Registration with video chat app",
      html: `<h1>Welcome ${name}</h1><p>thankyou to sign up with video confrence app</p>`,
    };

    const info = await transporter.sendMail(
      mailoptions,
      (error, information) => {
        if (error) console.log(error);
        else console.log(information);
      }
    );
    console.log(info);
  } catch (error) {
    console.log(error);
  }
};

const forgotPasswordMail = async (name, email, token) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Disables certificate validation
      },
    });

    const mailoptions = {
      form: process.env.SMTP_USER,
      to: email,
      subject: "Reset your video chat app password",
      html: `<p>Hello ${name} Please copy the link to <a href="http://localhost:5173/reset-password?token=${token}">reset your password </a> </p>`,
    };

    const info = await transporter.sendMail(
      mailoptions,
      (error, information) => {
        if (error) {
          console.log("error: ",error);
        } else {
          console.log("information",information);
        }
      }
    );
    console.log(info);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { RegisterationEmail, forgotPasswordMail };
