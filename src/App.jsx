import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import Search from './components/Search'
import { PlayerContext } from './context/PlayerContext'


const App = () => {
  const {audioRef,track} = useContext(PlayerContext)
  return (
    <div className="h-screen bg-white dark:bg-black transition-colors duration-300">
    <div className='h-[90%] flex overflow-hidden'>
<Sidebar />

       
<Display />
    </div>
    <div>
      <Player />
      <audio  ref={audioRef}  src={track.file} preload='auto'></audio>
    </div>
    </div>
  )
}

export default App
