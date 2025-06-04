// import React, { useContext,useEffect,useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'

// const Doctors = () => {
//   const {speciality } = useParams()
//   const [filterDoc, setFilterDoc] = useState([])
//   const navigate = useNavigate()

//   const {doctors} =  useContext(AppContext)

// const applyFilter = () => {
//   if (speciality) {
//     setFilterDoc(doctors.filter(doc => doc.speciality ===  speciality));
//   } else {
//     setFilterDoc(doctors);
//   }
// }

// useEffect(() => {
//   applyFilter();
// },[doctors, speciality])


//   return (
//     <div>
//       <p>
//         Browse through the doctors specialist.
//       </p>

//       <div>
//           <div>
//             <p>General physician</p>
//             <p>Gynecologist</p>
//             <p>Dermatologist</p>
//             <p>Pediatricians</p>
//             <p>Neurologist</p>
//             <p>Gastroenterologist</p>
//           </div>

//           <div>
//             {
//                 filterDoc.map((item, index) => (
//           <div onClick={() => navigate(`/appointment/${item._id}`)}
//             key={index}
//             className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 animate-slide-up"
//             style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
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
//         ))
//             }
//           </div>
//       </div>
//     </div>
//   )
// }

// export default Doctors


import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const categories = [
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-10 px-4 sm:px-12 transition-colors duration-300">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 dark:text-white mb-8">
        Browse Specialist Doctors
      </h2>

      {/* Speciality Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-white dark:bg-gray-700 border border-blue-300 dark:border-gray-600 rounded-full hover:bg-blue-100 dark:hover:bg-gray-600 text-blue-600 dark:text-white font-semibold transition"
            onClick={() => navigate(`/doctors/${cat}`)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filterDoc.map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            key={index}
            className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationFillMode: 'forwards',
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mt-6 border-4 border-indigo-100"
            />
            <div className="text-center p-4">
              <div className="flex justify-center items-center gap-2 mb-2">
                <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                <p className="text-green-600 text-sm font-medium">Available</p>
              </div>
              <p className="font-semibold text-lg text-gray-800 dark:text-white">{item.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
