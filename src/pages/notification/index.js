import Search from "@/components/common/Search";
import Blocknoti from "@/components/common/blocknoti";
import React from "react";
import Layout from "@/components/layout";
import { ToggleNav } from "@/components/layout/Navbar";

const index = () => {
  return (
    <Layout>
      <div className="m-8">
        <div className="m-auto max-w-xl lg:max-w-2xl 2xl:max-w-5xl">
          <div className="flex">
            <Search />
            <ToggleNav />
          </div>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <span className="absolute px-3 font-medium text-white -translate-x-1/2 bg-18191B left-1/2 dark:text-white dark:bg-gray-900">
              Notification
            </span>
          </div>
          <div>
            <Blocknoti />
            <Blocknoti />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
