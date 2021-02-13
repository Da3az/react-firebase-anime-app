import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import RemoveIcon from '@material-ui/icons/Remove';
import {db} from '../firebase'
import {useHistory} from 'react-router-dom';
import {removeFromWatchList,setAlert} from '../redux/actions'

import '../styles/Watchlist.css'
export default function Watchlist() {
    const state = useSelector(state => state);
    const [watchlist,setWatchlist] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        if(state.user.id === ''){
            history.push('/')
        }else{
        db.collection("users")
        .doc(state.user.id)
        .collection('watchlist')
        .get()
        .then(function(querySnapshot) {
            let arr = []
            querySnapshot.forEach(function(doc) {
                arr.push(doc.data())
            
            });
            setWatchlist([...arr])
           
        })
        .catch(function(error) {
            dispatch(setAlert({
                type:'error',
                message:"Error getting documents: "+error
              }))
            
        });
    }
    },[state.watchlist])

   
   const remove = (id) => {
    db.collection('users').doc(state.user.id).collection('watchlist').doc(id).delete().then(function() {
        dispatch(setAlert({
            type:'success',
            message:"Removed from watchlist"
        }))
    }).catch(function(error) {
        dispatch(setAlert({
            type:'error',
            message:"Error getting documents: "+error
          }))
    });
   }

    return (
        <div  className="watchlist" >
           
            {
                watchlist.map(anime => (
                    
                <div className="watchlist__anime">
                  <div className="watchlist__left">
                    <div className="watchlist__anime__title">{anime.title}</div>
                    <div className="watchlist__anime__image"><img src={anime.image} alt=""/></div>
                    <div className="watchlist__anime__link"><a href={anime.link} target='_blank'>{anime.link}</a></div>
                  </div>
                  <div className="watchlist__right">
                    <div className="watchlist__anime__description">
                        {anime.description}
                    </div>
                  </div>
                  <div className="watchlist__remove">
                      <button onClick={() => {remove(anime.id);dispatch(removeFromWatchList(anime.id))}}><RemoveIcon></RemoveIcon>Remove from watchlist</button>
                  </div>
                </div>
                ))
            }
        </div>
    )
}
