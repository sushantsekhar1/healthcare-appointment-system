// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { FaMoon} from 'react-icons/fa';
// import { IoSunny } from 'react-icons/io5';
// import lightlogo from '../assets/lightlogo.png';
// import darklogo from '../assets/darklogo.png';
// import { ThemeContext } from '../contex/ThemeContext';





// const Navbar = () => {
//   const { darkMode, setDarkMode } = useContext(ThemeContext);

//   return (
//     <nav className="bg-white-100 dark:bg-gray-700 px-6 py-4 flex justify-between items-center">
//       {/* Logo + Title */}
//       <div className="flex items-center space-x-3">
//         <img
//           src={darkMode ? darklogo : lightlogo}
//           alt="HealthMate Logo"
//           className="w-10 h-10 object-contain filter dark:invert"
//         />
//         {/* <span className="text-2xl font-bold text-black dark:text-white">
//           HealthMate
//         </span> */}
//         <h1 className="text-2xl font-bold text-black dark:text-white flex items-center">
//             Health
//         <span className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent ml-1 group hover:animate-pulse transition duration-300">
//             Mate
//         </span>
//         </h1>

        
//       </div>

//       {/* Links */}
//       <ul className="flex space-x-6 text-black dark:text-white font-medium">
//         <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-300">Home</Link></li>
//         <li><Link to="/doctors" className="hover:text-blue-600 dark:hover:text-blue-300">All Doctor</Link></li>
//         <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-300">About</Link></li>
//         <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-300">Contact</Link></li>
//       </ul>

//       {/* Right Section */}
//       <div className="flex items-center space-x-4">
//         {/* Theme Toggle */}
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="text-black dark:text-white text-xl hover:scale-110 transition-transform duration-200"
//           aria-label="Toggle Theme"
//         >
//           {darkMode ? <IoSunny /> : <FaMoon />}
//         </button>

//         {/* Create Account Button */}
//         <Link to="/create-account">
//         <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 text-white px-5 py-2 rounded-full hover:from-cyan-400 hover:to-blue-400 dark:hover:from-cyan-500 dark:hover:to-blue-500 font-semibold transition duration-300 group">
//         {/* <span className="group-hover:animate-bounce"></span> */}
//         Create Account
//         </button>




//         </Link>
//       </div>
//     </nav>
//   );
// };



// export default Navbar;

// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaMoon, FaBars, FaTimes } from 'react-icons/fa';
// import { IoSunny } from 'react-icons/io5';
// import lightlogo from '../assets/lightlogo.png';
// import darklogo from '../assets/darklogo.png';
// import { ThemeContext } from '../contex/ThemeContext';

// const Navbar = () => {
//   const { darkMode, setDarkMode } = useContext(ThemeContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const[showMenu, setShowMenu] = useState(false);
//   const [token,setToken] = useState(false);

//   return (
//     <nav className="bg-white dark:bg-gray-800 px-6 py-4 flex justify-between items-center shadow-md">
//       {/* Logo + Title */}
//       <div className="flex items-center space-x-3">
//         <img
//           src={darkMode ? darklogo : lightlogo}
//           alt="HealthMate Logo"
//           className="w-10 h-10 object-contain"
//         />
//         <h1 className="text-2xl font-bold text-black dark:text-white flex items-center">
//           Health
//           <span className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent ml-1 group hover:animate-pulse transition duration-300">
//             Mate
//           </span>
//         </h1>
//       </div>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex space-x-6 text-black dark:text-white font-medium">
//         <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-300">Home</Link></li>
//         <li><Link to="/doctors" className="hover:text-blue-600 dark:hover:text-blue-300">All Doctor</Link></li>
//         <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-300">About</Link></li>
//         <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-300">Contact</Link></li>
//       </ul>

//       {/* Right Section */}
//       <div className="hidden md:flex items-center space-x-4">
//         {/* Theme Toggle */}
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="text-xl text-yellow-500 dark:text-blue-300 hover:scale-110 transition-transform duration-200"
//           aria-label="Toggle Theme"
//         >
//           <span key={darkMode ? 'sunny' : 'moon'} className="inline-block transition-all duration-500 transform">
//             {darkMode ? <IoSunny /> : <FaMoon />}
//           </span>
//         </button>

//         {/* Create Account */}

//         <Link to="/login">
//           <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 text-white px-5 py-2 rounded-full hover:from-cyan-400 hover:to-blue-400 dark:hover:from-cyan-500 dark:hover:to-blue-500 font-semibold transition duration-300 group">
//             Create Account
//           </button>
//         </Link>
//       </div>

//       {/* Mobile Hamburger */}
//       <div className="md:hidden flex items-center">
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl text-black dark:text-white">
//           {isMenuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isMenuOpen && (
//         <div className="absolute top-20 left-0 w-full bg-white dark:bg-gray-800 text-black dark:text-white p-6 flex flex-col space-y-4 font-medium shadow-md md:hidden z-50">
//           <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-300">Home</Link>
//           <Link to="/doctors" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-300">All Doctor</Link>
//           <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-300">About</Link>
//           <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-300">Contact</Link>
//           <div className="flex items-center justify-between">
//             <button
//               onClick={() => {
//                 setDarkMode(!darkMode);
//                 setIsMenuOpen(false);
//               }}
//               className="text-xl text-yellow-500 dark:text-blue-300"
//               aria-label="Toggle Theme"
//             >
//               {darkMode ? <IoSunny /> : <FaMoon />}
//             </button>
//             <Link to="/login" onClick={() => setIsMenuOpen(false)}>
//               <button className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 text-white px-4 py-2 rounded-full hover:from-cyan-400 hover:to-blue-400 dark:hover:from-cyan-500 dark:hover:to-blue-500 font-semibold transition duration-300 group">
//                 Create Account
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { IoSunny } from 'react-icons/io5';
import lightlogo from '../assets/lightlogo.png';
import darklogo from '../assets/darklogo.png';
import { ThemeContext } from '../context/ThemeContext';
import profile_pic from '../assets/profile-pic.jpg'; 

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState(true); // simulate login: true or false
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => {
    setShowProfileMenu((prev) => !prev);
  };

  const logout = () => {
    setToken(false);
    setShowProfileMenu(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 px-6 py-4 flex justify-between items-center shadow-md relative">
      {/* Logo + Title */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => window.location.pathname !== '/' && window.location.assign('/')}
        >
          <img
            src={darkMode ? darklogo : lightlogo}
            alt="HealthMate Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-2xl font-bold text-black dark:text-white flex items-center">
            Health
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent ml-1 group hover:animate-pulse transition duration-300">
          Mate
            </span>
          </h1>
        </div>
      <ul className="hidden md:flex space-x-6 text-black dark:text-white font-medium">
        <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-300">Home</Link></li>
        <li><Link to="/doctors" className="hover:text-blue-600 dark:hover:text-blue-300">All Doctor</Link></li>
        <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-300">About</Link></li>
        <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-300">Contact</Link></li>
      </ul>

      {/* Right Section */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl text-yellow-500 dark:text-blue-300 hover:scale-110 transition-transform duration-200"
          aria-label="Toggle Theme"
        >
          {darkMode ? <IoSunny /> : <FaMoon />}
        </button>

        {/* Auth Buttons */}
        {token ? (
          <div className="relative">
            <img
            src={profile_pic}
            alt="Profile"
            onClick={toggleProfileMenu}
            className="w-10 h-10 rounded-full object-cover cursor-pointer border-2 border-blue-500 hover:scale-105 transition-transform duration-200"
            />
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 rounded-lg shadow-md text-black dark:text-white">
                <Link to="/my-profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Profile</Link>
                <Link to="/my-appointment" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">My Appointments</Link>
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 text-white px-5 py-2 rounded-full hover:from-cyan-400 hover:to-blue-400 dark:hover:from-cyan-500 dark:hover:to-blue-500 font-semibold transition duration-300 group">
              Create Account
            </button>
          </Link>
        )}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl text-black dark:text-white">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white dark:bg-gray-800 text-black dark:text-white p-6 flex flex-col space-y-4 font-medium shadow-md md:hidden z-50">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-300">Home</Link>
          <Link to="/doctors" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-300">All Doctor</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-300">About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-300">Contact</Link>
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                setIsMenuOpen(false);
              }}
              className="text-xl text-yellow-500 dark:text-blue-300"
              aria-label="Toggle Theme"
            >
              {darkMode ? <IoSunny /> : <FaMoon />}
            </button>
            {token ? (
              <button
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="w-full mt-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full hover:from-red-400 hover:to-red-500 font-semibold transition duration-300 group"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 text-white px-4 py-2 rounded-full hover:from-cyan-400 hover:to-blue-400 dark:hover:from-cyan-500 dark:hover:to-blue-500 font-semibold transition duration-300 group">
                  Create Account
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



