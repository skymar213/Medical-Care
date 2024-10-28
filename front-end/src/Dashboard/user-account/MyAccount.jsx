import React, { useState, useEffect } from "react";
import userImg from "../../assets/images/doctor-img01.png";
import MyBookings from "./MyBookings";
import Profile from "./Profile";
import { Link } from 'react-router-dom';

const MyAccount = () => {
  const [tab, setTab] = useState('bookings');
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userinfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);
  const userinfo = JSON.parse(localStorage.getItem('userinfo'));
  const userRole = userinfo?.role; 

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="pb-[50px] px-[30px] rounded-md">
            <div className="flex items-center justify-center">
              <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                <img
                  src={userImg}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </figure>
            </div>
            <div className="text-center mt-4">
              {userInfo ? (
                <>
                  <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                    {userInfo.nom} {userInfo.prenom}
                  </h3>
                  <p className="text-textColor text-[15px] leading-6 font-medium">
                    Email: {userInfo.email}
                  </p>
                  <p className="text-textColor text-[15px] leading-6 font-medium">
                    Date of Birth: <span className="ml-2 text-headingColor">{userInfo.dateNaissance}</span>
                  </p>
               
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <div className="mt-[50px] md:mt-[100px]">
              {/* Delete Account Button */}
              <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
                Delete account
              </button>
            </div>
          </div>
          <div className="md:col-span-2 md:px-[30px]">
            <div>
            {userRole === 'patient' && (
    <button onClick={() => setTab('bookings')} className={`${tab === 'bookings' && 'bg-primaryColor text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
    My Bookings
  </button>
      )}
            
              <button onClick={() => setTab('settings')} className={`${tab === 'settings' && 'bg-primaryColor text-white font-normal'} py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
                Profile Settings
              </button>
            </div>
            {userRole === 'patient' && (
       tab === 'bookings' && <MyBookings/>
      )}
            {tab === 'settings' && <Profile />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;