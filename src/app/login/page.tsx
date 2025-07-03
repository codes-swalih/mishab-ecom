"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer";

import * as Icon from "@phosphor-icons/react/dist/ssr";
import toast from "react-hot-toast";

// Form validation
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";

// API utilities
import { useMutation } from "react-query";
import * as api from "@/services";

// Client-side cookies
import { createCookies } from "@/hooks/clientCookies";

// Redux
import { useDispatch } from "react-redux";
import { setLogin } from "@/redux/slices/user";
import { setWishlist } from "@/redux/slices/wishlist";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParam = useSearchParams();
  const redirect = searchParam.get('redirect');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // User is already logged in, redirect to homepage
      router.push('/');
    }
  }, [router]);

  // Form validation schema
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Enter valid email").required("Email is required."),
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Password should be 8 characters or longer."),
  });

  // Login mutation using the API service
  const { mutate } = useMutation(api.login, {
    onSuccess: async (data) => {
      // Update Redux state with user data
      dispatch(setLogin(data.user));
      dispatch(setWishlist(data.user.wishlist));

      // Set authentication token
      await createCookies("token", data.token);
      setLoading(false);
      toast.success("Logged in successfully!");

      // Handle role-based redirection
      const isAdmin = data.user.role.includes("admin");
      const isVendor = data.user.role.includes("vendor");
      router.push(redirect || isAdmin ? '/admin/dashboard' : isVendor ? '/vendor/dashboard' : '/');
    },
    onError: (err : any) => {
      setLoading(false);
      toast.error(err?.response?.data?.message || "Login failed. Please try again.");
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const { email, password } = values;
      setLoading(true);
      mutate({ email, password });
    },
  });
  
  const { errors, touched, values, handleSubmit, getFieldProps, setFieldValue } = formik;

  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb heading="Login" subHeading="Login" />
      </div>
      <div className="login-block md:py-20 py-10">
        <div className="container">
          <div className="content-main flex gap-y-8 max-md:flex-col">
            <div className="left md:w-1/2 w-full lg:pr-[60px] md:pr-[40px] md:border-r border-line">
              <div className="heading4">Login</div>
              
              {/* Quick login buttons for testing */}
              {/* <div className="grid gap-4 md:mt-6 mt-4">
                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm text-green-600">Admin</div>
                      <div className="text-xs text-gray-500 mt-1">admin@test.com | test1234</div>
                    </div>
                    <button 
                      type="button"
                      className="px-3 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                      onClick={() => {
                        setFieldValue('email', 'admin@test.com');
                        setFieldValue('password', 'test1234');
                      }}
                    >
                      Fill
                    </button>
                  </div>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm text-purple-600">Vendor</div>
                      <div className="text-xs text-gray-500 mt-1">vendor@test.com | test1234</div>
                    </div>
                    <button 
                      type="button"
                      className="px-3 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                      onClick={() => {
                        setFieldValue('email', 'vendor@test.com');
                        setFieldValue('password', 'test1234');
                      }}
                    >
                      Fill
                    </button>
                  </div>
                </div>
              </div> */}
              <FormikProvider value={formik}>
                <Form className="md:mt-7 mt-4" onSubmit={handleSubmit} autoComplete="off">
                  <div className="email relative">
                    <div className="flex items-center absolute left-4 top-1/2 transform -translate-y-1/2">
                      <Icon.Envelope size={20} weight="regular" className="text-gray-400" />
                    </div>
                    <input 
                      className={`border-line pl-12 px-4 pt-3 pb-3 w-full rounded-lg ${touched.email && errors.email ? 'border-red-500' : ''}`} 
                      id="email" 
                      type="email" 
                      placeholder="Email address *" 
                      {...getFieldProps('email')} 
                      autoComplete="username"
                    />
                    {touched.email && errors.email && (
                      <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                    )}
                  </div>
                  <div className="pass mt-5 relative">
                    <div className="flex items-center absolute left-4 top-1/2 transform -translate-y-1/2">
                      <Icon.Lock size={20} weight="regular" className="text-gray-400" />
                    </div>
                    <input 
                      className={`border-line pl-12 pr-12 px-4 pt-3 pb-3 w-full rounded-lg ${touched.password && errors.password ? 'border-red-500' : ''}`} 
                      id="password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Password *" 
                      {...getFieldProps('password')}
                      autoComplete="current-password" 
                    />
                    <button 
                      type="button"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <Icon.Eye size={20} weight="regular" />
                      ) : (
                        <Icon.EyeSlash size={20} weight="regular" />
                      )}
                    </button>
                    {touched.password && errors.password && (
                      <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center">
                      <div className="block-input">
                        <input
                          type="checkbox"
                          id='remember'
                          {...getFieldProps('remember')}
                        />
                        <Icon.CheckSquare
                          size={20}
                          weight="fill"
                          className="icon-checkbox"
                        />
                      </div>
                      <label htmlFor="remember" className="pl-2 cursor-pointer">
                        Remember me
                      </label>
                    </div>
                    <Link
                      href={"/forgot-password"}
                      className="font-semibold hover:underline"
                    >
                      Forgot Your Password?
                    </Link>
                  </div>
                  <div className="block-button md:mt-7 mt-4">
                    <button
                      type="submit"
                      className="button-main relative bg-green text-black"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="opacity-0">Login</span>
                          <Icon.CircleNotch
                            size={24}
                            className="animate-spin absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          />
                        </>
                      ) : (
                        "Login"
                      )}
                    </button>
                  </div>
                </Form>
              </FormikProvider>
            </div>
            <div className="right md:w-1/2 w-full lg:pl-[60px] md:pl-[40px] flex items-center">
              <div className="text-content">
                <div className="heading4">New Customer</div>
                <div className="mt-2 text-secondary">
                  Be part of our growing family of new customers! Join us today
                  and unlock a world of exclusive benefits, offers, and
                  personalized experiences.
                </div>
                <div className="block-button md:mt-7 mt-4">
                  <Link href={"/register"} className="button-main">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
