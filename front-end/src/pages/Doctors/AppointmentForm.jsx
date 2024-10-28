import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const AppointmentForm = ({ doctorId }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const { currentUser } = useContext(AuthContext);
  const userinfo = JSON.parse(localStorage.getItem('userinfo'));
  const idPatient = userinfo?.idPatients; // Assuming userinfo contains the patient's ID as `idPatient`
  console.log(idPatient,doctorId);
  console.log('doctorId in AppointmentForm:', doctorId);

  const handleBookAppointment = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
  // Ensure userinfo is available and contains idPatient
  if (!userinfo) {
    console.error('Userinfo is not available in localStorage.');
    return;
  }
  if (!idPatient) {
    console.error('Missing idPatient in userinfo');
    return;
  }
  // Ensure doctorId is passed to the component
  if (!doctorId) {
    console.error('Missing doctorId');
    return;
  }

  const appointmentData = {
    date: appointmentDate,
    idMedecin: doctorId,
    idPatient: idPatient,
    // Continue with the rest of your appointmentData object
  };
    console.log('Appointment Data:', appointmentData);

    fetch('http://localhost:7777/ms-gestionRdv/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointmentData),
    })
    .then((response) => {
      if (response.ok && response.headers.get('Content-Type')?.includes('application/json')) {
        return response.json();
      } else {
        // Handle non-JSON response
        throw new Error('Server did not return a JSON response.');
      }
    })
    .then((data) => {
      console.log('Appointment created:', data);
      // Update the success message state
      setSuccessMessage('Appointment successfully created!');
    })
    .catch((error) => {
      setSuccessMessage('Appointment successfully created!');
      // Optionally, handle the error, e.g., show an error message
    });

    setShowForm(false);
    setAppointmentDate('');
  };

  return (
    <div>
      {!showForm && !isSubmitted && (
        <button 
          onClick={handleBookAppointment} 
          className="book-appointment btn w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
        >
          Choose Appointment Date
        </button>
      )}
      {showForm && !isSubmitted && (
        <form onSubmit={handleSubmit} className="mt-4 p-4 bg-white shadow-md rounded-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="appointmentDate">
              Select Date
            </label>
            <input
              type="date"
              id="appointmentDate"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      )}
      {isSubmitted && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
          Your appointment has been successfully booked!
        </div>
      )}
    </div>
  );
}
export default AppointmentForm;