import React,{useState,useEffect} from 'react'
import { useQuery,useLazyQuery, gql } from '@apollo/client';
import Icon from '@material-ui/core/Icon';
import Circular from './Circular.js'
import '../styles/Schedule.css'
import AddIcon from '@material-ui/icons/Add'
import {db} from  '../firebase'
import {addToWatchList,setAlert} from '../redux/actions'
import { useDispatch,useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';


const SCHEDULE_ANIME_QUERY = gql`
  query AnimeGenreQuery($arg: String!){
    schedule(day: $arg){
      mal_id
      title
      image_url
      url
      synopsis
    }
  }
  `;

  const ANIME_QUERY = gql`
    query AnimeQuery($id: String!){
      anime(animeId: $id){
        trailer_url
      }
    }
    `;

function Schedule({day}) {
  const [arg,setArg] = useState(day)
  const [trailer,setTrailer] = useState('');
  const watchlist = useSelector(state => state.watchlist)
  const userId = useSelector(state => state.user.id)
  const dispatch = useDispatch()
  const [getTrailer, {data:lazyData }] = useLazyQuery(ANIME_QUERY);
  useEffect(()=>{
     setArg(day)
  },[day])
  const { loading, error, data } = useQuery(SCHEDULE_ANIME_QUERY, {
   variables: { arg },
  });

  if(lazyData?.anime?.trailer_url && (trailer !== lazyData?.anime?.trailer_url)){
    setTrailer(lazyData.anime.trailer_url);
  }

  const open = (anime) => {
      document.getElementsByClassName('trailer')[1].style.display = 'block'
      document.getElementsByTagName('iframe')[1].setAttribute('src',`${trailer}`)
  }
  const close = () => {
    document.getElementsByTagName('iframe')[1].setAttribute('src','')
    document.getElementsByClassName('trailer')[1].style.display = 'none'
  }
  
  const addToWatchlist = (anime) => {
    if(userId === ''){
      dispatch(setAlert({
        type:'error',
        message:"Must be logged in"
      }))
      return
    }
    if(!watchlist.includes(anime.mal_id) ){
       db.collection("users")
    .doc(userId)
    .collection('watchlist')
      .doc(anime.mal_id)
      .set({
        title:anime.title,
        description:anime.synopsis,
        image:anime.image_url,
        link:anime.url,
        id:anime.mal_id
      })
      .then(function() {
        dispatch(setAlert({
          type:'success',
          message:"Added to watchlist "
        }))
        dispatch(addToWatchList(anime.mal_id))
      })
      .catch(function(error) {
        dispatch(setAlert({
          type:'error',
          message:"Error adding document: " + error
        }))
      });
    }else{
      dispatch(setAlert({
        type:'error',
        message:'already in watchlist'
      }))
    }
    }

  if (loading) return <div className="reload"><Circular></Circular></div>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="genres">

       <div style= {{display:'none'}}  className="trailer">
         <iframe src = {trailer}></iframe>
         <button onClick={(e) => {setTrailer(''); getTrailer({ variables:{id:''}});close()}} className="toggler"><Icon className="fas fa-window-close"></Icon></button>
       </div>
       <div className="genres__container">
         {
           data.schedule?.map(anime => (
             <div key={uuidv4()} className="animeCard">
                <img src={anime.image_url} alt=""/>
                <p>{anime.title}</p>
                <div className='card__info'>
                    <a onClick={(e) => {e.preventDefault(); getTrailer({ variables:{id:anime.mal_id}}); open()}} href="">Trailer</a>
                    <a href={anime.url} target='_blank'>Learn more</a>
                </div>
                <button onClick={() => addToWatchlist(anime)} className ='anime_add'><AddIcon></AddIcon>Add to watchlist</button>

             </div>
           ))
         }
       </div>

    </div>
  )
}

export default Schedule
