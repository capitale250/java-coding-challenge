import * as actions from './actiontypes.js'
import axios from './axiosconfig'


export const usersignup= (data) => async (dispatch )=> {
  try{
    // console.log(data)
    const res = await axios.post(`/Signup` ,data);
    // if(res.data.responce){ alert(res.data.responce.message)}
      if(res.data.response!==null){
      alert(res.data.response.message)
    }
   
   console.log(res,"retyuytrtytrtytrtytrtr")
   
    dispatch({type:actions.USER_SIGNUP,payload:res.data})
  
  }catch(err){
 
    console.log(err)
  }
}