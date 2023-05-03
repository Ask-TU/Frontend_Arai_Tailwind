import { TOKEN, BASE_URL } from '@/utils/index';

export const options = () => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': TOKEN ?? ''
        }
    }
}

export const optionswithBody = (body) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': TOKEN ?? ''
        },
        body: JSON.stringify(body)
    }
}

export const requests = (params, child) => {

    return {
        createClass: `${BASE_URL}/api/v2/classrooms`,
        joinClass: `${BASE_URL}/api/v2/classrooms/join/${params}/${child}`,
        createQuestion: `${BASE_URL}/api/v2/classrooms/${params}/questions`,
        createAnswer: `${BASE_URL}/api/v2/classrooms/questions/${params}/answers`,

    }

}


