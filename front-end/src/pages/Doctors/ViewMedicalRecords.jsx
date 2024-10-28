import React, { useEffect, useState } from 'react';

const ViewMedicalRecords = ({ setView }) => {
  const [records, setRecords] = useState([]);
  const [editRecord, setEditRecord] = useState(null);
  const [formData, setFormData] = useState({
  });
  const userinfo = JSON.parse(localStorage.getItem('userinfo'));
  const idMedecin = userinfo?.idMedecin;
  console.log(idMedecin);
 

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await fetch(`http://localhost:7777/ms-gestionRdv/dossier/medecin/${idMedecin}`);
      console.log(response);
      const data = await response.json();
      // Assuming the data is an array of records
      const formattedData = data.map(record => ({
        id: record.idD, // Assuming you use id for uniquely identifying records in the UI
        rdvId: record.rdvId,
        firstName: record.firstName, // Since firstName and lastName are not provided by the new endpoint, you might need to fetch or derive them from another source if necessary
        maladie: record.maladie,
        traitement: record.traitement
      }));
      setRecords(formattedData);
    };
  
    fetchRecords();
  }, []);

  const handleEditClick = (record) => {
    setEditRecord(record.id);
    setFormData({
      maladie: record.maladie,
      traitement: record.traitement
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:7777/ms-gestionRdv/dossier/update/${editRecord}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      alert('Medical record updated successfully');
      setEditRecord(null);
      const updatedRecord = await response.json();
      setRecords(records.map(record => record.id === editRecord ? updatedRecord : record));
      setFormData({
        maladie: '',
        traitement: ''
      });
    } else {
      alert('Error updating medical record');
    }
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:7777/ms-gestionRdv/dossier/delete/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      alert('Medical record deleted successfully');
      setRecords(records.filter(record => record.id !== id));
    } else {
      alert('Error deleting medical record');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Medical Records</h2>
      {editRecord ? (
        <form onSubmit={handleSubmit}>
        
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-600 mb-2">Name of the Disease</label>
            <input 
              type="text" 
              name="maladie" 
              value={formData.maladie} 
              onChange={handleChange} 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-600 mb-2">Description of the Treatment</label>
            <textarea 
              name="traitement" 
              value={formData.traitement} 
              onChange={handleChange} 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            ></textarea>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              type="submit" 
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
            >
              Save
            </button>
            <button 
              type="button" 
              className="bg-gray-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200" 
              onClick={() => setEditRecord(null)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <ul className="space-y-4">
          {records.map((record) => (
            <li key={record.id} className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>

                <span className="block text-gray-800 font-bold text-lg">First name:{record.firstName}</span>
              
                  <span className="block  text-gray-600" style={{ fontSize: '0.930rem'}}>
                    <span className="font-bold">Disease:</span> {record.maladie}
                  </span>
                  <span className="block  text-gray-900" style={{ fontSize: '0.930rem'}}>
                    <span className="font-bold">Treatment:</span> {record.traitement}
                  </span>

              </div>
              <div className="flex mt-4 sm:mt-0 space-x-4">
                <button 
                  className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition duration-200" 
                  onClick={() => handleEditClick(record)}
                >
                  Edit
                </button>
                <button 
                  className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transition duration-200" 
                  onClick={() => handleDelete(record.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button 
        className="bg-gray-600 text-white font-semibold px-6 py-3 rounded-lg mt-6 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200" 
        onClick={() => setView('welcome')}
      >
        Back
      </button>
    </div>
  );
  
};

export default ViewMedicalRecords;
