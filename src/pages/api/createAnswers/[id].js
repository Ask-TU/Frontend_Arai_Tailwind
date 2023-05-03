import axios from 'axios';
import { requests, options, optionswithBody } from '@/utils/POST';

export default async function handler(req, res) {
    const requestBody = req.body;
    const { id } = req.query;

    // Create request and options for creating an answer
    const createAnswerRequest = requests(id);
    const createAnswerOptions = optionswithBody(requestBody);

    if (req.method === 'POST') {
        try {
            // Send POST request to create an answer and wait for response
            const createAnswerResponse = await fetch(createAnswerRequest.createAnswer, createAnswerOptions);
            const responseData = createAnswerResponse.data;

            // Return successful response with created answer data
            res.status(200).json({ success: true, data: responseData });
        } catch (error) {
            // Return error response with error message
            res.status(500).json({ error: error.message || 'Something went wrong' });
        }
    } else {
        // Return error response for unsupported request method
        res.status(500).json({ error: 'Something went wrong' });
    }
}
