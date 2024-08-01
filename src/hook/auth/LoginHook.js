import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loginUseraction } from "../../Redux/actions/auth-action";
import notify from "../notification";

const LoginHook = () => {
  const dispatch = useDispatch();
  const [email,setemail] = useState();
  const [password,setpassword] = useState();
  const [ loading,setloading] = useState(true);


  const onchangeemail = (e)=>{
    setemail(e.target.value)
  }

  const onchangepassword = (e)=>{
    setpassword(e.target.value)
  }



  const onSubmit = async(event)=>{
    event.preventDefault();
    setloading(true);
    await dispatch(loginUseraction({
      email,
      password,
      
    }))

    setloading(false);
  }

  const res = useSelector(state=>state.Auth.loginuser);
  console.log(res)

  useEffect(()=>{
    if(loading === false){

      if(res){
        console.log(res)
        if(res.data.token){
          localStorage.setItem("token",res.data.token);
          localStorage.setItem('user',JSON.stringify(res.data.data))
        }
        notify('تم تسجيل الدخول ',"success")
        setTimeout(() => {
          window.location.href= '/E-commerce'
        }, 1000);
      }


    }
  },[loading])

  return[email,password,onchangeemail,onchangepassword,onSubmit]


}

export default LoginHook
