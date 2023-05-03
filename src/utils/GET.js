import { TOKEN, BASE_URL } from '@/utils/index';

export const options = (body) => {
    return {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': TOKEN ?? ''
        }
    }
}
export const optionswithBody = (body) => {
    return {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': TOKEN ?? ''
        },
        body: JSON.stringify(body)
    }
}

export const requests = (params) => {

    return {
        fetchAllClass: `${BASE_URL}/api/v2/classrooms`,
        fetchClassbyID: `${BASE_URL}/api/v2/classrooms/${params}`,
        fetchAllQuestion: `${BASE_URL}/api/v2/classrooms/${params}/questions`,

    }

}


