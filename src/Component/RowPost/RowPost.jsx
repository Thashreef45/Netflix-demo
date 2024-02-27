import React,{useEffect,useState} from 'react'
import {imageUrl,API_KEY} from '../../Constants/Constants'
import './RowPost.css'
import axios from '../axios'
import Youtube from 'react-youtube'

function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [yId,setYid] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) =>{
    axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data,'hil')
      if(response.data.length != 0){
        setYid(response.data[0])
      }

    })
  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((element)=>
            <img onClick={()=>handleMovie(element.id)} className={props.isSmall ? 'small-poster':'poster'} alt='poster' src={`${imageUrl+element.backdrop_path}`}  />
          )}
        </div>
        {yId ? <Youtube opts={opts} videoId={yId.key}/> : ''}
    </div>
  )
}

export default RowPost