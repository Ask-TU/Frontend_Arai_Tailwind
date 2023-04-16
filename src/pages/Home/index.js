import Search from "@/components/common/Search";
import Layout from "@/components/layout";
import Blockpost from "@/components/common/blockpost";
import { ToggleNav } from "@/components/layout/Navbar";
import CreatePost from "@/components/home-page/createPost";
import React , {useEffect, useState} from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions } from "@/redux/slices/publicSlice";
import { getCookie, hasCookie } from "cookies-next";

const index = () => {
  const dispatch = useDispatch();
  const publicSlice = useSelector((state) => state.publicData);
  const BlockPostData = [
    {
      username: "Username",
      dateTime: "14 Feb 2023, 21:29", 
      titleQuestion: "ถ้าผมตากฝน ฝนจะแห้งมั้ยครับ แล้วถ้าฝนตากผม ผมจะเปียกมั้ย", 
      classTag: "SF 340", 
      comment: 2
    },
    {
      username: "Chawin",
      dateTime: "14 Feb 2023, 21:29", 
      titleQuestion: "ฝนจะแห้งมั้ยครับ แล้วถ้าฝนตากผม ผมจะเปียกมั้ย", 
      classTag: "SF 340", 
      comment: 2
    },
    {
      username: "Thank",
      dateTime: "14 Feb 2023, 21:29", 
      titleQuestion: "ถ้าผมตากฝน แล้วถ้าฝนตากผม ผมจะเปียกมั้ย", 
      classTag: "SF 340", 
      comment: 2
    },
    {
      username: "Test",
      dateTime: "14 Feb 2023, 21:29", 
      titleQuestion: "ถ้าผมตากฝน ฝนจะแห้งมั้ยครับ ผมจะเปียกมั้ย", 
      classTag: "SF 340", 
      comment: 2
    }
  ]

  const token = getCookie('token');

  const requestOptions = {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      'token': [token]
    },
  };

  const postSignIN = async () => {
    await fetch('http://localhost:8080/api/v2/classrooms', requestOptions)
      .then(response => {
        response.json()
            .then(data => {
              console.log("First Name = " + first)
              console.log("Last Name = " + last)
              console.log("Nick Name = " + nick)
              console.log("Email = " + email)
              console.log("Password = " + pass)
              console.log("Phone = " + phone)
              console.log("Type = " + type)
              console.log(data)
              postLogin();
            });
    })
    .catch (error => {
      console.error(error);
    }) 
  }

  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
        postSignIN().then(() => {
            setLoading(false);
        });
    }
    setLoading(false)
  }, [isLoading]);

  return (
    <Layout>
      <div className="m-8">
        <div className="m-auto max-w-xl lg:max-w-2xl 2xl:max-w-5xl">
          <div className="flex">
            <Search />
            <ToggleNav />
          </div>
          <div className="border-b border-636363 pb-5">
            <CreatePost />
          </div>
          <div className="pt-5">
            {BlockPostData.map((items) => (
              <Link key={items.titleQuestion} href={"/home/question"} onClick={()=>{dispatch(setQuestions(items)); console.log(publicSlice.questions); console.log(publicSlice.questions.username)}}>
                <Blockpost username = {items.username} dateTime = {items.dateTime} titleQuestion = {items.titleQuestion} classTag = {items.classTag} comment = {items.comment}/>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
