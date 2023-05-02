import axios from 'axios';
import { requests, options } from '@/utils/GET';

export default async function handler(req, res) {
    const { id } = req.query;
    console.log(id);

    try {
        const request = requests(id);
        const option = options();

        console.log(request, option);

        const response = await axios(request.fetchClassbyID, option);
        const data = response.data;

        res.status(200).json(data);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message || 'Something went wrong' });
    }
}
