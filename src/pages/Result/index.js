import Search from "@/components/common/Search";
import Layout from "@/components/layout";
import ResultBlock from "@/components/result/resultblock";
import { ToggleNav } from "@/components/layout/Navbar";
import CreatePost from "@/components/home-page/createPost";
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

          <div className="pt-5">
            <ResultBlock />
            <ResultBlock />
            <ResultBlock />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
