import Layout from "@/components/layout";
import React from "react";
import Questionblock from "@/components/common/questionblock";
import Typeanswer from "@/components/home-page/Typeanswer";
import Answerblock from "@/components/home-page/Answerblock";
const question = () => {
  return (
    <>
      <Layout>
        <div className="m-auto max-w-5xl h-2/5">
          <Questionblock />
        </div>
        <div className="pt-5">
          <Typeanswer />
        </div>
        <div className="pt-5 m-auto max-w-5xl h-2/5">
          <Answerblock />
          <Answerblock />
          <Answerblock />
          <Answerblock />
        </div>
      </Layout>
    </>
  );
};

export default question;
