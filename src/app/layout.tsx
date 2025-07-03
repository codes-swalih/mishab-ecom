import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "@/styles/styles.scss";
import GlobalProvider from "./GlobalProvider";
import ModalCart from "@/components/Modal/ModalCart";
import ModalWishlist from "@/components/Modal/ModalWishlist";
import ModalSearch from "@/components/Modal/ModalSearch";
import ModalQuickview from "@/components/Modal/ModalQuickview";
import ModalCompare from "@/components/Modal/ModalCompare";
import CountdownTimeType from "@/type/CountdownType";
import { countdownTime } from "@/store/countdownTime";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Inter, Poppins } from "next/font/google";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import Providers from "../providers";
import { FcGoogle } from "react-icons/fc";
const inter = Poppins({ subsets: ["latin"], weight: "400" });

const serverTimeLeft: CountdownTimeType = countdownTime();

// const instrument = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anvogue",
  description: "Multipurpose eCommerce Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased `}>
          <AppRouterCacheProvider>
            <Providers isAuth={false}>

            <div className=" w-full flex flex-col  bg-[#747794] bg-opacity-10 ">
              {/* <div className=" w-full h-12  bg-white text-black px-3 flex items-center justify-between">
                <h1 className=" text-sm font-bold">
                  <FcGoogle className=" text-3xl" />
                </h1>
                <div className=" flex items-center gap-2 text-black">
                  <h1>
                    <FaRegHeart />
                  </h1>
                  <h1>
                    <BsCart />
                  </h1>
                  <h1>
                    <FaRegUser />
                  </h1>
                </div>
              </div> */}
              <div className=" w-full flex justify-center">
                <div className="  md:flex md:flex-col flex flex-col  md:gap-5 w-full px-0 md:px-0">
                  {/* <Navbar /> */}
                  {children}
                  {/* <ModalCart serverTimeLeft={serverTimeLeft} />
                  <ModalWishlist />
                  <ModalSearch />
                  <ModalQuickview />
                  <ModalCompare /> */}
                </div>
              </div>
            </div>
            </Providers>
          </AppRouterCacheProvider>
        </body>
      </html>
    </GlobalProvider>
  );
}
