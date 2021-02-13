import React,{useState} from 'react'
import { useQuery, gql } from '@apollo/client';
import Icon from '@material-ui/core/Icon';
import '../styles/Trailer.css'

const ANIME_QUERY = gql`
  query AnimeQuery($arg: String!){
    genres(genreId: $arg){
      trailer_url
    }
  }
  `;

function Genres({url}) {
  // const [arg,setArg] = useState('1')
  const { loading, error, data } = useQuery(GENRES_ANIME_QUERY, {
   variables: { url },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log('trailer data',data);
  return (

    <div className="trailer">
      <iframe src = {data.trailer_url}></iframe>
      <button onClick={(e) => setTrailer('')} className="toggler"><Icon className="fas fa-window-close"></Icon></button>
    </div>
  )
}

export default Genres
