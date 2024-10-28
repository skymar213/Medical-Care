import React, { useState,useEffect } from 'react';
import DoctorCard from '../../components/Doctors/DoctorCard';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchSpecialite, setSearchSpecialite] = useState('');
  const [searchWilaya, setSearchWilaya] = useState('');
  const userinfo = JSON.parse(localStorage.getItem('userinfo'));
  useEffect(() => {
    // Fetch doctors from the endpoint when the component mounts
    fetch('http://localhost:7777/ms-profile/medecins')
      .then(response => response.json())
      .then(data => setDoctors(data)) // Update state with fetched data
      .catch(error => console.error('Error fetching doctors:', error));
  }, []); // Empty dependency array means this effect runs once on mount
  

  const handleSearchByName = () => {
    const url = `http://localhost:7777/ms-profile/medecins/search?nom=${searchName}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error('Error fetching doctors by name:', error));
  };

  const handleSearchBySpecialite = () => {
    const url = `http://localhost:7777/ms-profile/medecins/searchSpecialite?specialite=${searchSpecialite}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error('Error fetching doctors by specialite:', error));
  };

  const handleSearchByWilaya = () => {
    const url = `http://localhost:7777/ms-profile/medecins/searchWilaya?wilaya=${searchWilaya}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error('Error fetching doctors by wilaya:', error));
  };

  return (
    <>
      <section className="bg-[#fff9ea]">
        {/* Search Inputs */}
        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
          <input
            type="search"
            className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer text-textColor"
            placeholder="Search By Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <button className="btn mt-0 rounded-[0px] rounded-r-md" onClick={handleSearchByName}>Search</button>
        </div>
        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
          <input
            type="search"
            className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer text-textColor"
            placeholder="Search By Specialization"
            value={searchSpecialite}
            onChange={(e) => setSearchSpecialite(e.target.value)}
          />
          <button className="btn mt-0 rounded-[0px] rounded-r-md" onClick={handleSearchBySpecialite}>Search</button>
        </div>
        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
          <input
            type="search"
            className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer text-textColor"
            placeholder="Search By Wilaya"
            value={searchWilaya}
            onChange={(e) => setSearchWilaya(e.target.value)}
          />
          <button className="btn mt-0 rounded-[0px] rounded-r-md" onClick={handleSearchByWilaya}>Search</button>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="ml-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
      {/* Existing JSX code for feedback section */}
    </>
  );
};

export default Doctors;

