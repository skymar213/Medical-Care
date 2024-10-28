import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import starIcon from '../../assets/images/Star.png';
import userImg from "../../assets/images/doctor-img03.png";
import Map from '../../pages/Doctors/Map';

const DoctorCard = ({ doctor }) => {
    const { idMedecin, nom, prenom, dateNaissance, specialite, latitude, longitude, wilaya, email, distance } = doctor;
    const distanceInKm = distance / 1000;

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
        <div className="flex flex-col">
            <div className="mt-2 lg:mt-4">
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] lg:text-[16px] lg:leading-7 font-semibold rounded">
                    {specialite}
                </span>
            </div>
            <div className="mt-4">
                <p className="text-[14px] leading-7 lg:text-[16px] lg:leading-[30px] text-headingColor">
                    <span className="font-semibold bg-[#CCF0F3] px-2 py-1 rounded">Wilaya:</span> {wilaya}
                </p>
            </div>
        </div>
        <button onClick={handleDoctorPress} className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
            <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </button>
    </div>
</div>

    );
};

export default DoctorCard;
