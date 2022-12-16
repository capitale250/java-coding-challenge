import * as actions from './actiontypes.js'
import axios from './axiosconfig'


export const userlogin= (data) => async (dispatch )=> {
  try{
 
    const res = await axios.post(`/login` ,data);
    // console.log(res.data.message)
    if(res.data.response.data!=='null'){
      alert(res.data.response.message)
      localStorage.setItem("role", res.data.response.data.Role);
      if(res.data.response.data.Role=='Admin'){
        window.location.replace("/Table")
      }else{
        window.location.replace("/Tablexlsx");
      }

    }else{
      alert(res.data.response.message)
    }
    dispatch({type:actions.USER_LOGIN,payload:res.data})
    

  
  }catch(err){
 
    console.log(err)
  }
}