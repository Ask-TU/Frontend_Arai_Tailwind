import { TOKEN, BASE_URL } from '@/utils/index';

export const optionswithBody = (body) => {
    return {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'token': TOKEN ?? ''
        },
        body: JSON.stringify(body)
    }
}

export const requests = (params) => {

    return {
        //http://localhost:8080/users/64382dfd372ebb119941f8a9
        updateUser: `${BASE_URL}/users/${params}`,
        updateClass: `${BASE_URL}/api/v2/classrooms/${params}`,

    }

}


