import React, { useEffect, useState } from 'react'
import Card from './Card'
import title from '../assets/title.png'
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';


function Characters() {

  const [characters, setCharacters] = useState([])

    const fetchData = async () => {
      try {
        const charData = await axios.get('https://66c9ac4f59f4350f064d1e89.mockapi.io/hotd')
        setCharacters(charData.data)
      } catch (error) {
        alert(error);
      }
    }

    useEffect(() => {
      fetchData()
    }, [])

  return (
    <div className='container'>
    <div className='row'>
      <div className='col-md-12 text-center sticky-top'>
          <img src={title} alt="title" width={600} className=' py-4' />
          <br/>
          <Link to={"modal"} className='btn btn-danger'>Add Char</Link>
          
      </div>
      <div className='container  mt-5'>
      <div className='mb-5 d-flex justify-content-center justify-content-around align-content-around row'>
       
       {
         characters.map((character) =>{
           return <Card character= {character}/>
         })
       }
       
     </div>
      </div>
    </div>
    <Outlet />
  </div>
  )
}

export default Characters