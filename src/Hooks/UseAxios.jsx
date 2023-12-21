
import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://urban-nest-hub-server-site.vercel.app', 
    // baseURL: 'https://urban-nest-hub-server-site.vercel.app'
})

const useAxios= () => {
    return axiosPublic;
};

export default useAxios;