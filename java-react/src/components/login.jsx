import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {userlogin} from '../redux/action/login'
import { connect } from "react-redux";
import { Outlet, Link } from "react-router-dom";



const Login = (props) => {
   const dispatch = useDispatch();
    const [user, setuser] = useState({
    email: "",
    pass: "",
  });
  console.log(props)
  const { email, pass } = user;
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };
    const handlelogin=async () =>{
        dispatch(userlogin(user))
       setuser({
          email: "",
          pass: "",
        });
       
      }
  return(
     <div className="App">
        <div className="form">
          <div className='login'>
            <input type="text" placeholder='email' name="email"
                        value={email}
                       onChange={(e) => onInputChange(e)}></input>
            <input type="password" placeholder='password' name="pass"
                        value={pass}
                       onChange={(e) => onInputChange(e)}></input>
            <button onClick={handlelogin}>login</button>
            <p className='undermessage'> <Link to='/signup'>sign up</Link></p>
          </div>
        </div>
     </div>
  ) 
};
const mapStateToProps = (users) => {
  return {
  loginstate: users.login,

}}

export default connect(mapStateToProps, { userlogin})(Login) 

