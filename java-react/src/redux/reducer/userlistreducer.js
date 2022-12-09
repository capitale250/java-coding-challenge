import * as actions from '../action/actiontypes.js'
const initialState = {

    resp: null, 
    err:null

  }

  export function userlistReducer(state = initialState, action){
    switch(action.type){

      case actions.LIST_USERS :
        return {
          ...state,
          resp:action.payload
        }
      
      default:
        return state
    } 
   
  
  }