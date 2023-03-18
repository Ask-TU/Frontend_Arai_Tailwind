import Layout from "@/components/layout";
import React from "react";
import Questionblock from "@/components/common/questionblock";
import Typeanswer from "@/components/home-page/Typeanswer";

const question = () => {
  
  return (
    
    <>
      <Layout>
        <div className="m-auto max-w-5xl h-2/5">
          <Questionblock />
        </div>
        <div className="pt-5">
        <Typeanswer /></div>
      </Layout>
    </>
  );
};

export default question;
