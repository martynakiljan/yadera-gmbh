/** @format */
import React from 'react'
import './App.css'
import Menu from './components/Menu'
import Header from './components/Header'
import DiagonalComponent from './components/DiagonalComponent'
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
import Contact from './components/Contact'
import Info from './components/Info'
function App() {
	return (
		<div className='app'>
			<Header />
			<Menu />
			<DiagonalComponent />
			<Story />
			<About />
			<BigImage img={image1} />
			<Info />
			<Services />
			<Projects />
			<Slider />
			<Reviews />
			<BigImage img={image1} />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
