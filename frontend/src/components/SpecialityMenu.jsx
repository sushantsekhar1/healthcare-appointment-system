// import React from 'react'
// import {specialityData} from '../assets/assets'
// import { Link } from 'react-router-dom'

// const SpecialityMenu = () => {
//   return (
//     <div id='speciality'>
//         <h1>
//             Find by Speciality
//         </h1>
//         <p>
//             Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
//         </p>
//         <div>
//             {specialityData.map((item,index)=>(
//                 <Link key  = {index} to={`/doctors/${item.speciality}`}>
//                     <img src={item.image} alt="" />
//                     <p>
//                         {item.speciality}
//                     </p>

//                 </Link>

//             ))}
//         </div>
        
//     </div>
//   )
// }

// export default SpecialityMenu

// import React, { useContext } from 'react';
// import { specialityData } from '../assets/assets';
// import { Link } from 'react-router-dom';
// import { ThemeContext } from '../contex/ThemeContext'; // Make sure this path is correct

// const SpecialityMenu = () => {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div
//       id="speciality"
//       className={`py-16 px-6 sm:px-12 md:px-24 transition-colors duration-300 ${
//         theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
//       }`}
//     >
//       <div className="text-center mb-12">
//         <h1 className="text-3xl md:text-4xl font-bold mb-4">Find by Speciality</h1>
//         <p className="text-lg">
//           Simply browse through our extensive list of trusted doctors,<br />
//           schedule your appointment hassle-free.
//         </p>
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
//         {specialityData.map((item, index) => (
//           <Link
//             key={index}
//             to={`/doctors/${item.speciality}`}
//             className="w-full sm:w-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-transform"
//           >
//             <img
//               src={item.image}
//               alt={item.speciality}
//               className="w-20 h-20 mb-4 object-cover rounded-full border border-gray-300"
//             />
//             <p className="text-lg font-medium text-center">{item.speciality}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SpecialityMenu;


// import React, { useContext } from 'react';
// import { specialityData } from '../assets/assets';
// import { Link } from 'react-router-dom';
// import { ThemeContext } from '../contex/ThemeContext';

// const SpecialityMenu = () => {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div
//       id="speciality"
//       className={`py-16 px-6 sm:px-12 md:px-24 transition-colors duration-300 ${
//         theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
//       }`}
//     >
//       <div className="text-center mb-12">
//         <h1 className="text-3xl md:text-4xl font-bold mb-4">Find by Speciality</h1>
//         <p className="text-lg">
//           Simply browse through our extensive list of trusted doctors,<br />
//           schedule your appointment hassle-free.
//         </p>
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
//         {specialityData.map((item, index) => (
//           <Link
//             key={index}
//             to={`/doctors/${item.speciality}`}
//             className={`w-full sm:w-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex flex-col items-center 
//               hover:scale-105 hover:shadow-xl transition-transform animate-slide-up`}
//             style={{
//               animationDelay: `${index * 0.1}s`,
//               animationFillMode: 'both',
//             }}
//           >
//             <img
//               src={item.image}
//               alt={item.speciality}
//               className="w-20 h-20 mb-4 object-cover rounded-full border border-gray-300"
//             />
//             <p className="text-lg font-medium text-center">{item.speciality}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SpecialityMenu;


// import React, { useContext } from 'react';
// import { specialityData } from '../assets/assets';
// import { Link } from 'react-router-dom';
// import { ThemeContext } from '../contex/ThemeContext';
// import { useInView } from 'react-intersection-observer';

// const SpecialityMenu = () => {
//   const { theme } = useContext(ThemeContext);
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <div
//       id="speciality"
//     //   className={`py-16 px-6 sm:px-12 md:px-24 transition-colors duration-300 ${
//     //     theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
//     //   }`}

//     className={`w-full max-w-7xl rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center gap-10 transition-colors duration-300 ${
//     theme === "dark"
//         ? "bg-gray-900 text-white"
//         : "bg-[#5a67d8] text-white"
//         }`}
//     >
//       <div className="text-center mb-12">
//         <h1 className="text-3xl md:text-4xl font-bold mb-4">Find by Speciality</h1>
//         <p className="text-lg">
//           Simply browse through our extensive list of trusted doctors,<br />
//           schedule your appointment hassle-free.
//         </p>
//       </div>

//       <div ref={ref} className="flex flex-wrap justify-center gap-6">
//         {specialityData.map((item, index) => (
//           <Link
//             key={index}
//             to={`/doctors/${item.speciality}`}
//             className={`flex flex-col items-center w-32 sm:w-36 transition-transform duration-300 ${
//               inView ? 'animate-slide-up' : 'opacity-0 translate-y-10'
//             }`}
//             style={{
//               animationDelay: `${index * 0.1}s`,
//               animationFillMode: 'both',
//             }}
//           >
//             <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mb-2 bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg hover:shadow-blue-400 hover:shadow-md transition duration-300">
//               <img
//                 src={item.image}
//                 alt={item.speciality}
//                 className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
//               />
//             </div>
//             <p className="text-center font-medium">{item.speciality}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SpecialityMenu;
// import React, { useContext } from 'react';
// import { specialityData } from '../assets/assets';
// import { Link } from 'react-router-dom';
// import { ThemeContext } from '../contex/ThemeContext';
// import { useInView } from 'react-intersection-observer';

// const SpecialityMenu = () => {
//   const { theme } = useContext(ThemeContext);
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <div
//       id="speciality"
//       className={`w-full max-w-7xl mx-auto rounded-3xl p-8 sm:p-12 md:p-16 transition-colors duration-300 ${
//         theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-[#5a67d8] text-white'
//       }`}
//     >
//       {/* Title Section */}
//       <div className="text-center mb-12">
//         <h1 className="text-3xl md:text-4xl font-bold mb-4">Find by Speciality</h1>
//         <p className="text-lg">
//           Simply browse through our extensive list of trusted doctors,<br />
//           schedule your appointment hassle-free.
//         </p>
//       </div>

//       {/* Grid Section */}
//       <div ref={ref} className="flex flex-wrap justify-center gap-6">
//         {specialityData.map((item, index) => (
//           <Link
//             key={index}
//             to={`/doctors/${item.speciality}`}
//             className={`flex flex-col items-center w-32 sm:w-36 transition-transform duration-300 ${
//               inView ? 'animate-slide-up' : 'opacity-0 translate-y-10'
//             }`}
//             style={{
//               animationDelay: `${index * 0.1}s`,
//               animationFillMode: 'both',
//             }}
//           >
//             <div
//               className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mb-2 shadow-lg hover:shadow-md transition duration-300 ${
//                 theme === 'dark'
//                   ? 'bg-gradient-to-br from-blue-900 to-blue-700 shadow-blue-500/40'
//                   : 'bg-gradient-to-br from-blue-100 to-blue-300 shadow-blue-400'
//               }`}
//             >
//               <img
//                 src={item.image}
//                 alt={item.speciality}
//                 className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
//               />
//             </div>
//             <p className="text-center font-medium">{item.speciality}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SpecialityMenu;


// import React, { useContext } from 'react';
// import { specialityData } from '../assets/assets';
// import { Link } from 'react-router-dom';
// import { ThemeContext } from '../contex/ThemeContext';
// import { useInView } from 'react-intersection-observer';

// const SpecialityMenu = () => {
//   const { theme } = useContext(ThemeContext);
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const isDark = theme === 'dark';

//   return (
//     <div
//       id="speciality"
//       className={`w-full max-w-7xl mx-auto rounded-3xl p-8 sm:p-12 md:p-16 transition-colors duration-300 ${
//         isDark ? 'bg-[#0f172a] text-blue-200' : 'bg-grey text-gray-800'
//       }`}
//     >
//       {/* Title Section */}
//       <div className="text-center mb-12">
//         <h1
//           className={`text-3xl md:text-4xl font-bold mb-4 ${
//             isDark ? 'text-cyan-300' : 'text-gray-900'
//           }`}
//         >
//           Find by Speciality
//         </h1>
//         <p className={`text-lg ${isDark ? 'text-blue-200' : 'text-gray-700'}`}>
//           Simply browse through our extensive list of trusted doctors,<br />
//           schedule your appointment hassle-free.
//         </p>
//       </div>

//       {/* Grid Section */}
//       <div ref={ref} className="flex flex-wrap justify-center gap-6">
//         {specialityData.map((item, index) => (
//           <Link
//             key={index}
//             to={`/doctors/${item.speciality}`}
//             className={`flex flex-col items-center w-32 sm:w-36 transition-transform duration-300 ${
//               inView ? 'animate-slide-up' : 'opacity-0 translate-y-10'
//             }`}
//             style={{
//               animationDelay: `${index * 0.1}s`,
//               animationFillMode: 'both',
//             }}
//           >
//             <div
//               className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mb-2 shadow-lg hover:shadow-md transition duration-300 ${
//                 isDark
//                   ? 'bg-gray-800 shadow-blue-900'
//                   : 'bg-white shadow-gray-300'
//               }`}
//             >
//               <img
//                 src={item.image}
//                 alt={item.speciality}
//                 className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
//               />
//             </div>
//             <p
//               className={`text-center font-medium ${
//                 isDark ? 'text-blue-100' : 'text-gray-800'
//               }`}
//             >
//               {item.speciality}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SpecialityMenu;


import React, { useContext } from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { useInView } from 'react-intersection-observer';

const SpecialityMenu = () => {
  const { theme } = useContext(ThemeContext);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isDark = theme === 'dark';

  return (
<div
  id="speciality"
  className={`w-full max-w-7xl mx-auto rounded-3xl p-8 sm:p-12 md:p-16 transition-colors duration-300 ${
    isDark ? 'bg-grey text-white' : 'bg-white text-black'
  }`}
>

      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Find by Speciality
        </h1>
        <p className="text-lg">
          Simply browse through our extensive list of trusted doctors,<br />
          schedule your appointment hassle-free.
        </p>
      </div>

      {/* Grid Section */}
      <div ref={ref} className="flex flex-wrap justify-center gap-6">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            className={`flex flex-col items-center w-32 sm:w-36 transition-transform duration-300 ${
              inView ? 'animate-slide-up' : 'opacity-0 translate-y-10'
            }`}
            style={{
              animationDelay: `${index * 0.1}s`,
              animationFillMode: 'both',
            }}
          >
            <div
              className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mb-2 shadow-lg hover:shadow-md transition duration-300 ${
                isDark ? 'bg-gray-800 shadow-blue-900' : 'bg-white shadow-gray-300'
              }`}
            >
              <img
                src={item.image}
                alt={item.speciality}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
            </div>
            <p className="text-center font-medium">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
