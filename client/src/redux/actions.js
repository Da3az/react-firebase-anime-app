const SET_POP_UP = 'SET_POP_UP'
const SET_USER = 'SET_USER'
const SET_EMAIL = 'SET_EMAIL'
const SET_ALERT = 'SET_ALERT'
const ADD_TO_WATCH_LIST = 'ADD_TO_WATCH_LIST'
const REMOVE_FROM_WATCH_LIST = 'REMOVE_FROM_WATCH_LIST'

export function setPopUp(){
  return{
    type:SET_POP_UP,
  }
}

export function setUser(name){
  return{
    type:SET_USER,
    payload:name
  }
}

export function addToWatchList(anime){
  return{
    type:ADD_TO_WATCH_LIST,
    payload:anime
  }
}

export function removeFromWatchList(anime){
  return{
    type:REMOVE_FROM_WATCH_LIST,
    payload:anime
  }
}

export function setEmail(email){
  return{
    type:SET_EMAIL,
    payload:email
  }
}

export function setAlert(email){
  return{
    type:SET_ALERT,
    payload:email
  }
}

