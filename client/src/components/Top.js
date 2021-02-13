import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Circular from './Circular'
import '../styles/Top.css'
import { v4 as uuidv4 } from 'uuid';


const TOP_ANIME_QUERY = gql`
  query AnimeQuery($arg: String!){
    top(subtype: $arg){
      mal_id
      rank
      title
      image_url
      url
    }
  }
`;

function Top() {
  const arg = 'upcoming'
  const { loading, error, data } = useQuery(TOP_ANIME_QUERY, {
   variables: { arg },
  });
  if (loading) return <div className="reload"><Circular></Circular></div>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="top">

        {data ? 
        data?.top?.slice(0,10)?.map(anime => {
        return(
          <div key ={uuidv4()} target='_blank' className="animeCard">
            <a href={anime.url} target='_blank'>
             <img src={anime.image_url} alt=""/>
             <p>{anime.title}</p>
             <div className='card__rank'>{anime.rank}</div>
           </a>
          </div>
        )})
        :
        null
        }

    </div>


)

}

export default Top
