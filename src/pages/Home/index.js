import Search from "@/components/common/Search";
import { Header, Footer } from "@/components/layout/Layout";
import Navbar from "@/components/layout/Navbar";
import Blockpost from "@/components/common/blockpost";
import React from "react";

const index = () => {
  return (
    <>
      <Header />

      <div className="mt-5 h-screen xl:grid grid-cols-5">
        <div className="col-span-1 max-xl:hidden">
          <Navbar />
        </div>

        <div className="col-span-5 xl:col-span-4">
          <div className="m-auto max-w-2xl">
            <Search />
            <Blockpost>
            </Blockpost>
            <Blockpost>
            </Blockpost>
            <Blockpost>
            </Blockpost>
              

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
