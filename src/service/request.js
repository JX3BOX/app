import axios from 'axios';

export function req(options) {
    return new Promise((resolve, reject) => {
        // axios.defaults.withCredentials = true;
        const instance = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            timeout: 1000 * 10
        });
        instance(options)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                console.log('axios错误：' + error)
                reject(error.response ? error.response.data : {data: error.message, code: -1});
            })
    });
}
