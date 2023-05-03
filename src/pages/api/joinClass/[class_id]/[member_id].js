import axios from 'axios';
import { requests, options } from '@/utils/POST';

export default async function handler(req, res) {
    // Extract query parameters using destructuring
    const { class_id, member_id } = req.query;
    console.log(class_id, member_id);

    // Use consistent naming conventions
    const requests = requests(class_id, member_id);
    const options = options();

    if (req.method == 'POST') {
        try {
            const response = await fetch(requests.joinClass, options);
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
