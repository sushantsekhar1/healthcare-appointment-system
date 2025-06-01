// import React from 'react';
// import appointment_img from '../assets/appointment_img.png'; // ✅ Correct import

// const Banner = () => {
//   return (
//     <div className="w-full bg-gradient-to-r from-blue-100 to-cyan-100 py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
      
//       {/* ----------Left Banner---------- */}
//       <div className="max-w-xl text-center md:text-left">
//         <p className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
//           Book Appointment
//         </p>
//         <p className="text-xl text-gray-700 mb-6">
//           With 100+ Trusted Doctors
//         </p>
//         <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-500 transition">
//           Create Account
//         </button>
//       </div>

//       {/* ----------Right Banner---------- */}
//       <div className="w-full md:w-1/2">
//         <img src={appointment_img} alt="Appointment" className="w-full h-auto rounded-xl" />
//       </div>

//     </div>
//   );
// };

// export default Banner;


import React from 'react';
import appointment_img from '../assets/appointment_img.png';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-gray-900 dark:to-gray-800 py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-12 rounded-xl shadow-md transition-colors duration-500">

      {/* ----------Left Banner---------- */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 dark:text-white mb-4 leading-tight">
          Book Your Appointment
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          With 100+ Verified & Trusted Doctors near you.
        </p>
        <button onClick={()=> {navigate('/login'); scrollTo(0,0)}} className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-full font-semibold transition duration-300">
          Create Account
        </button>
      </div>

      {/* ----------Right Banner---------- */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={appointment_img}
          alt="Appointment"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-2xl shadow-lg"
        />
      </div>
      
    </div>
  );
};

export default Banner;

