import { getCookie, hasCookie } from 'cookies-next';
import Login from "./login";
import Home from "./home";
import { useSelector } from 'react-redux';

export default function App(){
  const token = hasCookie('token');
  if(token){
      return <Home/>;
    } else {
      return <Login/>;
    }
  // const auth = useSelector((state)=>state.publicData);
  // if (auth.authState) {
  //     return <Home/>;
  //   } else {
  //     return <Login/>;
  // }
}