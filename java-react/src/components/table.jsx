import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {userlisting} from '../redux/action/listusers'
import { connect } from "react-redux";
import {generateCSV} from "../helpers/exporttocsv"


const Usertable = (props) => {
    const [xlsxdata, setxlsxdata] = useState([]);

   const dispatch = useDispatch();
    const data={
      Role:"Admin"
    }
    const {userliststate}=props
    useEffect(() =>{
    dispatch(userlisting(data))
    }, [])
    const csvHeader = [
        { label: "First Name", key: "FirstName" },
        { label: "Last Name", key: "LastName" },
        { label: "Role", key: "Role" },
        ];
    const userlist=userliststate.resp!==null?userliststate.resp.responce:[]
    useEffect(() => { 
        setxlsxdata(userlist)
     }, [xlsxdata]);
    const download=()=>{
        generateCSV(csvHeader,xlsxdata,'download')
    }
    
    console.log(userlist)
    const User = localStorage.getItem("role")
    useEffect(() => {
    if (User !== 'Admin') {
     window.location.replace("/login");
    }
  }, []);
  return(
    <div className="App">
       <div className="form">
        <div className="download">
        <button onClick={download}>download</button>
      </div>
    <table>
        <thead className='heading'>
          <tr>
          <th>first name</th>
          <th>last name</th>
          <th>role</th>
          </tr>
        </thead>
    <tbody>
      {userlist.length>0? userlist.map((user)=>{
        return(
         <tr>
            <td className='divs2'>name</td>
            <td>{user.FirstName}</td>
            <td>{user.LastName}</td>
            <td className='divs2'>role</td>
            <td >{user.Role}</td>
        </tr>)
      }):null}
     
    

    </tbody>
      </table>
      </div>
      </div>
  );
}
const mapStateToProps = (users) => {
  return {
  userliststate: users.userlist,

}}

export default connect(mapStateToProps, {userlisting})(Usertable) 
