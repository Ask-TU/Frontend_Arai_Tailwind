import Search from "@/components/common/Search";
import Layout from "@/components/layout";
import Blockpost from "@/components/common/blockpost";
import { ToggleNav } from "@/components/layout/Navbar";
import CreatePost from "@/components/home-page/createPost";
import React , {useEffect, useState} from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions, setToken } from "@/redux/slices/publicSlice";
import { getCookie, hasCookie } from "cookies-next";
import axios from "axios";

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
      classTag: "SF 341", 
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
  const [data, setData] = useState([]);

  const [isLoading, setLoading] = useState(true);    
  const getAllClass = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/fetchAllQuestion/' + '643bfd04e7211dc61a4e23ba')
      const json = await response.json()
      setData(json.result.data)
      console.log(json.result.data)
    } catch(err) {
      console.log(err)
    } finally {
      console.log("get class data!")
      setLoading(false)
    }
  }
  useEffect(() => {  

    getAllClass();
  }, []);

  if (!data) return <Layout><p className="text-white">No class data</p></Layout>
  if (isLoading) return <p>Loading...</p>
  return (
    <Layout>
      <div className="m-8">
        <div className="m-auto max-w-xl lg:max-w-2xl 2xl:max-w-5xl">
          <div className="flex">
            <Search />
            <ToggleNav />
          </div>
          <div className="pt-5">{data.map((items) => (
            <Link key={items.ID} href={"/home/question"} onClick={()=>{dispatch(setQuestions(items))}}>
              <Blockpost username = {items.username} dateTime = {items.created_at} titleQuestion = {items.Content} classTag = {items.classTag} comment = {items.comment}/>
            </Link>
          ))}</div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
