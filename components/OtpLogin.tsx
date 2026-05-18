"use client";

import {
  useState,
} from "react";

export default function OtpLogin() {

  const [email, setEmail] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const [serverOtp, setServerOtp] =
    useState("");

  const [step, setStep] =
    useState(1);

  const [loading, setLoading] =
    useState(false);

  const sendOTP =
    async () => {

      try {

        setLoading(true);

        const res = await fetch(
          "/api/send-otp",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              email,
            }),
          }
        );

        const data =
          await res.json();

        if (data.success) {

          setServerOtp(
            data.otp
          );

          setStep(2);

          alert(
            "OTP sent to email"
          );

        } else {

          alert(
            "OTP failed"
          );
        }

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  const verifyOTP =
    () => {

      if (
        otp === serverOtp
      ) {

        alert(
          "Login Successful 🔥"
        );

      } else {

        alert(
          "Invalid OTP"
        );
      }
    };

  return (
    <div className="w-full max-w-md bg-zinc-900 p-8 rounded-3xl border border-zinc-800">

      <h1 className="text-3xl font-bold text-white mb-6">
        Email OTP Login
      </h1>

      {step === 1 ? (
        <>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full bg-black border border-zinc-700 px-4 py-3 rounded-xl text-white outline-none"
          />

          <button
            onClick={sendOTP}
            disabled={loading}
            className="w-full mt-5 bg-red-600 hover:bg-red-700 transition py-3 rounded-xl text-white font-bold"
          >
            {loading
              ? "Sending..."
              : "Send OTP"}
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) =>
              setOtp(
                e.target.value
              )
            }
            className="w-full bg-black border border-zinc-700 px-4 py-3 rounded-xl text-white outline-none"
          />

          <button
            onClick={verifyOTP}
            className="w-full mt-5 bg-green-600 hover:bg-green-700 transition py-3 rounded-xl text-white font-bold"
          >
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
}