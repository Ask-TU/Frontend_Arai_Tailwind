import Search from "@/components/common/Search";
import Layout from "@/components/layout";
import Blockpost from "@/components/common/blockpost";
import React from "react";
import { ToggleNav } from "@/components/layout/Navbar";

const index = () => {
  return (
    <Layout>
      <div className="mt-10">
        <div className="m-auto max-w-2xl">
          <div className="flex">
            <Search />
            <ToggleNav />
          </div>
          <Blockpost />
          <Blockpost />
          <Blockpost />
        </div>
      </div>
    </Layout>
  );
};

export default index;
