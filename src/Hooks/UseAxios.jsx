
// import axios from "axios";

import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://server-site-eta.vercel.app/', 
    
})

const useAxios= () => {
    return axiosPublic;
};

export default useAxios;