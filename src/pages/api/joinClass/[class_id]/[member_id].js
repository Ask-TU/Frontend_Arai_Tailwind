import axios from 'axios';
import { requests, options } from '@/utils/POST';

export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            const { class_id, member_id } = req.query;
            console.log(class_id, member_id);
            const request = requests(class_id, member_id);
            const option = options();

            const response = await axios(request.joinClass, option);
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
