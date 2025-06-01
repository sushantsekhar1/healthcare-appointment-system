import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-black dark:text-white ">
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>

    </div>
  )
}

export default Home