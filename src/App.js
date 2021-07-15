import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Course from './components/Course'

export default function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <Course/>
    </>
  );
}