import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {usersignup} from '../redux/action/signup'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Signup = (props) => {
    const [userRegister, setuserRegister] = useState({
        email: "",
        pass: "",
        FirstName:"",
        LastName:"",
        Age:"",
        Gender:"",
        Role:""

   });
   console.log(props)
   const dispatch = useDispatch();
   const { email, pass ,FirstName,LastName,Age,Gender,Role } = userRegister;
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setuserRegister({ ...userRegister, [name]: value });
    };
    const handlesignup=async () =>{
     dispatch(usersignup(userRegister))
     setuserRegister({
         email: "",
        pass: "",
        FirstName:"",
        LastName:"",
        Age:"",
        Gender:"",
        Role:""
     });
       
      }
  return(
     <div className="App">
        <div className="form">
            <div className='register'>
            <div className='rowInput'>
                <input type="text" placeholder='email' name="email"
                        value={email}
                       onChange={(e) => onInputChange(e)}></input>
                <div className='divider'></div>
                <input type="password" placeholder='password' name="pass"
                        value={pass}
                       onChange={(e) => onInputChange(e)}></input>
            </div>
            <div className='rowInput'>
                <input type="text" placeholder='first name' name="FirstName"
                        value={FirstName}
                       onChange={(e) => onInputChange(e)}></input>
                <div className='divider'></div>
                <input type="text" placeholder='last name' name="LastName"
                        value={LastName}
                       onChange={(e) => onInputChange(e)}></input>
            </div>
            <div className='oneinput'>
                  <select name="Role" 
                        value={Role}
                       onChange={(e) => onInputChange(e)}>
                    <option value="">select role</option>
                    <option value="Pharmacis">Pharmacist</option>
                    <option value="Patient">Patient</option>
                    <option value="Physician">Physician</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>
            <div className='rowInput'>
                <select name="Gender" 
                        value={Gender}
                       onChange={(e) => onInputChange(e)}>
                    <option value="">SELECT GENDER</option>
                    <option value="male">MALE</option>
                    <option value="female">FEMALE</option>
                </select>
                <div className='divider'></div>
                <input type="number" placeholder='age' name="Age"
                        value={Age}
                       onChange={(e) => onInputChange(e)}></input>
            </div>
            <button onClick={handlesignup}>sign up</button>
            <p className='undermessage'> <Link to='/login'>login</Link></p>
            </div>
        </div>
     </div>
  ) 
};
const mapStateToProps = (users) => {
  return {
  registerstate: users.signup,

}}

export default connect(mapStateToProps, { usersignup})(Signup) 
