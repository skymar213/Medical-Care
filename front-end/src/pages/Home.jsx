import React from 'react'
import medImg01 from '../assets/images/hero-img01.png';
import medImg02 from '../assets/images/hero-img02.png';
import medImg03 from '../assets/images/hero-img03.png';
import icon01 from'../assets/images/icon01.png';
import icon02 from'../assets/images/icon02.png';
import icon03 from'../assets/images/icon03.png';
import faqimg from '../assets/images/faq-img.png';
import featureImg from '../assets/images/myfeat.png';
import { Link } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';
import DoctorList from '../components/Doctors/DoctorList';
import FaqList from '../components/Faq/FaqList';
import FeedBacks from '../components/Feedbacks/feedBacks';

const Home = () => {
  return (
    <>
      {/*Main section*/}
      <>
        <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* hero content */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    We help patients live a healthy, longer life.
                  </h1>
                    <p className="text_para">
                       The company itself is a very successful company.
                       Let the child seek and run away;
                       or because they are fond of the architect, the manner of hatred. Where is it loose?
                       do we lead the way?
                    </p>
                    <Link to ="doctors"> <button className="btn">Request an Appointement</button></Link>
                 
                </div>
                {/*counter*/}
                

                <div className ="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5
                    lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                     text-headingColor">
                      <span className="lg:text-[44px]">3+</span>
                    </h2>
                    <span className="w-[90px] h-2 bg-red-400 rounded-full block mt-[-16px]"></ span>
                    <p className='text_para'>Years Experiance  </p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                     text-headingColor">
                       <span className="lg:text-[44px]">15+</span>
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-16px]"></ span>
                    <p className='text_para'>Proffesional Doctors </p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                     text-headingColor">
                       <span className="lg:text-[44px]">100%</span>
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-16px]"></ span>
                    <p className='text_para'>Client Satisfaction </p>
                  </div>

                  
                </div>

                
              </div>
              {/*Images*/}
              <div className="flex gap-[30px] justify-end">
                <div>
                  <img className="w-full" src={medImg01} alt="" />
                </div>
                <div className="mt-[30px]">
                  <img src={medImg02} alt="" className="w-full mb-[30px]" />
                  <img src={medImg03} alt="" className="w-full" />
                </div>
              </div>

            </div>
          </div>
        </section>
         {/*Main section End*/}
        
        {/*Main section2*/}
        <section>
          <div className="container">
            <div className='lg:w-[470px] mx-auto'>
              <h2 className='heading text-center'>
                Providing the Best Medical Services
              </h2>
              <p className=" text_para text-center">
              World-class care for everyone. Our Health System offers unmatched,
              expert health care.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              {/* Content goes here */}
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon01} alt="" />
                </div>
                  {/*Find a doctor*/}
                <div className="mt-[30px]">
                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                      Find a Doctor
                    </h2>
                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                     World-class care for everyone. Our health system offers unmatched, expert health care.
                    From the lab to the clinic.
                    </p>
                    <Link
                      to="/doctors"
                      className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] 
                      mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                    >
                      <BsArrowRight className="group-hover:text-white w-6 h-5" />
                    </Link>
                </div>
              </div>
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon02} alt="" />
                </div>
                  {/*Find a Location*/}
                <div className="mt-[30px]">
                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                      Find a Location
                    </h2>
                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                     World-class care for everyone. Our health system offers unmatched, expert health care.
                    From the lab to the clinic.
                    </p>
                    <Link
                      to="/neardoctors"
                      className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] 
                      mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                    >
                      <BsArrowRight className="group-hover:text-white w-6 h-5" />
                    </Link>
                </div>



              </div>
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon03} alt="" />
                </div>
                  {/*Booking an Appointement*/}
                <div className="mt-[30px]">
                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                      Booking an Appointement
                    </h2>
                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                     World-class care for everyone. Our health system offers unmatched, expert health care.
                    From the lab to the clinic.
                    </p>
                    <Link
                      to="/doctors"
                      className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] 
                      mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                    >
                      <BsArrowRight className="group-hover:text-white w-6 h-5" />
                    </Link>
                </div>



              </div>
            </div>


          </div>
        </section>
       {/*Main section2 End*/}

        <About></About>

        {/*-----------------------------------services section-----------------------------------------*/}

          <section>
            <div className="container">
              <div className="xl:w-[478px] mx-auto">
                <h2 className="heading text-center">Our medical services</h2>
                <p className="text_para text-center">World-class care for everyone. Our health system offers unmatched,
                expert health care.</p>
              </div>

              <ServiceList></ServiceList>
            </div>
          </section>

        {/*-----------------------------------services section end------------------------*/}


        {/*-----------------------------------Features section-----------------------------------------*/}
          <section>
            <div className="container">
              <div className="flex items-center justify-between flex-col lg:flex-row">
                
                <div className="xl:w-[670px]">
                  <h2 className="heading">
                    Get Your Appointement <br /> anytime.
                  </h2>
                  <ul className="pl-4">
                    <li className="text_para">
                      1. Schedule the appointment directly.
                    </li>
                    <li className="text_para"> 
                      2. Search for your physician here, and contact their office.
                    </li>
                    <li className="text_para"> 
                      3. View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.
                    </li>
                  </ul>
                  <Link to="/">
                    <button className="btn">Learn More</button> 
                  </Link>
                </div>
                <div className="relative z-10 xl:w-[770px] flex justify-end mt-[30px] lg:mt-3">
                    <img src={featureImg} className="w-3/4" alt="" />
                </div>

              </div>
            </div>
          </section>
        {/*-----------------------------------Features section end-----------------------------------------*/}


        {/*-----------------------------------Doctors section-----------------------------------------*/}
{/* 
        <section>
        <div className="container">
              <div className="xl:w-[478px] mx-auto">
                <h2 className="heading text-center">Our great doctors</h2>
                <p className="text_para text-center">World-class care for everyone. Our health system offers unmatched,
                expert health care.</p>
              </div>
        </div>
        <DoctorList limit={3}/>      
        </section> */}

        {/*-----------------------------------Doctors section end-----------------------------------------*/}

        {/*-----------------------------------FAQ section-----------------------------------------*/}
        <section>
          <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-0">
              <div className="w-1/4 hidden md:block">
                <img src={faqimg} alt="" />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="heading">Most Questions By Our Patients</h2>
                <FaqList/>
              </div>
            </div>
          </div>
        </section>
        {/*-----------------------------------FAQ section End-----------------------------------------*/}


        {/*-----------------------------------FeedBacks section-----------------------------------------*/}

        <section>
          <div className="container">
              <div className="xl:w-[470px] mx-auto mb-5">
                  <h2 className="heading text-center mb-1">What our patients say</h2>
                  <p className="text-para text-center mt-3 mb-4">
                    World-class care for everyone. Our health system offers unmatched, expert health care.
                 </p>
              </div>
            <FeedBacks></FeedBacks>
          </div>
          
        </section>


        {/*-----------------------------------FeedBacks section End-----------------------------------------*/}




      </>
    
    </>
  )
}

export default Home