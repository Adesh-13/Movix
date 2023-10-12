import React,{useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'
import CarouselWithoutRating from '../../../components/carouselWithoutRating/CarouselWithoutRating'

const Upcoming = () => {
    //const[endpt,setEndpt] = useState("movie")
    const {data, loading} = useFetch(`/movie/upcoming`);

  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTitle">Upcoming</span>
        </ContentWrapper>
        <CarouselWithoutRating data={data?.results} loading={loading}/>
    </div>
  )
}

export default Upcoming