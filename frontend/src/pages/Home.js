import React from 'react'
import VCard from '../components/VCard';
import { useGetAllAgencyQuery, useGetAllHotelsQuery, useGetAllResturantQuery } from '../services/API'
import Agency from './Agency';
import Hotel from './Hotel';
import Resturent from './Resturent';

function Home() {
  const hotelRes = useGetAllHotelsQuery();
  console.log(hotelRes.data);
  const agencyRes = useGetAllAgencyQuery();
  return (
    <div className='container m-5'>
      <h1>List of Hotels</h1>
      <Hotel />
      <Resturent />
      <Agency />
    </div>
  )
}

export default Home;