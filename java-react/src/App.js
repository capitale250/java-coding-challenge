import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/login.jsx';
import Navbar from './components/navbar';
import Signup from './components/signup';
import Table from './components/table';
import Tablexlsx from './components/pharmaciest';
import Patientclx from './components/adminviews/patient'
import Pharmacieclx from './components/adminviews/pharmafile'
import Physicianclx from './components/adminviews/physician'



function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
       <Route index element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/Table" element={<Table/>} />
      <Route path="/Tablexlsx" element={<Tablexlsx/>} />
      <Route path='/patientxlsx' element={<Patientclx/>}/>
      <Route path='/pharmaxlsx' element={<Pharmacieclx/>}/>
      <Route path='/physicianclx' element={<Physicianclx/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

