import Layout from "@/components/layout";
import React from "react";
import Questionblock from "@/components/common/questionblock";
import Typeanswer from "@/components/home-page/Typeanswer";
import Answerblock from "@/components/home-page/Answerblock";
const question = () => {
  return (
    <>
      <Layout>
        <div className="m-8">
          <div className="m-auto max-w-xl lg:max-w-2xl 2xl:max-w-5xl">
            <Questionblock />
            <div className="pt-5 w-full">
              <Typeanswer />
            </div>
            <div className="pt-5 m-auto w-full">
              <Answerblock />
              <Answerblock />
              <Answerblock />
              <Answerblock />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default question;
