// // import React from 'react'

// // const Header = () => {
// //   return (
// //     <div>
// //         {/* --------Left Side of Header-------- */}
// //         <div>
// //             <p>
// //                 Book Appointment <br /> With Trusted Doctors
// //             </p>
// //             <div>
// //                 <img src = {assets.group_profile } alt="" />
// //                 <p>Simply browse through our extensive list of trusted doctors, <br/> schedule your appointment hassle-free.</p>
// //             </div>
// //             <a href= "">
// //                 Book Appointment <img src= {assets.arrow_right} alt="" />
// //             </a>

// //         </div>
// //         {/* --------Right Side of Header-------- */}
// //         <div>
// //             <img src={assets.header_image} alt="" />
// //         </div>

// //     </div>
// //   )
// // }

// // export default Header


// import React, { useContext } from "react";
// import { ThemeContext } from "../contex/ThemeContext"; // Make sure this exists
// import group_profile from "../assets/group_profiles.png";
// import arrow_icon from "../assets/arrow_icon.svg";
// import header_image from "../assets/header_img.png";

// const Header = () => {
//   const { theme } = useContext(ThemeContext); // Optional, if you use ThemeContext

//   return (
//     <div
//       className={`py-10 px-6 sm:px-12 md:px-24 grid grid-cols-1 md:grid-cols-2 items-center gap-10 transition-colors duration-300 ${
//         theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
//       }`}
//     >
//       {/* -------- Left Side of Header -------- */}
//       <div className="space-y-6">
//         <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//           Book Appointment <br /> With Trusted Doctors
//         </h1>

//         <div className="flex items-start gap-4">
//           <img
//             src={group_profile}
//             alt="Group Profile"
//             className="w-12 h-12 rounded-full object-cover"
//           />
//           <p className="text-lg">
//             Simply browse through our extensive list of trusted doctors,
//             <br /> schedule your appointment hassle-free.
//           </p>
//         </div>

//         <a
//           href="#appointment"
//           className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
//         >
//           Book Appointment
//           <img src={arrow_icon} alt="Arrow Right" className="w-5 h-5" />
//         </a>
//       </div>

//       {/* -------- Right Side of Header -------- */}
//       <div className="flex justify-center md:justify-end">
//         <img
//           src={header_image}
//           alt="Header"
//           className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg"
//         />
//       </div>
//     </div>
//   );
// };

// export default Header;
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import group_profile from "../assets/group_profiles.png";
import arrow_icon from "../assets/arrow_icon.svg";
import header_image from "../assets/header_img.png";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex- justify-center px-4 sm:px-6 md:px-12 py-12">
      <div
        className={`w-full max-w-7xl rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center gap-10 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-[#5a67d8] text-white"
        }`}
      >
        {/* Left Side */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Book Appointment <br /> With Trusted Doctors
          </h1>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <img
              src={group_profile}
              alt="Group Profile"
              className="w-25 h-12 rounded-full object-cover ring-2 ring-white"
            />
            <p className="text-sm sm:text-base text-white/90">
              Simply browse through our extensive list  
              <br className="hidden sm:block" /> of trusted doctors,schedule your appointment hassle-free.
            </p>
          </div>

          <a
            href="#speciality"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
            >
            Book Appointment
            <img src={arrow_icon} alt="Arrow Right" className="w-4 h-4" />
          </a>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <img
            src={header_image}
            alt="Doctor"
            className="w-full max-w-sm mx-auto md:mx-0 drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
