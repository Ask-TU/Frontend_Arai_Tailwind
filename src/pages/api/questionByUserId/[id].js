import axios from 'axios';
import { requests, options } from '@/utils/GET';

export default async function handler(req, res) {
    const { id } = req.query;
    console.log(id);
    try {
        const { fetchQuestionByUserId } = requests(id);
        const { headers, method } = options();
        console.log(fetchQuestionByUserId, headers, method);

        const response = await axios(fetchQuestionByUserId, {
            headers,
            method
        });
        const { data: responseData } = response;

        res.status(200).json(responseData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message || 'Something went wrong' });
    }
}
