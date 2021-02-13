import React from 'react'
import Icon from '@material-ui/core/Icon';
import Login from './Login.js'
import '../styles/Nav.css'
import {setPopUp,setUser} from '../redux/actions'
import { useSelector,useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom'
import {auth} from '../firebase'

function Nav() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
 
  const history = useHistory()

  return (
    <div className="nav">
       <div className="nav__logo" onClick ={() => history.push('/')}>
          <Icon className="fas fa-dragon" />
          <h2>C2Eanime</h2>
        </div>
      <div className="nav__container">
        {
          state.user.id !== '' ?
          <>
          <div className="nav__watchlist">
            <button onClick={() => history.push('/watchlist')}>
              <Icon className="fas fa-list" /> Watchlist
              <span>{state.watchlist.length}</span>
            </button>
          </div> 
          <div className="nav__account">
          <button
            onClick={() => {auth().signOut();dispatch(setUser({id:'',email:'',username:''}));history.push('/')}}
          ><Icon className="fas fa-door-open" />{state.user.username}</button>
          </div>       
          </> 
          :
          <div className="nav__login">
            <button onClick = {() => {dispatch(setPopUp()) }}><Icon className="fas fa-door-closed" />Log-In</button>
          </div>       
       
        }      
     </div>
     {  state.popUp ? <Login ></Login> : null}
    </div>
  )
}

export default Nav
