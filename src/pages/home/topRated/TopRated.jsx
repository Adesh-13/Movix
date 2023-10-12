import React,{useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const TopRated = () => {
    const[endpt,setEndpt] = useState("movie")
    const {data, loading} = useFetch(`/${endpt}/top_rated`);

    const onTabChange = (tab) =>{
        setEndpt(tab == "Movies" ? "movie" : "tv");
    }

  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTitle">Top Rated</span>
            <SwitchTabs data={["Movies","Series"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpt={endpt}/>
    </div>
  )
}

export default TopRated