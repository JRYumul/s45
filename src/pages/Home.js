import Banner from '../components/Banner';
import Highlights from '../components/Highlights';
import { Container } from 'react-bootstrap'

export default function Home() {

	const data = {
		title: "Zuitt Coding Bootcamp",
		content: "Opportunities for everyone, everywhere",
		destination: "/courses",
		label: "Enroll now!"
	}

  return (
      <>
        <Banner bannerProps={data}/>
        <Container>
          <Highlights/>
        </Container>
      </>
      );
  }
