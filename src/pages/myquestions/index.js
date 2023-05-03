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

const index = () => {
  const dispatch = useDispatch();
  const publicSlice = useSelector((state) => state.publicData);

  const token = getCookie('token');
  const [data, setData] = useState([]);

  const [isLoading, setLoading] = useState(true);    
  const getQuestion = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/questionByUserId/' + '643bfd04e7211dc61a4e23ba')
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
