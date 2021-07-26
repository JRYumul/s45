import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import SpecificCourse from './pages/SpecificCourse';
import Register from './pages/Register';
import Login from './pages/Login';
import Error from './pages/Error';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserProvider } from './UserContext'

export default function App() {

  //global user state
  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  })

  const unsetUser = () => {

    localStorage.clear()

    setUser({
      id: null,
      isAdmin: null
    })

  }

  useEffect(() => {
    // console.log(user)

    fetch(`${ process.env.REACT_APP_API_URL }/users/details`, {
      headers: {
        Authorization: `Bearer ${ localStorage.getItem('token') }`
      }
    })
    .then(res => res.json())
    .then(data => {

      if(typeof data._id !== "undefined"){
        setUser({
          id: data._id,
          isAdmin: data.isAdmin
        })
      }else{
        setUser({
          id: null,
          isAdmin: null
        })
      }
    })

  }, [])

  return (
    // The Provider component allows any data you pass with it (like our global user state) to be received by any component it is wrapped around (like our pages)
    <UserProvider value={{user, setUser, unsetUser}}>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/courses" component={Courses}/>
          <Route exact path="/courses/:courseId" component={SpecificCourse}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route component={Error}/>
        </Switch>
      </Router>
    </UserProvider>
  );
}