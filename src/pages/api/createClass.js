import axios from 'axios';
import { requests, options } from '@/utils/POST';

export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            const body = {
                "subject_name": "SF342 Software Construction 88",
                "class_owner": "643533058b6dc87dc5c10272",
                "section": "76001",
                "members": [],
                "questions": []
            }
            console.log(req.body);
            const request = requests();
            const option = options(body);

            const response = await fetch(request.createClass, option);
            const data = response.data;
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
