import Search from "@/components/common/Search";
import Layout from "@/components/layout";
import { ToggleNav } from "@/components/layout/Navbar";
import CreatePost from "@/components/home-page/createPost";
import Blockpost from "@/components/common/blockpost";
import ClassDescript from "@/components/class/classdescrip";
import React from "react";

const index = () => {
  return (
    <Layout>
      <div className="mt-10">
        <div className="m-auto max-w-2xl">
          <div className="flex">
            <Search />
            <ToggleNav />
          </div>
          <div className="flex">
            <ClassDescript />
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
