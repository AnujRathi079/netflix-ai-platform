import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

function generateOTP() {
  return Math.floor(
    100000 + Math.random() * 900000
  ).toString();
}

export async function POST(req: Request) {

  try {

    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email required",
        },
        { status: 400 }
      );
    }

    const otp = generateOTP();

    console.log("OTP:", otp);

    const transporter =
      nodemailer.createTransport({
        service: "gmail",

        auth: {
          user:
            process.env.EMAIL_USER,

          pass:
            process.env.EMAIL_PASS,
        },
      });

    await transporter.sendMail({
      from:
        process.env.EMAIL_USER,

      to: email,

      subject:
        "Netflix AI OTP Verification",

      html: `
        <div style="font-family:sans-serif;padding:20px;">
          
          <h1 style="color:red;">
            Netflix AI
          </h1>

          <p>
            Your OTP Code:
          </p>

          <h2 style="letter-spacing:5px;">
            ${otp}
          </h2>

          <p>
            Valid for 5 minutes.
          </p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      otp,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "OTP sending failed",
      },
      { status: 500 }
    );
  }
}