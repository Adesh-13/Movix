import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import "./styles.scss"
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
import Upcoming from './upcoming/Upcoming'
const Home = () => {
  return (
    <div className='homePage'>
        <HeroBanner/>
        <Trending/>
        <Upcoming/>
        <Popular/>
        <TopRated/>
        
    </div>
  )
}

export default Home