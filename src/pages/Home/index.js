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
  const tokenString = toString(token);
  const [path, setPath] = useState("");
  const [data, setData] = useState([]);

  // async function getAllClass() {
  //   fetch(path)
  //   .then((res) => res.json())
  //   .then((data) => {
  //       setData(data.class_items)
  //       console.log(data.class_items)
  //       setLoading(false)
  //   })
  //   .catch(err =>{
  //       console.log(err);
  //   })
  // }



  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    // if(isLoading){
    //   // dispatch(setToken(token));
    //   // console.log(publicSlice.token);
    //   setPath('/api/getAllClass/' + token)
    //   console.log(tokenString + "this is token string")
    //   fetch(path)
    //   .then((res) => res.json())
    //     .then((data) => {
    //       setData(data)
    //       console.log(data)
    //       setLoading(false)
    //   })
    // }    
    setPath('/api/getAllClass/' + token);  
    console.log("set patch!")
    const getAllClass = async () => {
      try {
        setLoading(true)
        const response = await fetch(path)
        const json = await response.json()
        setData(json)
        console.log(json)
      } catch(err) {
        console.log(err)
      } finally {
        console.log("get class data!")
        setLoading(false)
      }
    }
    getAllClass();
  }, []);

  // if (!data) return <Layout><p className="text-white">No class data</p></Layout>
  if (isLoading) return <p>Loading...</p>
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
          {/* <button onClick={()=>getAllClass()} className="text-white">Test Get Class Data</button> */}
          <div className="text-white">
            {data && data.map((da) => <div>{da.class_items}</div>)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
