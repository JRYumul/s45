import Banner from '../components/Banner';
import Highlights from '../components/Highlights';
import { Container } from 'react-bootstrap';

export default function Home(){
	return(
		<>
			<Banner/>
			<Container>
				<Highlights/>
			</Container>
		</>
	)
}