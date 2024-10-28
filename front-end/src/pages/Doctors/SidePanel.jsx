import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';

const SidePanel = ({ idMedecin }) => {
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);

    console.log('idMedecin in SidePanel:', idMedecin);

    return (
        <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
            <div className='flex items-center justify-between'>
                <p className='text__para mt-0 font-semibold'>Ticket Price</p>
                <span className='text-[16px] leading-7 lg:text[22px] lg:leading-8 text-headingColor font-bold'>
                    3000 DA
                </span>
            </div>
            
            <button
                className='btn px-2 w-full rounded-md'
                onClick={() => setShowAppointmentForm(!showAppointmentForm)}
            >
                Book Appointment
            </button>
            {showAppointmentForm && <AppointmentForm  doctorId={idMedecin} />}
        
        </div>
    );
};

export default SidePanel;