import { combineReducers } from "redux";
import {loginReducer} from "./loginreducer";
import { signupReducer } from "./signupreducer";
import { userlistReducer } from "./userlistreducer";
import {listuserReducer} from './listuserxlsx'

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  userlist:userlistReducer,
  xlsxdata:listuserReducer,

});

export default rootReducer;