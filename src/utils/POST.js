import { TOKEN, BASE_URL } from '@/utils/index';

export const options = (body) => {
    switch (body) {
        case !body:
            return {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': TOKEN ?? ''
                },
                body: JSON.stringify({ body })
            }
        case body:
            return {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': TOKEN ?? ''
                }
            }
    }
}


export const requests = (params, params2) => {

    return {
        createClass: `${BASE_URL}/api/v2/classrooms`,
        joinClass: `${BASE_URL}/api/v2/classrooms/${params}/join/${params2}`,
        createQuestion: `${BASE_URL}/api/v2/classrooms/${params}/questions`,
        createAnswer: `${BASE_URL}/api/v2/classrooms/questions/${params2}/answers`,

    }

}


