import baseURL from "../API/baseURL"

const useDeletedata  = async(url,param)=>{
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
    const res = await baseURL.delete(url,config,param) ;
    return res.data;
}

export default useDeletedata;