import axios from 'axios';
import { requests, options } from '@/utils/GET';

export default async function handler(req, res) {
  try {
    const request = requests();
    const option = options();
    console.log('hello', request, option);

    const response = await axios(request.fetchAllClass, option);
    const data = response.data;

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message || 'Something went wrong' });
  }
}
