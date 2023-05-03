import axios from 'axios';
import { requests, optionswithBody } from '@/utils/POST';

export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            const { body } = req;
            const { id } = req.query;
            console.log(body);

            const { createQuestion } = requests(id);
            const createCourseOptions = optionswithBody(body);

            const { data } = await axios.post(createQuestion, createCourseOptions);
            console.log(data);

            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message || 'Something went wrong' });
        }
    } else {
        res.status(500).json({ error: 'Something went wrong' });
    }
}
