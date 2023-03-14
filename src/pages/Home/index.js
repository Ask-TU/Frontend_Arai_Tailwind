import Search from "@/components/common/Search";
import Layout from "@/components/layout";
import Blockpost from "@/components/common/blockpost";
import React from "react";

const index = () => {
  return (
    <>
      <Layout>
        <div className="mt-10 h-screen">
          <div className="m-auto max-w-2xl">
            <Search />
            <Blockpost />
            <Blockpost />
            <Blockpost />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default index;
