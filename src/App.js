import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Counter from './components/Counter';
import Register from './pages/Register';
import { Container } from 'react-bootstrap';

export default function App() {
  return (
  <>
    <NavBar/>
    <Container>
    	<Register/>
    </Container>
    {/* <Home/> */}
    <Courses/>
  </>
  );
}