import * as actions from './actiontypes.js'
import axios from './axiosconfig'


export const userlisting= (data) => async (dispatch )=> {
  try{
 
    const res = await axios.post(`/alluser` ,data);
   console.log(res)
   
    dispatch({type:actions.LIST_USERS,payload:res.data})
  
  }catch(err){
 
    console.log(err)
  }
}