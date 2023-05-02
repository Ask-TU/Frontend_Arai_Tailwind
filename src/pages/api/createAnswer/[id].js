import axios from 'axios';
import { requests, options } from '@/utils/POST';

export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            const body = req.body
            const { id } = req.query;
            console.log(body, id);
            const request = requests(id);
            const option = options(body);
            const response = await axios(request.createAnswer, option);
            const data = response.data;
            console.log(data);

            res.status(200).json(data);
        } catch (error) {
            // console.log(error);
            res.status(500).json({ error: error.message || 'Something went wrong' });
        }
    } else {
        res.status(500).json({ error: 'Something went wrong' });
    }
}
