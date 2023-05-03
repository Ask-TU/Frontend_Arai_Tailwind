import axios from 'axios';
import { requests, optionswithBody } from '@/utils/PUT';

export default async function handler(req, res) {
    const body = req.body;
    const { id } = req.query;
    console.log(body, id);

    const request = requests(id);
    const option = optionswithBody(body);
    console.log(request, option);

    if (req.method == 'PUT') {
        try {
            const response = await axios.put(request.updateUser, option);
            console.log(response.data);
            res.status(200).json({ success: true, data: body });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message || 'Something went wrong' });
        }
    } else {
        res.status(500).json({ error: 'Something went wrong' });
    }
}
