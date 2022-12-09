import * as actions from '../action/actiontypes.js'
const initialState = {

    resp: null, 
    err:null

  }

  export function loginReducer(state = initialState, action){
    switch(action.type){

      case actions.USER_LOGIN :
        return {
          ...state,
          resp:action.payload
        }
      
      default:
        return state
    } 
   
  
  }