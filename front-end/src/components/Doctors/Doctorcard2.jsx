import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import starIcon from '../../assets/images/Star.png';
import userImg from "../../assets/images/doctor-img03.png";
import Map from '../../pages/Doctors/Map';

const Doctorcard2 = ({ doctor }) => {
    const { idMedecin, nom, prenom, dateNaissance, specialite, latitude, longitude, wilaya, email, distance } = doctor;
    const distanceInKm = distance / 1000;
    console.log(latitude, longitude);
// Formatage de la distance avec deux décimales
const formattedDistance = distanceInKm.toFixed(2);
    const handleDoctorPress = () => { 
        navigation.navigate(`/doctors/${idMedecin}`, { doctor }); 
    };

   return (
    <div className="p-3 lg:p-5">
        <div>
            {/* Assuming you have a photo attribute in your doctor object */}
            <img src={userImg} alt="Doctor's Photo" />
        </div>
        <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
            {nom} {prenom}
        </h2>
        <div className="mt-[18px] lg:mt-5 flex justify-between items-center">
            <div>
                <div className="flex items-center justify-between max-w-[320px]">
                    <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] lg:text-[16px] lg:leading-7 font-semibold rounded">
                        {specialite}
                    </span>
                </div>
                <div className="mt-4 flex">
                    <p className="text-[14px] leading-7 lg:text-[16px] lg:leading-[30px] text-headingColor">
                        <span className="font-semibold bg-[#CCF0F3] px-2 py-1 rounded">Distance:</span> {formattedDistance} km
                    </p>
                </div>
                <div className="mt-4 flex">
                    <p className="text-[14px] leading-7 lg:text-[16px] lg:leading-[30px] text-headingColor">
                        <span className="font-semibold bg-[#CCF0F3] px-2 py-1 rounded">Wilaya:</span> {wilaya}
                    </p>
                </div>
                {/* <Link to={{
                    pathname: '/map',
                    state: {
                        latitude: doctor.latitude,
                        longitude: doctor.longitude
                    }
                }}>
                    View Map
                </Link> */}
            </div>
            <Link to={{
                    pathname: '/map',
                    state: {
                        latitude: doctor.latitude,
                        longitude: doctor.longitude
                    }
                }}><button  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
            </button></Link>
            
        </div>
    </div>
);
};

export default Doctorcard2;
