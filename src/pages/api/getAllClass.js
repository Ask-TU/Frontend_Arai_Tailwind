import axios from 'axios';
import { getCookie } from 'cookies-next';

export default async function handler(req, res) {
    try {
        const response = await axios.get('http://localhost:8080/api/v2/classrooms', {
            headers: {
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6IlVzZXJAYXJhaS5jb20iLCJGaXJzdF9uYW1lIjoiQWRtaW4iLCJMYXN0X25hbWUiOiJBZG1pbiIsIlVpZCI6IjY0MzUzODkwNTk4MDUzMzE2ODljZWQ1NCIsIlVzZXJfdHlwZSI6IkFETUlOIiwiZXhwIjoxNjgyMDczNjM4fQ.phPXjkN_IXueNcY2jcupGUpbOxNqIyj3QvthHTr7wxk'
            }
        });
        const data = await response.data;
        res.status(200).json(data);
    } catch(err) {
        console.log(err);
    }


  

  
}