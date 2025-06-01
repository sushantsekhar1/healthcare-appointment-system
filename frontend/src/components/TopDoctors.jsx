// import React from 'react'
// import { doctors } from '../assets/assets'

// const TopDoctors = () => {
//   return (
//     <div>
//         <h1>Top Doctors to Book</h1>
//         <p>Simply browse through our extensive list of trusted doctors.</p>
//         <div>
//             {doctors.slice(0,10).map((item, index) => (
//                 <div>
//                     <img src={item.image} alt="" />
//                     <div>
//                         <div>
//                             <p></p><p>Avaliable</p>
//                         </div>
//                         <p>{item.name}</p>
//                         <p>{item.speciality}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//         <button>more</button>
//     </div>
//   )
// }

// export default TopDoctors

// import React from 'react';
// import { doctors } from '../assets/assets';

// const TopDoctors = () => {
//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-12">
//       {/* Title Section */}
//       <div className="text-center mb-10">
//         <h1 className="text-3xl md:text-4xl font-bold mb-2 text-indigo-700">Top Doctors to Book</h1>
//         <p className="text-lg text-gray-600">Simply browse through our extensive list of trusted doctors.</p>
//       </div>

//       {/* Doctors Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {doctors.slice(0, 10).map((item, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-indigo-100"
//             />
//             <div className="text-center">
//               <div className="flex justify-center items-center gap-2 mb-2">
//                 <span className="h-2 w-2 bg-green-500 rounded-full"></span>
//                 <p className="text-green-600 text-sm font-medium">Available</p>
//               </div>
//               <p className="font-semibold text-lg text-gray-800">{item.name}</p>
//               <p className="text-sm text-gray-500">{item.speciality}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* More Button */}
//       <div className="mt-10 text-center">
//         <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
//           More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TopDoctors;

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
 import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
const navigate = useNavigate();
const { doctors } = useContext(AppContext);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 animate-fade-in">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-indigo-700">
          Top Doctors to Book
        </h1>
        <p className="text-lg text-gray-600">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {doctors.slice(0, 8).map((item, index) => (
          <div onClick={() => navigate(`/appointment/${item._id}`)}
            key={index}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-indigo-100"
            />
            <div className="text-center">
              <div className="flex justify-center items-center gap-2 mb-2">
                <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                <p className="text-green-600 text-sm font-medium">Available</p>
              </div>
              <p className="font-semibold text-lg text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-500">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <div className="mt-10 text-center">
        <button onClick={()=> {navigate('/doctors');scrollTo(0,0)}} className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
            >
          More
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;
