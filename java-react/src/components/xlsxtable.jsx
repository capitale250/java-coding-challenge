import React from "react";
import { useState, useEffect } from "react";
import {generateCSV} from "../helpers/exporttocsv"

const Userxlsxtable = (props) => {
    
    const [xlsxdata, setxlsxdata] = useState([]);
     useEffect(() => { 
        setxlsxdata(props.props)
     }, [xlsxdata]);
   const csvHeader = [
        { label: "2000", key: "b2000b" },
        { label: "2001", key: "b2001b" },
        { label: "2002", key: "b2002b" },
        ];
    const download=()=>{
        generateCSV(csvHeader,xlsxdata,'download')
    }
   console.log(props)
  return(
    <div className="App">
     <div className="form">
      <div className="download">
        <button onClick={download}>download</button>
      </div>
      <table>

        <thead className='heading'>
          <tr>
          <th>2000</th>
          <th>2001</th>
          <th>2002</th>
          </tr>
        </thead>
        <tbody>
            {xlsxdata!==null? xlsxdata.map((user)=>{
                return(
                <tr>
                    <td className='divs2'>2000</td>
                    <td>{user.b2000b}</td>
                    <td className='divs2'>2001</td>
                    <td>{user.b2001b}</td>
                    <td className='divs2'>2002</td>
                    <td >{user.b2002b}</td>
                </tr>)
            }):null}
        </tbody>
      </table>
      </div>
      </div>
  );
}

export default Userxlsxtable