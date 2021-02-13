import React ,{useState,useEffect} from 'react'
import {auth,db} from '../firebase'
import { useDispatch } from 'react-redux'
import {setPopUp,setUser,setAlert} from '../redux/actions'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles/Login.css'
import '../styles/Register.css'
import '../styles/Auth.css'
import image1 from '../images/mob1.png'
import image2 from '../images/mob2.png'

export default function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [username,setUserName] = useState('')
    const [method,setMethod] = useState('login')
    const dispatch = useDispatch()
   
    useEffect(() => {
    let authPage =  document.getElementById('auth')
    authPage.addEventListener('click',(e) => {
      if(e.target.id === 'auth'){
      dispatch(setPopUp())
      }
    })
    },[])
    
   

    const login = (e) => {
      e.preventDefault()
      auth()
        .signInWithEmailAndPassword(email, password)
        .then((user)=>{
          dispatch(setPopUp())
          db.collection("users").where("email", "==", email)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    dispatch(setUser({
                      username:doc.data().name,
                      email:doc.data().email,
                      id:doc.id
                    })
                  
                );
            })})
            .catch(function(error) {
              dispatch(setAlert({
                type:'error',
                message:"Error getting documents: "+error
              }))
          });
          setUserName('');setEmail('');setPassword('');
        })
        .catch(err => {
          dispatch(setAlert({
            type:'error',
            message:err.message
          }))
        })
    }
     const register = (e) => {
     e.preventDefault()
     auth().createUserWithEmailAndPassword(email, password)
         .then(user => {
            db.collection("users").add({
              name: username,
              email:email,
              watchlist:''
            })
            .then(function(docRef) {
              setUserName('');setEmail('');setPassword('');
            })
            .catch(function(error) {
              dispatch(setAlert({
                type:'error',
                message:"Error adding document: " + error
              }))
            });
          setMethod('login')
         //   history.push('/')
        }) 
         .catch(err => {
          dispatch(setAlert({
            type:'error',
            message:"Error adding document: " + err.message
          }))
         })
    }
    return (

          <div className='auth' id='auth'>            
             {
                method === 'login' 
                ?
                <div className="register">
                  <form className="form" type="submit" action="">
                  <h1>Log-in</h1>
                  <img id="login-img" src={image1} alt=""/>

                  <TextField
                    className="input"
                    label="e-mail"
                    floatingLabelText="e-mail"
                    name="username"
                    type="email"
                    autoFocus
                    value={email}
                    onChange={e=>{setEmail(e.target.value)}} 
                  /><br />
                  <TextField
                    value={password}
                    className="input"
                    label="password"
                    floatingLabelText="Password"
                    name="password"
                    type="password"
                    onChange={e=>setPassword(e.target.value)}
                  /><br />
                  <Button
                    variant="contained"
                    className="btn"
                    label="Submit"
                    primary={true}
                    onClick={login}
                  >Login</Button>
                  <p>Don't have an account yet? <span onClick={() => {setEmail('');setPassword('');setMethod('register');}}>Register here</span>.</p>
                </form>
                </div> 
                :
                <div className="login">
                  <form className="form" action="" >
                      <h1>Register</h1>
                      <img id="register-img" src={image2} alt=""/>
                      <TextField
                        value={username}
                        className="input"
                        label="username"
                        hintText="Enter Username"
                        floatingLabelText="Username"
                        name="username"
                        autoFocus
                        onChange={e=>setUserName(e.target.value)}
                      /><br />
                      <TextField
                        className="input"
                        label="e-mail"
                        floatingLabelText="e-mail"
                        name="username"
                        type="email"
                        autoFocus
                        value={email}
                        onChange={e=>{setEmail(e.target.value)}} 
                      /><br />
                      <TextField
                        value={password}
                        className="input"
                        label="password"
                        floatingLabelText="Password"
                        name="password"
                        type="password"
                        onChange={e=>setPassword(e.target.value)}
                      /><br />
                      <Button
                        variant="contained" 
                        className="btn" 
                        label="Submit"
                        primary={true} 
                        onClick={(e) => {register(e)}}
                        >Register</Button>
                      <p>Already have an account? <span onClick={() => {setUserName('');setEmail('');setPassword('');setMethod('login')}}>Login here</span>.</p>
                  </form>
                </div>
              }
          </div>
    )
}
