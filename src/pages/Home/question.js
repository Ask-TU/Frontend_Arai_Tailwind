import Layout from "@/components/layout";
import React, { useEffect, useState } from "react";
import Questionblock from "@/components/common/questionblock";
import Typeanswer from "@/components/home-page/Typeanswer";
import Answerblock from "@/components/home-page/Answerblock";
import { useSelector } from "react-redux";
import { getCookie, setCookie } from "cookies-next";

const question = () => {
  const publicSlice = useSelector((state) => state.publicData);
  const [data, setData] = useState([]);
  const getAnswer = async () => {
    try {
      const questionId = getCookie('questionId')
      const response = await fetch('/api/answerById/' + questionId)
      const json = await response.json()
      setData(json.result.data)
      console.log(json.result.data)
    } catch(err) {
      console.log(err)
    } finally {
      console.log("get answer data!")
    }
  }
  useEffect(() => {  
    getAnswer();
  }, []);
  return (
    <>
      <Layout>
        <div className="m-8">
          <div className="m-auto max-w-xl lg:max-w-2xl 2xl:max-w-5xl">
            <Questionblock username = {publicSlice.questions.username} dateTime = {publicSlice.questions.created_at} titleQuestion = {publicSlice.questions.Content} questionDetail = {""} classTag = {publicSlice.questions.classTagContent}/>
            <div className="pt-5 w-full">
              <Typeanswer />
            </div>
            <div className="pt-5 m-auto w-full">
              {data.map((items) => (
                <Answerblock username={items.username} dateTime={items.created_at} answer={items.content}/>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default question;
