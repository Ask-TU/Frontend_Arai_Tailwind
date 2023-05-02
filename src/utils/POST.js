import { TOKEN, BASE_URL } from '@/utils/index';

export const options = (body) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': TOKEN ?? ''
        },
        body: JSON.stringify({ body })
    }
}


export const requests = (params) => {

    return {
        createClass: `${BASE_URL}/api/v2/classrooms`,
    }

}


