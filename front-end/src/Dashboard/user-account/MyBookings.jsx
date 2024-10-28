import React, { useEffect, useState } from 'react';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [medecinNames, setMedecinNames] = useState({}); // Step 1: State to store medecin names
  const [appointmentStatuses, setAppointmentStatuses] = useState({}); // State to store appointment statuses
  const [appointmentTimes, setAppointmentTimes] = useState({}); // State to store appointment times

  useEffect(() => {
    const fetchAppointments = async () => {
      const userinfo = JSON.parse(localStorage.getItem('userinfo'));
      const idPatient = userinfo?.idPatients;
      
      if (!idPatient) {
        console.error('Missing idPatient in userinfo');
        return;
      }

      const response = await fetch(`http://localhost:7777/ms-gestionRdv/patient/${idPatient}`);
      if (response.ok) {
        const data = await response.json();
        setAppointments(data);
        // Fetch medecin names for each appointment
        data.forEach(appointment => {
          fetchMedecinName(appointment.idMedecin);
          fetchAppointmentStatus(appointment.idr); // Fetch status for each appointment
          fetchAppointmentTime(appointment.idr); // Fetch time for each appointment
        });
      } else {
        console.error('Failed to fetch appointments');
      }
    };

    fetchAppointments();
  }, []);

  const fetchAppointmentStatus = async (idr) => {
    const response = await fetch(`http://localhost:7777/ms-gestionRdv/etat/${idr}`);
    if (response.ok) {
      const status = await response.text(); // Assuming the response is plain text
      setAppointmentStatuses(prevStatuses => ({ ...prevStatuses, [idr]: status }));
    } else {
      console.error('Failed to fetch appointment status');
    }
  };

  const fetchAppointmentTime = async (idr) => {
    const response = await fetch(`http://localhost:7777/ms-gestionRdv/heure/${idr}`);
    if (response.ok) {
      const time = await response.text(); // Assuming the response is plain text
      setAppointmentTimes(prevTimes => ({ ...prevTimes, [idr]: time }));
    } else {
      console.error('Failed to fetch appointment time');
    }
  };

  // Step 2: Function to fetch medecin name
  const fetchMedecinName = async (idMedecin) => {
    const response = await fetch(`http://localhost:7777/ms-profile/getMedecinName?id=${idMedecin}`);
    if (response.ok) {
      const medecinName = await response.text(); // Assuming the response is plain text
      setMedecinNames(prevNames => ({ ...prevNames, [idMedecin]: medecinName }));
    } else {
      console.error('Failed to fetch medecin name');
    }
  };
  
  const handleDelete = async (idr) => {
    try {
      const response = await fetch(`http://localhost:7777/ms-gestionRdv/delete/${idr}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        alert('Appointment deleted successfully');
        setAppointments(appointments.filter(appointment => appointment.idr !== idr));
      } else {
        alert('Error deleting appointment');
      }
    } catch (error) {
      console.error('Failed to delete appointment', error);
      alert('Error deleting appointment');
    }
  };
  return (
    <div className="max-w-lg px-4 py-8 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.idr} className="flex items-center justify-between border-b border-gray-300 py-4">
            <div className="space-y-2">
              {/* Existing fields */}
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Date:</span> {appointment.date}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Doctor Name:</span> {medecinNames[appointment.idMedecin]}
              </p>
              {/* New fields for status and time */}
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Status:</span> {appointmentStatuses[appointment.idr] || 'en attente'}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Time:</span> {appointmentTimes[appointment.idr] || 'N/A'}
              </p>
            </div>
            <button
              onClick={() => handleDelete(appointment.idr)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded transition duration-300"
            >
              Cancel
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default MyAppointments;