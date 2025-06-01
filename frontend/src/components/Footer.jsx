
// // import React from 'react'
// // import darklogo from '../assets/darklogo.png'
// // import lightlogo from '../assets/lightlogo.png'

// // const Footer = () => {
// //   return (
// //     <div>
// //         <div>

// //             {/* ----------Left Section------------ */}
// //             <div>
// //                 <img
// //                 src={darkMode ? darklogo : lightlogo}
// //                 alt="HealthMate Logo"
// //                 className="w-10 h-10 object-contain"
// //                 />
// //                 <h1 className="text-2xl font-bold text-black dark:text-white flex items-center">
// //                 Health
// //                 <span className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent ml-1 group hover:animate-pulse transition duration-300">
// //                     Mate
// //                 </span>
// //                 </h1>

// //                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
// //             </div>

// //             {/* ----------Center Section------------ */}
// //             <div>
// //                 <p>COMPANY</p>
// //                 <ul>
// //                     <li>Home</li>
// //                     <li>About Us</li>
// //                     <li>Contact Us</li>
// //                     <li>Privacy policy</li>
// //                 </ul>
// //             </div>
// //             {/* ----------Right Section------------ */}
// //             <div>
// //                 <p>GET IN TOUCH</p>
// //                 <ul>
// //                     <li>+91-123-786-3344</li>
// //                     <li>healthmate@gmail.com</li>
// //                 </ul>
// //             </div>


// //         </div>
// //         {/* ------CopyRight Text--------- */}
// //         <div>
// //             <hr />
// //             <p>
// //                 Copyright 2025 @ HealthMate.com - All Right Reserved.
// //             </p>
// //         </div>
// //     </div>
// //   )
// // }

// // export default Footer

// // import React, { useContext } from 'react';
// // import darklogo from '../assets/darklogo.png';
// // import lightlogo from '../assets/lightlogo.png';
// // import { ThemeContext } from '../context/ThemeContext';

// // const Footer = () => {
// //   const { darkMode } = useContext(ThemeContext);

// //   return (
// //     <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-10 mt-12">
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

// //         {/* ----------Left Section------------ */}
// //         <div>
// //           <img
// //             src={darkMode ? darklogo : lightlogo}
// //             alt="HealthMate Logo"
// //             className="w-12 h-12 mb-3"
// //           />
// //           <h1 className="text-2xl font-bold flex items-center text-gray-800 dark:text-white">
// //             Health
// //             <span className="ml-1 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
// //               Mate
// //             </span>
// //           </h1>
// //           <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
// //             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
// //           </p>
// //         </div>

// //         {/* ----------Center Section------------ */}
// //         <div>
// //           <h2 className="text-lg font-semibold mb-4">Company</h2>
// //           <ul className="space-y-2">
// //             <li className="hover:text-blue-500 cursor-pointer">Home</li>
// //             <li className="hover:text-blue-500 cursor-pointer">About Us</li>
// //             <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
// //             <li className="hover:text-blue-500 cursor-pointer">Privacy Policy</li>
// //           </ul>
// //         </div>

// //         {/* ----------Right Section------------ */}
// //         <div>
// //           <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
// //           <ul className="space-y-2">
// //             <li>📞 +91-123-786-3344</li>
// //             <li>📧 healthmate@gmail.com</li>
// //           </ul>
// //         </div>
// //       </div>

// //       {/* ------CopyRight Text--------- */}
// //       <div className="mt-8 text-center border-t border-gray-300 dark:border-gray-700 pt-4 text-sm">
// //         <p>&copy; 2025 HealthMate.com - All Rights Reserved.</p>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;


// import React, { useContext } from 'react';
// import darklogo from '../assets/darklogo.png';
// import lightlogo from '../assets/lightlogo.png';
// import { ThemeContext } from '../context/ThemeContext';

// const Footer = () => {
//   const { darkMode } = useContext(ThemeContext);

//   return (
//     <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-10 mt-12 w-full">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

//         {/* ----------Left Section------------ */}
//         <div>
//           <div className="flex items-center mb-4">
//             <img
//               src={darkMode ? darklogo : lightlogo}
//               alt="HealthMate Logo"
//               className="w-10 h-10 mr-2"
//             />
//             <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
//               Health
//               <span className="ml-1 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
//                 Mate
//               </span>
//             </h1>
//           </div>
//           <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
//             Empowering lives with seamless healthcare access. Your health, our priority.
//           </p>
//         </div>

//         {/* ----------Center Section------------ */}
//         <div>
//           <h2 className="text-lg font-semibold mb-4">Company</h2>
//           <ul className="space-y-2 text-sm">
//             <li className="hover:text-blue-500 cursor-pointer">Home</li>
//             <li className="hover:text-blue-500 cursor-pointer">About Us</li>
//             <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
//             <li className="hover:text-blue-500 cursor-pointer">Privacy Policy</li>
//           </ul>
//         </div>

//         {/* ----------Right Section------------ */}
//         <div>
//           <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
//           <ul className="space-y-2 text-sm">
//             <li>📞 +91-123-786-3344</li>
//             <li>📧 healthmate@gmail.com</li>
//           </ul>
//         </div>
//       </div>

//       {/* ------CopyRight Text--------- */}
//       <div className="mt-10 text-center border-t border-gray-300 dark:border-gray-700 pt-4 text-sm">
//         <p>&copy; 2025 HealthMate.com – All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useContext } from 'react';
import darklogo from '../assets/darklogo.png';
import lightlogo from '../assets/lightlogo.png';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-10 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ----------Left Section------------ */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src={darkMode ? darklogo : lightlogo}
              alt="HealthMate Logo"
              className="w-10 h-10 mr-2"
            />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Health
              <span className="ml-1 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                Mate
              </span>
            </h1>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Empowering lives with seamless healthcare access. Your health, our priority.
          </p>
        </div>

        {/* ----------Center Section------------ */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
            <li className="hover:text-blue-500 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* ----------Right Section------------ */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
          <ul className="space-y-2 text-sm">
            <li>📞 +91-123-786-3344</li>
            <li>📧 healthmate@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ------CopyRight Text--------- */}
      <div className="mt-8 text-center border-t border-gray-300 dark:border-gray-700 pt-4 text-sm">
        <p>&copy; 2025 HealthMate.com – All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
