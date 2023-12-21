
// import axios from "axios";

import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000/', 
    // baseURL: 'https://urban-nest-hub-server-site.vercel.app'
})

const useAxios= () => {
    return axiosPublic;
};

export default useAxios;