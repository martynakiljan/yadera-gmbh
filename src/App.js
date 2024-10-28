/** @format */
import React from 'react'
import './App.css'
import Menu from './components/Menu'
import Header from './components/Header'
import Logo from './components/Logo'
import './styles/all.scss'

function App() {
	return (
		<div className='app'>
			<Logo />
			<Menu />
			<Header />
		</div>
	)
}

export default App
