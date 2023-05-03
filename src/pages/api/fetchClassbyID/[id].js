import axios from 'axios';
import { requests, options } from '@/utils/GET';

export default async function handler(req, res) {
    // Get the ID from the query string
    const { id } = req.query;

    // Construct the request and options objects
    const request = requests(id);
    const option = options();

    // Log the request, option, and ID
    console.log(request, option, id);

    try {
        // Send the request using axios
        const response = await axios(request.fetchClassbyID, option);
        const data = response.data;

        // Send the response back to the client
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message || 'Something went wrong' });
    }
}
