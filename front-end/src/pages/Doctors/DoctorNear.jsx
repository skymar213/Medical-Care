import React, { useState, useEffect } from 'react';

import Doctorcard2 from '../../components/Doctors/Doctorcard2';

const DoctorNear = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchSpecialite, setSearchSpecialite] = useState('');
  const [searchWilaya, setSearchWilaya] = useState('');
  const [userPosition, setUserPosition] = useState();
  const [searchDistance, setSearchDistance] = useState(); // Default distance value
  const userinfo = JSON.parse(localStorage.getItem('userinfo'));
  const distanceInKm = searchDistance / 1000;
  console.log(userPosition); //

  const fetchUserPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('User position:', latitude, longitude);
            setUserPosition({ latitude, longitude });
          // You can now use latitude and longitude to fetch doctors near the user
          // For example, by adding these as parameters to your fetchDoctors function
        },
        (error) => {
          console.error('Error getting user position:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    fetchUserPosition();
    // You might want to call fetchDoctors here as well, possibly passing the user's position
  }, []);
  useEffect(() => {
    // Ensure userPosition is not null and its properties are defined before fetching doctors
    if (userPosition && userPosition.latitude && userPosition.longitude) {
      fetchDoctors();
    }
  }, [distanceInKm, userPosition]);  // Include searchDistance in the dependency array // Include searchDistance in the dependency array

  const fetchDoctors = () => {
    if (!userPosition || userPosition.latitude === undefined || userPosition.longitude === undefined) {
        console.error('User position is not available.');
        return; // Exit the function early
      }
    const url = `http://localhost:7777/ms-rech-avancee/recherche-avancee?latitude=${userPosition.latitude}&longitude=${userPosition.longitude}&distanceMax=${searchDistance}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        return response.json();
      })
      
      .then(data => setDoctors(data))
      
      .catch(error => console.error('Error fetching doctors:', error));
  };

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
            type="number"
            className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer text-textColor"
            placeholder="Search Within Distance (km)"
            value={typeof searchDistance === 'number' ? searchDistance / 1000 : ''}
            onChange={(e) => setSearchDistance(parseInt(e.target.value*1000))}
          />
          <button className="btn mt-0 rounded-[0px] rounded-r-md" onClick={fetchDoctors}>Search</button>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="ml-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4">
            {doctors.map((doctor) => (
              <Doctorcard2 key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
      {/* Existing JSX code for feedback section */}
    </>
  );
};

export default DoctorNear;
