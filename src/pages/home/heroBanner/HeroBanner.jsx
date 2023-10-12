import React,{useState, useEffect} from 'react';
import "./style.scss";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
    const [bg,setbg] = useState("");
    const [query,setQuery] = useState("");
    const navigate = useNavigate();
    const {url} = useSelector((state) => state.home)
    const {data,loading} = useFetch("/movie/upcoming");

    useEffect(() => {
        const Bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setbg(Bg);
    },[data])

    const searchQueryHandler = (event) =>{
        if(event.key === "Enter" && query.length>0){
            navigate(`/search/${query}`);
        }
    }
  return (
    <div className='heroBanner'>
        { !loading && <div className='backdrop-img'>
            <Img src={bg}/>
        </div>}
        <div className="opacity-layer">

        </div>
        <ContentWrapper>
            <div className='heroBannerContent'>
            <span className='title'>Welcome</span>
            <span className='subTitle'>Discover Movies & Series at one Spot</span>
            <div className='searchInput'>
                <input type="text" onChange={(e) => setQuery(e.target.value)} onKeyUp={searchQueryHandler} placeholder="Search any Movie/Series"/>
                <button>Search</button>
            </div>
            </div>
        </ContentWrapper>
    </div>
  );
}

export default HeroBanner;