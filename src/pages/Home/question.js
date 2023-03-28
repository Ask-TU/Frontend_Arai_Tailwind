import Layout from "@/components/layout";
import React, { useEffect, useState } from "react";
import Questionblock from "@/components/common/questionblock";
import Typeanswer from "@/components/home-page/Typeanswer";
import Answerblock from "@/components/home-page/Answerblock";
import { useSelector } from "react-redux";

const question = () => {
  const publicSlice = useSelector((state) => state.publicData);

  return (
    <>
      <Layout>
        <div className="m-8">
          <div className="m-auto max-w-xl lg:max-w-2xl 2xl:max-w-5xl">
            <Questionblock username = {publicSlice.questions.username} dateTime = {publicSlice.questions.dateTime} titleQuestion = {publicSlice.questions.titleQuestion} questionDetail = {""} classTag = {publicSlice.questions.classTag}/>
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
