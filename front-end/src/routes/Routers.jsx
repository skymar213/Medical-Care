import React from 'react';
import Home from '../pages/Home';

import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import MyAccount from '../Dashboard/user-account/MyAccount';
import {Routes,Route} from 'react-router-dom';
import FeedbackForm from '../pages/Doctors/FeedbackForm';
import DoctorDashboard from '../pages/DoctorDashboard';
import CreateMedicalRecord from '../pages/CreateMedicalRecord';
import ViewMedicalRecords from '../pages/Doctors/ViewMedicalRecords';
import DoctorNear from '../pages/Doctors/DoctorNear';
import { ImJoomla } from 'react-icons/im';
import Map from '../pages/Doctors/Map';



const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Signup/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='/neardoctors' element={<DoctorNear></DoctorNear>} />
      <Route path='doctors' element={<Doctors/>} />1
      <Route path='dashboard' element={<DoctorDashboard/>} />
      <Route path='/map' element={<Map/>} />
      <Route path='/dashboard/ViewMedicalRecords' element={<ViewMedicalRecords/>} />
      <Route path='dashboard/CreateMedicalRecord' element={<CreateMedicalRecord/>} />
      <Route path="/doctors/:idMedecin" element={<DoctorDetails />} />
      <Route path='users/profile/me' element={<MyAccount/>} />
    </Routes>
  )
}

export default Routers