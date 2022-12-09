import * as actions from '../action/actiontypes.js'
const initialState = {

    resp: null, 
    err:null

  }

  export function listuserReducer(state = initialState, action){
    switch(action.type){

      case actions.LIST_USER_XLSX :
        return {
          ...state,
          resp:action.payload
        }
      
      default:
        return state
    } 
   
  
  }