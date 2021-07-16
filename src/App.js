import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Courses from './pages/Courses';



export default function App() {
  return (
  <>
    <NavBar/>
    {/* <Home/> */}
    <Courses/>
  </>
  );
}