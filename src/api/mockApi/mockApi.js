import axios from "axios";

const baseUrl = "https://64789f21362560649a2e2597.mockapi.io/";
const config = { 'Content-Type': 'application/json' };

export const getTotlaUsers = () => axios.get(`${ baseUrl }users`);

export const getAllUsers = ({ page, filter }) => {
    
    let fetchParams;

    if (filter === true) {
        fetchParams = { "following": true, "page": page, "limit": 3 }
    }

    if (!filter) {
        fetchParams = { "page": page, "limit": 3 }
    }

    return axios.get(`${ baseUrl }users`, { params: fetchParams })
};

export const updUserById = ({id, newData}) => axios.put(`${ baseUrl }users/${id}`, newData, config);