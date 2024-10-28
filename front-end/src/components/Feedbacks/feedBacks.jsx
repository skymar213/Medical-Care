import React from 'react';
import { Pagination } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import avatar_icon from '../../assets/images/patient-avatar.png';

import {HiStar} from 'react-icons/hi';

const feedBacks = () => {
    return (
        <div className="mt-30 lg:mt-55">
            <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                }}
            >
               <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-lg border border-gray-200 bg-gray-200 ">
                        <div className="flex items-center gap-[13px]">
                        <img src={avatar_icon} alt="**" />
                        <div>
                            <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                            User Tester
                            </h4>
                            <div className="flex items-center gap-[2px]">
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            </div>
                        </div>
                        </div>
                        <p className='text-md leading-7 mt-4 text-textColor font-[400]'>I have taken medical services from them. They treat so well and
                        they are provding the best medical services."</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-lg border border-gray-200 bg-gray-200 ">
                        <div className="flex items-center gap-[13px]">
                        <img src={avatar_icon} alt="**" />
                        <div>
                            <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                            User Tester
                            </h4>
                            <div className="flex items-center gap-[2px]">
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            </div>
                        </div>
                        </div>
                        <p className='text-md leading-7 mt-4 text-textColor font-[400]'>I have taken medical services from them. They treat so well and
                        they are provding the best medical services."</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-lg border border-gray-200 bg-gray-200 ">
                        <div className="flex items-center gap-[13px]">
                        <img src={avatar_icon} alt="**" />
                        <div>
                            <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                            User Tester
                            </h4>
                            <div className="flex items-center gap-[2px]">
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            </div>
                        </div>
                        </div>
                        <p className='text-md leading-7 mt-4 text-textColor font-[400]'>I have taken medical services from them. They treat so well and
                        they are provding the best medical services."</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-lg border border-gray-200 bg-gray-200 ">
                        <div className="flex items-center gap-[13px]">
                        <img src={avatar_icon} alt="**" />
                        <div>
                            <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                            User Tester
                            </h4>
                            <div className="flex items-center gap-[2px]">
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            </div>
                        </div>
                        </div>
                        <p className='text-md leading-7 mt-4 text-textColor font-[400]'>I have taken medical services from them. They treat so well and
                        they are provding the best medical services."</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default feedBacks