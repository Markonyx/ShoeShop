import axios from 'axios';

export const productService = {
    getAll
}

const endpoint = 'http://localhost:50922/api/products';

function getAll() {
    return axios.get(endpoint)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        })
}