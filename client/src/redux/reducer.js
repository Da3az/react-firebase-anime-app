import {initialState} from './states'


export let reducer = (state = initialState,action) => {
  switch (action.type){
    case 'SET_POP_UP':
      return {
        ...state,
        popUp:!state.popUp,
      }
      break;
    case 'SET_USER':
      return {
        ...state,
        user:action.payload
      }
      break;
    case 'SET_ALERT':
      return {
        ...state,
        alert:action.payload
      }
      break;  
    case 'ADD_TO_WATCH_LIST':
      return {
        ...state,
        watchlist:[...state.watchlist,action.payload]
      }
      break;  
    case 'REMOVE_FROM_WATCH_LIST':
      let array = []
      for (let i = 0; i < state.watchlist.length; i++) {
        const element = state.watchlist[i];
        if(element !== action.payload) array.push(element)
      }
      return {
        ...state,
        watchlist:[...array]
      }
      break;    
    default:
      return state

  }

  return state
}
