import React,{useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '../styles/App.css';
import Banner from './Banner'
import Left from './Left'
import Right from './Right'
import Watchlist from './Watchlist'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { useSelector,useDispatch } from 'react-redux'
import {db} from '../firebase'
import Nav from './Nav'
import {addToWatchList} from '../redux/actions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const client = new ApolloClient({
  uri: 'https://http://localhost:5000//graphql',
  cache: new InMemoryCache()
});




function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    let app = document.getElementById('app')
    state.popUp
    ?
    app.style.height = '100vh'
    :
    app.style.height = 'auto'
   },[state.popUp]) 

   useEffect(() => {
    if(state.user.id){
      db.collection("users")
        .doc(state.user.id)
        .collection('watchlist')
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
                dispatch(addToWatchList(doc.id))
            }  
          );
      })
      .catch(function(error) {
      });
    }
   },[state.user.id])
  
  useEffect(() => {
   
    if(state.alert.type !== ''){
    state.alert.type === 'success' 
    ?
    toast.success(state.alert.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
    :
    toast.error(state.alert.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })  
  }   
  },[state.alert]) 

  return (
    <div className="app" id="app">
      <ToastContainer />
      <Router>
       <Nav ></Nav>
        <Switch>
          <Route path="/watchlist">
            <Watchlist key ='watchlist'/>
          </Route>
          <Route path="/">
            <ApolloProvider client={client}>
              <Banner key='banner' ></Banner>
              <div className="app__body" >
                <Left key = 'left'></Left>
                <Right key ='right '></Right>
              </div>
            </ApolloProvider>
          </Route>    
        </Switch>
       
      </Router>

    </div>
  );
}

export default App;
