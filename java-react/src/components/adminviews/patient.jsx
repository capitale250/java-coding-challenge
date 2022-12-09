import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {userlistingxlsx} from '../../redux/action/listuserxlsx'
import { connect } from "react-redux";
import Userxlsxtable from "../xlsxtable";

const Usertable = (props) => {
   const dispatch = useDispatch();
  const User = localStorage.getItem("role")
    const data={
      number:'0'
    }
    const {userliststate}=props
    useEffect(() =>{
    dispatch(userlistingxlsx(data))
    }, [])
    useEffect(() => {
    if (User !== 'Admin') {
     window.location.replace("/login");
    }
  }, []);

  return(<>
    {userliststate.resp!==null?(
    <Userxlsxtable  props={userliststate.resp.responce} ></Userxlsxtable>)
    
    :null}
    </>
)}
const mapStateToProps = (users) => {
  return {
  userliststate: users.xlsxdata,

}}

export default connect(mapStateToProps, {userlistingxlsx})(Usertable) 
