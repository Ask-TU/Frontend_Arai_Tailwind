import axios from 'axios';
import { requests, options } from '@/utils/GET';

export default async function handler(req, res) {
  try {
    const { fetchAllClass } = requests();
    const { headers, method } = options();
    console.log(fetchAllClass, headers, method);

    const response = await axios(fetchAllClass, {
      headers,
      method
    });
    const { data: responseData } = response;

    res.status(200).json(responseData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message || 'Something went wrong' });
  }
}
