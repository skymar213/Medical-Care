import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import starIcon from '../../assets/images/Star.png';
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import userImg from "../../assets/images/doctor-img03.png";
import SidePanel from './SidePanel';

const DoctorDetails = () => {
  const { idMedecin } = useParams();
  const [doctor, setDoctor] = useState(null);
  console.log('idMededcin:', idMedecin);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await fetch(`http://localhost:7777/ms-profile/medecins/${idMedecin}`);
        if (!response.ok) {
          throw new Error('Doctor not found');
        }
        const data = await response.json();
        setDoctor(data);
      } catch (error) {
        console.error('Error fetching doctor details:', error);
      }
    };

    fetchDoctorDetails();
  }, [idMedecin]);

  if (!doctor) return <p>Loading doctor details...</p>;

  const { nom, prenom, specialite, dateNaissance, latitude, longitude, wilaya, email, avgRating, totalRating, totalPatients, hospital } = doctor;

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={userImg} alt="Doctor's Photo" className="w-full" />
              </figure>
              <div className="bg-white p-4 rounded-lg shadow-md">
  <span className="bg-blue-200 text-blue-900 py-1 px-2 rounded font-semibold">
    {specialite}
  </span>
  <h3 className="text-xl font-bold mt-4">
    {prenom} {nom}
  </h3>
  <p className="text-gray-700 mt-1">Date of Birth: {dateNaissance}</p>
  <p className="text-gray-700 mt-1">Email: {email}</p>
  <p className="text-gray-700 mt-1">Wilaya: {wilaya}</p>
</div>
            </div>
            <DoctorAbout />
            <Feedback />
          </div>
          <div>
          <SidePanel idMedecin={idMedecin} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;