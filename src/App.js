/** @format */
import React from 'react'
import './App.css'
import Menu from '@alloc/quick-lru/components/Menu'
import Header from '@alloc/quick-lru/components/Header'
import Services from '@alloc/quick-lru/components/Services'
import About from '@alloc/quick-lru/components/About'
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
