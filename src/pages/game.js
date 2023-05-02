import axios from 'axios';
import { requests, options } from '@/utils/POST';

import { useState, useEffect } from 'react'

export default function Game() {
    const [classes, setClasses] = useState([]);
    const createClass = async () => {

        try {
            const body = {
                "subject_name": "SF342 Software Construction 7",
                "class_owner": "643533058b6dc87dc5c10272",
                "section": "76001",
                "members": [],
                "questions": []
            }
            console.log(body);
            const request = requests();
            const option = options(body);

            const response = await fetch(request.createClass, option);
            const data = response.data;
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <button className='bg-white'
                onClick={createClass}
            >create class</button>
        </>
    )
}
