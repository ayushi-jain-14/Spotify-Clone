import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import {albumsData, assets, songsData  } from '../assets/assets'
import Player from './Player';
import { PlayerContext } from '../context/PlayerContext';

function DisplayAlbum() {
    const {id} = useParams();
    const albumData  = albumsData[id];
    const {playwithId} = useContext(PlayerContext);
  return (
    <>
      <Navbar/>
    <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end '>
<img className='w-48 rounded' src={albumData.image}  alt="" />
<div className='flex flex-col'>
    <p>playlist</p>
    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
    <h4>{albumData.desc}</h4>
    <p className='mt-1'>
        <img className='inline-block w-5' src={assets.spotify_logo} alt='' />
        <b>Spotify</b>
        . 1,322,154 likes
        . <b> 50 songs , </b>
        about 2 hr 30 min
    </p>
</div>
    </div>
    <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] '>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt='' />
    </div>
    <hr />
    
   {
  songsData.map((item, index) => (
    <div onClick={()=>playwithId(item.id)}
      key={index}
      className="grid grid-cols-3 sm:grid-cols-4 gap-1 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer "
    >
      {/* Title & Image */}
      <div className="flex items-center gap-4">
        <span className="text-[#a7a7a7]">{index + 1}</span>
        <img className="w-10" src={item.image} alt={item.name} />
        <div className="flex flex-col">
          <p className="text-white text-sm">{item.name}</p>
        </div>
      </div>

      {/* Album Name */}
      <p className="text-[15px]">{albumData.name}</p>

      {/* Date Added */}
      <p className="text-[15px] hidden sm:block">5 days ago</p>

      {/* Duration */}
      <p className="text-[15px] text-center">{item.duration}</p>
    </div>
  ))
}

    </>
  )
}

export default DisplayAlbum
