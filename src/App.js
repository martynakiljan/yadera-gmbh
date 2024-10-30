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
import image1 from './assets/images/images/image4.jpeg'
import Contact from './components/Contact'

function App() {
	return (
		<div className='app'>
			<Header />
			<Menu />
			<DiagonalComponent />
			<Story />
			<About />
			<BigImage img={image1} />
			<Services />
			<Projects />
			<Slider />
			<Reviews />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
