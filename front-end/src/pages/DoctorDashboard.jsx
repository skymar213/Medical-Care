import React, { useState } from 'react';
import CreateMedicalRecord from './CreateMedicalRecord';
import DisplayAppointments from './DisplayAppointments';
import ViewMedicalRecords from '../pages/Doctors/ViewMedicalRecords';
import dashboard from'../assets/images/dashboard3c.png';

const DoctorDashboard = () => {
  const [view, setView] = useState('welcome');

  return (
      <div className="container mx-auto p-4">
        {view === 'welcome' && (
          <div className="text-center">
            <h1 className="text-2xl font-bold mt-5 mb-6">Welcome to Your Dashboard, Doctor.</h1>

            <div className="flex justify-center items-center">
              <img src={dashboard} alt="Dashboard" />
            </div>
    
            <div className="flex gap-3 justify-center sm:flex-row flex-col ">
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setView('records')} > View All Medical Records </button>

              <button className=" text-white px-4 py-2 rounded bg-purple-800" onClick={() => setView('appointments')} > Display the Appointments </button>
            </div>
          </div>
        )}
        {view === 'create' && <CreateMedicalRecord setView={setView} />}
        {view === 'appointments' && <DisplayAppointments setView={setView} />}
        {view === 'records' && <ViewMedicalRecords setView={setView} />}
      </div>
    );
};

export default DoctorDashboard;
