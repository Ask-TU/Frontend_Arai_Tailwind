import axios from 'axios';
import { requests, options } from '@/utils/POST';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { body } = req;
            console.log(body);

            const { createClass } = requests();
            const createCourseOptions = options(body);

            const { data } = await axios.post(createClass, createCourseOptions);
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
