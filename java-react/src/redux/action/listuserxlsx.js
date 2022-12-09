import * as actions from './actiontypes.js'
import axios from './axiosconfig'


export const userlistingxlsx= (data) => async (dispatch )=> {
  try{
 
    const res = await axios.post(`/sheetdata` ,data);
   console.log(res)
   
    dispatch({type:actions.LIST_USER_XLSX,payload:res.data})
  
  }catch(err){
 
    console.log(err)
  }
}