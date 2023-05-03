import axios from 'axios';
import { requests, optionswithBody } from '@/utils/PUT';

export default async function handler(req, res) {
    const { body } = req;
    const { id } = req.query;
    console.log(body, id);

    const { updateUser } = requests(id);
    const updateOptions = optionswithBody(body);
    console.log(updateUser, updateOptions);

    if (req.method === 'PUT') {
        try {
            const { data } = await axios.put(updateUser, updateOptions);
            console.log(data);
            res.status(200).json({ success: true, data });
        } catch (error) {
            if (error.response && error.response.status === 400) {
                res.status(400).json({ error: 'Invalid input' });
            } else if (error.response && error.response.status === 404) {
                res.status(404).json({ error: 'Resource not found' });
            } else {
                console.log(error);
                res.status(500).json({ error: error.message || 'Something went wrong' });
            }
        }
    } else {
        res.status(500).json({ error: 'Something went wrong' });
    }
}
