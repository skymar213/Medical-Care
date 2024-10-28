import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const CreateMedicalRecord = ({ setView }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { idRdv, patientName, maladie, traitement } = location.state || {};
  const [formData, setFormData] = useState({
    firstName: patientName, // Assuming you split or use this directly
    maladie: maladie,
    traitement: traitement
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:7777/ms-gestionRdv/dossier/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        rdvId: idRdv,
        firstName: formData.firstName, // Assuming you use firstName for patientName
        maladie: formData.disease,
        traitement: formData.traitement
      })
    });
    if (response.ok) {
      alert('Medical record created successfully');
       navigate('/dashboard/ViewMedicalRecords');
    } else {
      alert('Error creating medical record');
    }
  };
  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-xl mt-12">
    <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900">Create Medical Record</h2>
    <form onSubmit={handleSubmit} className="space-y-6">
        {/* Other form fields */}
        <div className="mb-4">
            <label htmlFor="disease" className="block text-sm font-medium text-gray-700">Disease</label>
            <input
                type="text"
                name="disease"
                id="disease"
                required
                onChange={handleChange}
                value={formData.disease || ''}
                className="mt-2 focus:ring-blue-900 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg p-2"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="traitement" className="block text-sm font-medium text-gray-700">Treatment</label>
            <input
                type="text"
                name="traitement"
                id="traitement"
                required
                onChange={handleChange}
                value={formData.traitement || ''}
                className="mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg p-2"
            />
        </div>
        {/* Submit button */}
        <div>
            <button
                type="submit"
                className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-lg text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Create Record
            </button>
        </div>
    </form>
</div>

  );
  
};

export default CreateMedicalRecord;
