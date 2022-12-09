import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {userlistingxlsx} from '../redux/action/listuserxlsx'
import { connect } from "react-redux";
import Userxlsxtable from "./xlsxtable";


const Usertable = (props) => {
   const dispatch = useDispatch();
  const User = localStorage.getItem("role")
  console.log(User)
  var num 
//    useEffect(() => {
    if (User === 'Pharmacis') {
        console.log(User)
        num='2'
    }
    if (User == 'Physician') {
        num='1'
    }
    if (User == 'Patient') {
        num='0'
    }
//   }, []);
    const data={
      number:num
    }
    console.log(data)
    const {userliststate}=props
    useEffect(() =>{
    dispatch(userlistingxlsx(data))
    }, [])
   
    // const userlist=userliststate.resp!==null?userliststate.resp.responce:[]
    console.log(userliststate)
    useEffect(() => {
    if (!User) {
     window.location.replace("/login");
    }
  }, []);
  return(
   <>
    {userliststate.resp!==null?(
    <Userxlsxtable  props={userliststate.resp.responce} ></Userxlsxtable>)
    
    :null}
    </>
  );
}
const mapStateToProps = (users) => {
  return {
  userliststate: users.xlsxdata,

}}

export default connect(mapStateToProps, {userlistingxlsx})(Usertable) 
