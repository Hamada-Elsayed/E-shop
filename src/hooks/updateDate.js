import baseURL from "../API/baseURL";


const useupdateDataWithImage = async (url, parmas) => {
    const config={
        headers:{"Content-Type":"multipart/form-data"}
    }
    const res = await baseURL.put(url, parmas ,config);
    console.log(res.status)
    return res;
}
const useupdatetData = async (url, parmas) => {
  const res = await baseURL.post(url, parmas);
  return res;
}
export {useupdateDataWithImage,useupdatetData}