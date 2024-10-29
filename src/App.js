/** @format */
import React from 'react'
import './App.css'
import Menu from './components/Menu'
import Header from './components/Header'
import Services from './components/Services'
import About from './components/About'
import Images from './components/Images'
import './styles/all.scss'

function App() {
	return (
		<div className='app'>
			<Header />
			<Menu />
			<Services />
			<About />
			<Images />
		</div>
	)
}

export default App
