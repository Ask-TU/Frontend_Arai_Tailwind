import Search from "@/components/common/Search";
import { Header, Footer } from "@/components/layout/Layout";
import Navbar from "@/components/layout/Navbar";
import Blocknoti from "@/components/common/Blocknoti";
import React from "react";
import ProfileImg from "../../../public/assets/Ellipse 7.png";
import Image from "next/image";
import Layout from "@/components/layout";
import { ToggleNav } from "@/components/layout/Navbar";
import CreatePost from "@/components/home-page/createPost";

const index = () => {
    return (
      <Layout>
        <div className="m-8">
          <div className="m-auto max-w-xl lg:max-w-2xl">
            <div className="flex">
              <Search />
              <ToggleNav />
            </div>
            <div class="inline-flex items-center justify-center w-full">
              <hr class="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <span class="absolute px-3 font-medium text-white -translate-x-1/2 bg-18191B left-1/2 dark:text-white dark:bg-gray-900">Notification</span>
            </div>
              <div className='mt-5 pt-5'>
                <Blocknoti/>
                <Blocknoti/>
              </div>
              

            </div>
        </div>
      </Layout>
    );
};

export default index;
