import Search from "@/components/common/Search";
import Layout from "@/components/layout";
import Blockpost from "@/components/common/blockpost";
import { ToggleNav } from "@/components/layout/Navbar";
import CreatePost from "@/components/home-page/createPost";
import React , {useEffect, useState} from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setQuestions } from "@/redux/slices/publicSlice";
import { getCookie, setCookie } from "cookies-next";

const index = () => {
  const dispatch = useDispatch();

  const userID = getCookie('userID');
  const [data, setData] = useState([]);

  const [isLoading, setLoading] = useState(true);    
  const getQuestion = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/questionByUserId/' + userID)
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
    getQuestion();
  }, []);

  if (!data) 
  return (
    <Layout>
      <p className="text-white text-center text-2xl">No data</p>
      <div className="m-auto max-w-xl lg:max-w-2xl 2xl:max-w-5xl">
        <div className="flex">
          <Search />
          <ToggleNav />
        </div>
        <div className="border-b border-636363 pb-5 m-auto max-w-xl lg:max-w-2xl 2xl:max-w-5xl">
          <CreatePost classID={"64528e1a12255bcb154b7cf8"}/>
        </div>
      </div>
    </Layout>
  );
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
            <Link key={items.ID} href={"/home/question"} onClick={()=>{dispatch(setQuestions(items)), setCookie('questionId', items.ID)}}>
              <Blockpost username = {items.username} dateTime = {items.created_at} titleQuestion = {items.Content} classTag = {items.classTag} comment = {items.answer === null ? '0' : items.answer.length}/>
            </Link>
          ))}</div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
