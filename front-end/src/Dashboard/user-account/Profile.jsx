import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    prenom: '',
    password: '',
    dateNaissance: ''
    // Add other fields as necessary
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const userinfo = JSON.parse(localStorage.getItem('userinfo'));
  const idPatient = userinfo?.idPatients;

  useEffect(() => {
    // Fetch the current profile data using idPatient
    // Populate the formData state with that data
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    // Handle file upload or set the file to state to be handled in submitHandler
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Handle file upload here if necessary before sending formData

    try {
      const response = await fetch(`http://localhost:7777/ms-profile/patients/${idPatient}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Include authorization header if your API requires it
          // 'Authorization': `Bearer ${yourAuthToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      console.log('Profile updated successfully');
      setSuccessMessage('Profile updated successfully');
      localStorage.setItem('userinfo', JSON.stringify(formData));

    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error case here, e.g., show an error message
    }
  };

  return (
    <section>
      <div>
        <form onSubmit={submitHandler}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pr-4 py-3 border-solid border-[#0066ff61] border-2 focus:outline-none
                focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                placeholder:text-textColor cursor-pointer rounded-md"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Nom"
              name="nom"
              value={formData.nom}
              onChange={handleInputChange}
              className="w-full pr-4 py-3 border-solid border-[#0066ff61] border-2 focus:outline-none
                focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                placeholder:text-textColor cursor-pointer rounded-md"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleInputChange}
              className="w-full pr-4 py-3 border-solid border-[#0066ff61] border-2 focus:outline-none
                focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                placeholder:text-textColor cursor-pointer rounded-md"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pr-4 py-3 border-solid border-[#0066ff61] border-2 focus:outline-none
                focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                placeholder:text-textColor cursor-pointer rounded-md"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="date"
              placeholder="Date de Naissance"
              name="dateNaissance"
              value={formData.dateNaissance}
              onChange={handleInputChange}
              className="w-full pr-4 py-3 border-solid border-[#0066ff61] border-2 focus:outline-none
                focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                placeholder:text-textColor cursor-pointer rounded-md"
              required
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
            >
              Update
            </button>
          </div>
        </form>
        {successMessage && (
          <div className="mt-5 p-4 text-green-700 bg-green-100 rounded-md">
            {successMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
