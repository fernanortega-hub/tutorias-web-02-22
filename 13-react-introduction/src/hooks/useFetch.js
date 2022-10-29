const BASE_URL = 'https://reqres.in/api'

const useFetch = async ({ url, method, body }) => {
    const response = await fetch(`${BASE_URL}${url}`, {
        mode: 'cors',
        method: method.toString(),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    const data = await response.json()

    return data;
}

export default useFetch;