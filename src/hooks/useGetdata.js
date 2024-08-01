import baseURL from "../API/baseURL"

const useGetdata  = async(url,param)=>{
    const res = await baseURL.get(url,param) ;
    return res.data;
}

const useGetDataToken = async (url, parmas) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
    const res = await baseURL.get(url, config);
    return res.data;
}
export  {useGetdata, useGetDataToken};

