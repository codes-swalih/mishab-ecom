"use client";
import React, { useState } from "react";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import { verifyOTP, resendOTP } from "@/services/index";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "@/redux/slices/user";

function setCookie(name: string, value: string, days = 7) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      // The token is automatically attached by the http interceptor if present in cookies
      await verifyOTP({ otp, email: user?.email });
      dispatch(verifyUser());
      toast.success("OTP verified! Account activated.");
      window.location.href = `/${user?.role === "admin" ? "my-account" : "/"}`;
    } catch (err: any) {
      const msg =
        err?.response?.data?.message ||
        err.message ||
        "OTP verification failed.";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResending(true);
    try {
      await resendOTP({ email: user?.email });
      toast.success("OTP resent to your email.");
    } catch (err: any) {
      const msg =
        err?.response?.data?.message || err.message || "Failed to resend OTP.";
      toast.error(msg);
    } finally {
      setResending(false);
    }
  };

  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="Verify your email to activate your account"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb heading="OTP Verification" subHeading="Verify your email" />
      </div>
      <div className="register-block md:py-20 py-10">
        <div className="container">
          <div className="content-main flex gap-y-8 max-md:flex-col justify-center">
            <div className="left md:w-1/2 w-full lg:pr-[60px] md:pr-[40px] md:border-r border-line flex flex-col items-center">
              <div className="heading4 mb-2">OTP Verification</div>
              <div className="text-secondary mb-6 text-center">
                Enter the OTP sent to your email to verify your account.
              </div>
              <form
                className="md:mt-7 mt-4 w-full max-w-sm"
                onSubmit={handleSubmit}
              >
                <input
                  className="border-line px-4 pt-3 pb-3 w-full rounded-lg text-center tracking-widest text-xl"
                  id="otp"
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={handleChange}
                  maxLength={6}
                  required
                />
                {error && (
                  <div className="text-red-500 mt-3 text-center">{error}</div>
                )}
                <div className="block-button md:mt-7 mt-4">
                  <button
                    className="button-main w-full"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Verifying..." : "Verify OTP"}
                  </button>
                </div>
              </form>
              <button
                className="mt-6 text-button underline text-black disabled:opacity-50"
                onClick={handleResend}
                disabled={resending}
                type="button"
              >
                {resending ? "Resending..." : "Resend OTP"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OTPVerification;
