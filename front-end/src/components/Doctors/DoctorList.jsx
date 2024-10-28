import React from 'react'
import {doctors} from '../../assets/data/doctors';
import DoctorCard from './DoctorCard';
const DoctorList = ({ limit }) => {

  const displayedDoctors = limit ? doctors.slice(0, limit) : doctors;

    return (
        <div className=" ml-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {displayedDoctors.map(doctor => (
                <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
        </div>
      );
}

export default DoctorList