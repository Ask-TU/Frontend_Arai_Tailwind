import { hasCookie } from 'cookies-next';
import Login from "./login";
import Home from "./Home";

export default function App() {
  const token = hasCookie('token');
  return token ? <Home /> : <Login />;
}