import * as actions from './actiontypes.js'
import axios from './axiosconfig'


export const usersignup= (data) => async (dispatch )=> {
  try{
 
    const res = await axios.post(`/Signup` ,data);
    alert(res.data.responce.message)
   console.log(res)
   
    dispatch({type:actions.USER_SIGNUP,payload:res.data})
  
  }catch(err){
 
    console.log(err)
  }
}