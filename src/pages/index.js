import { hasCookie } from 'cookies-next';
import Login from "./login";
import Home from "./home";

export default function App(){
  const token = hasCookie('token');
  if(token){
      return <Home/>;
    } else {
      return <Login/>;
    }
}