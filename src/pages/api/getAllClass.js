import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useSelector } from 'react-redux';

export default async function handler(req, res) {
    try {
        const token = useSelector((state) => state.publicData.token);
        const response = await axios.get('http://localhost:8080/api/v2/classrooms', {
            headers: {
            'token': token
            }
        });
        const data = await response.data;
        res.status(200).json(data);
    } catch(err) {
        console.log(err);
    }


  

  
}