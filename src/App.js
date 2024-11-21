import React, { useEffect, useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import About from './components/About'
import ServicesDetails from './components/ServicesDetails'
import Footer from './components/Footer'
import { motion, useScroll } from 'framer-motion'
import Contact from './components/Contact'
import './styles/all.scss'
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom'
import Projects from './components/Projects'
import Home from './components/Home'
import Preloader from './components/Preloader'
import ContactWidget from './components/ContactWidget'
import OffertForm from './components/OffertForm'

function AppContent() {
	const { scrollYProgress } = useScroll()
	const [isVisible, setIsVisible] = useState(false)

	const location = useLocation()

	useEffect(() => {
		const body = document.body
		if (location.pathname === '/dienstleistungen') {
			body.classList.add('add-svg')
		} else {
			body.classList.remove('add-svg')
		}
	}, [location])

	useEffect(() => {
		const isHomePage = location.pathname === '/'

		window.scrollTo({
			top: isHomePage ? 0 : window.innerHeight * 0.7,
			behavior: 'smooth',
		})
	}, [location])

	const handleScroll = () => {
		const currentScroll = window.scrollY
		setIsVisible(currentScroll > 300)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />
			<div className='app'>
				<div className='sections'>
					<Menu />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/uber-uns' element={<About />} />
						<Route path='/dienstleistungen' element={<ServicesDetails />} />
						<Route path='/projekte' element={<Projects />} />
						<Route path='/kontakt' element={<Contact />} />
						<Route path='/offerte' element={<OffertForm />} />
						<Route path='/*' element={<Navigate to='/' />} />
					</Routes>
					<ContactWidget />
				</div>
				<Footer />
			</div>
		</>
	)
}

function App() {
	const [loading, setLoading] = useState(true)

	return <Router>{loading ? <Preloader setLoading={setLoading} /> : <AppContent />}</Router>
}

export default App
