import Header from './Header'
import Slider from './Slider'
import Services from './Services'
import Reviews from './Reviews'
import Welcome from './Welcome'
import SliderLogos from './SliderLogos'
import AboutHome from './AboutHome'
import CountUp from './CountUp'

const Home = () => {
	return (
		<div>
			<Header />
			<Welcome />
			<Services />
			<AboutHome />
			<CountUp />
			<Slider />
			<Reviews />
			<SliderLogos />
		</div>
	)
}

export default Home
