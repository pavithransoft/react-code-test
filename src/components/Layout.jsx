import { Link, Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <section className="font-nunito bg-indigo-800 min-h-screen grid grid-rows-[20%,80%]">
      <Navigation />
      <div className="grid sm:gap-5 sm:grid-cols-2 w-full h-full">
        <div className="px-10 py-5 xl:px-40 xl:py-20">
          <h1 className="text-xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white">
            Generate Awesome Web Pages
          </h1>
          <p className="text-sm sm:text-xl lg:text-2xl text-white pt-3 pb-6 sm:py-10">
            The most important part of the Startup is the samples. The samples
            form a set of 25 usable pages you can use as is or you can add new
            blocks.
          </p>
          <Link
            href={""}
            className="px-4 py-2 sm:px-6 sm:py-4 rounded-full bg-[#E93A7D] hover:bg-pink-500 cursor-pointer text-white font-semibold"
          >
            Learn More
          </Link>
        </div>
        <div className="px-3 sm:pl-0 xl:pl-14 xl:pt-3">
          <div className="border bg-white w-[22rem] h-[26rem] lg:w-[27rem] lg:h-[30rem] xl:w-[30rem] xl:h-[33rem] rounded-lg px-8 lg:px-20 lg:py-5">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
