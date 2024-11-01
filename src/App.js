/** @format */
import React from 'react'
import './App.css'
import Menu from './components/Menu'
import Header from './components/Header'
import About from './components/About'
import Story from './components/Story'
import BigImage from './components/BigImage'
import Projects from './components/Projects'
import Services from './components/Services'
import Slider from './components/Slider'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import './styles/all.scss'
import image1 from './assets/images/images/image5.jpeg'
import image4 from './assets/images/images/image4.jpeg'
import { motion, useScroll } from 'framer-motion'
import Contact from './components/Contact'
import Info from './components/Info'
import Twoimages from './components/TwoImages'
import ReviewsTest from './components/ReviewsTest'

function App() {
	const { scrollYProgress } = useScroll()

	return (
		<>
			<motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />
			<div className='app'>
				<Header />
				<Menu />
				<Story />
				<About />
				<BigImage img={image1} />
				<Info />
				<Services />
				<Projects />
				<Slider />
				<ReviewsTest />
				<Twoimages />
				<Contact />
				<Footer />
			</div>
		</>
	)
}

export default App
