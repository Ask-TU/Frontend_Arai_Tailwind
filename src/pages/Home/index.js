import Search from "@/components/common/Search";
import { Header, Footer } from "@/components/layout/Layout";
import Navbar from "@/components/layout/Navbar";
import Blockpost from "@/components/common/blockpost";
import React from "react";

const index = () => {
  return (
    <>
      <Header />

      <div className="mt-10 h-screen">
        <div className="max-xl:hidden">
          <Navbar />
        </div>

        <div>
          <div className="m-auto max-w-2xl">
            <Search />
            <Blockpost />
            <Blockpost />
            <Blockpost />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
