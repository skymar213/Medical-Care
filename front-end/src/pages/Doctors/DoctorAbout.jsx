import { formatDate } from '../../utils/formateDate';
const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text headingColor font-semibold 
            flex items-center gap-2 mt-4">
                About
                <span className="text-irisBlueColor font-bold text-[24px] leading-9 mb-2">Me</span>
            </h3>
            <p className="text__para">
            A highly experienced physician specializing in internal medicine, offering over 15 years of dedicated medical care.
             Known for a compassionate and patient-centered approach, Dr. Smith excels in diagnosing and treating a wide range of conditions, from acute illnesses to chronic diseases. Graduating with honors and actively engaging in ongoing professional development, Dr. Smith combines expertise with the latest medical advancements to provide personalized and effective treatments. Committed to promoting overall well-being, Dr. Smith ensures that every patient feels heard and understood.







            </p>
        </div>
        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text headingColor font-semibold">
                Education
            </h3>
            <ul className="pt-4 md:p-5">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end 
                md:gap-5 mb-[30px]">
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                          {formatDate('12-04-2010')} - {formatDate('12-04-2020')}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Doctorat in Surgeon
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                    Mustapha Pacha University Hospital
                    </p>
                </li>
            </ul>
        </div>
        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text headingColor font-semibold">
                Experience
            </h3>
            <ul className ="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 ">
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    {formatDate('12-04-2010')} - {formatDate('12-04-2020')}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                        Sr. Surgeon
                    </p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                    Mustapha Pacha University Hospital
                    </p>
                </li>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    {formatDate('12-04-2010')} - {formatDate('12-04-2020')}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                        Sr. Surgeon
                    </p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                    Mustapha Pacha University Hospital
                    </p>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default DoctorAbout;
