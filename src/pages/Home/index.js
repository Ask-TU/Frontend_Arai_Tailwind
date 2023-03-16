import Search from "@/components/common/Search";
import Layout from "@/components/layout";
import Blockpost from "@/components/common/blockpost";
import { ToggleNav } from "@/components/layout/Navbar";
import CreatePost from "@/components/home-page/createPost";
import React from "react";

const index = () => {
  return (
    <Layout>
      <div className="m-8 overflow-hidden">
        <div className="m-auto max-w-xl lg:max-w-2xl">
          <div className="flex">
            <Search />
            <ToggleNav />
          </div>
          <div className="border-b border-636363 pb-5">
            <CreatePost />
          </div>
          <div className="pt-5">
            <Blockpost />
            <Blockpost />
            <Blockpost />
            <Blockpost />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
