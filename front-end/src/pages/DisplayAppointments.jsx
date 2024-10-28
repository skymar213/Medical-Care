import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DisplayAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [patientNames, setPatientNames] = useState({});
  const [selectedTimes, setSelectedTimes] = useState({});
  const [appointmentTimes, setAppointmentTimes] = useState({});
  const userinfo = JSON.parse(localStorage.getItem('userinfo'));
  const idMedecin = userinfo?.idMedecin;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!idMedecin) {
        console.error('Missing idMedecin in userinfo');
        return;
      }

      try {
        const response = await fetch(`http://localhost:7777/ms-gestionRdv/medecin/${idMedecin}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAppointments(data);
        for (const appointment of data) {
          await fetchPatientName(appointment.idPatient);
          if (appointment.etat === 'accepter') {
            await fetchAppointmentTime(appointment.idr); // Fetch time for accepted appointments
          }
        }
      } catch (error) {
        console.error('Failed to fetch appointments', error);
      }
      
    };

    fetchAppointments();
  }, [idMedecin]);

  const fetchAppointmentTime = async (idr) => {
    try {
      const response = await fetch(`http://localhost:7777/ms-gestionRdv/heure/${idr}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const heure = await response.text(); // Assuming the response is plain text
      setAppointmentTimes(prevTimes => ({ ...prevTimes, [idr]: heure }));
    } catch (error) {
      console.error('Failed to fetch appointment time', error);
    }
  };
  const fetchPatientName = async (idPatient) => {
    try {
      const response = await fetch(`http://localhost:7777/ms-profile/getPatientName?id=${idPatient}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const patientName = await response.text();
      setPatientNames(prevNames => ({ ...prevNames, [idPatient]: patientName }));
    } catch (error) {
      console.error('Failed to fetch patient name', error);
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
  const handleCreateRecord = (appointment) => {
    navigate('/dashboard/CreateMedicalRecord', {
      state: {
        idRdv: appointment.idr,
        patientName: patientNames[appointment.idPatient],
        maladie: '', // Placeholder, fetch or derive as needed
        treatment: '' // Placeholder, fetch or derive as needed
      }
    });
  }

  const handleTimeChange = (idr, time) => {
    setSelectedTimes(prevTimes => ({ ...prevTimes, [idr]: time }));
  };

  const handleAccept = async (idr) => {
    const selectedTime = selectedTimes[idr]; // Retrieve the selected time for this appointment
    if (!selectedTime) {
      alert('Please select a time before accepting the appointment.');
      return;
    }
  
    try {
      // Include the selected time in the request URL http://localhost:7777/ms-gestionRdv/heure/${idr}?heure=${selectedTime}
      const response = await fetch(`http://localhost:7777/ms-gestionRdv/heure/${idr}?heure=${selectedTime}`, {
        method: 'PUT',
      });
      if (!response.ok) {
        throw new Error('Failed to update appointment status');
      }
      // Optionally, update the appointment list to reflect the change
      setAppointments(appointments.map(appointment => 
        appointment.idr === idr ? { ...appointment, etat: 'accepter', heure: selectedTime } : appointment
      ));
      alert('Appointment accepted successfully');
    } catch (error) {
      console.error('Failed to accept appointment', error);
      alert('Error accepting appointment');
    }
    try {
      const response = await fetch(`http://localhost:7777/ms-gestionRdv/etat/${idr}?etat=accepter`, {
        method: 'PUT',
      });
      if (!response.ok) {
        throw new Error('Failed to update appointment status');
      }
      // Optionally, update the appointment list to reflect the change
    } catch (error) {
      console.error('Failed to accept appointment', error);
      alert('Error accepting appointment');
    }
  };

  return (
    <div className="max-w-lg mx-auto px-6 py-8 bg-white shadow-lg rounded-md">
    <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Appointments</h2>
    <ul>
        {appointments.map((appointment) => (
            <li key={appointment.idr} className="flex items-center justify-between border-b border-gray-200 py-4 mb-4">
                <div>
                    <p className="text-xl font-bold mb-2">{patientNames[appointment.idPatient] || 'Loading name...'}</p>
                    <p className="text-md text-gray-500 mb-2">
                        <span className="font-semibold">Date:</span> {appointment.date}
                    </p>
                    {appointment.etat === 'accepter' ? (
                        <p className="text-md font-bold mb-2">Time: {appointmentTimes[appointment.idr]}</p>
                    ) : (
                        <input
                            type="time"
                            value={selectedTimes[appointment.idr] || ''}
                            onChange={(e) => handleTimeChange(appointment.idr, e.target.value)}
                            className="mt-2 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                        />
                    )}
                </div>
                <div className="flex space-x-3">
                    {appointment.etat !== 'accepter' && (
                        <button
                            onClick={() => handleAccept(appointment.idr)}
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
                        >
                            Accept
                        </button>
                    )}
                    <button
                        onClick={() => handleDelete(appointment.idr)}
                        className={`font-semibold py-2 px-4 rounded-md ${appointment.etat === 'accepter' ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                    >
                        {appointment.etat === 'accepter' ? 'Delete' : 'Reject'}
                    </button>
                    <button
                        onClick={() => handleCreateRecord(appointment)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                    >
                        Create Record
                    </button>
                </div>
            </li>
        ))}
    </ul>
</div>


  );
};

export default DisplayAppointments;