import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/images/logo/logo-white.png'

function Preloader({ setLoading }) {
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 1500)

		return () => clearTimeout(timer)
	}, [setLoading])

	return (
		<motion.div className='preloader'>
			<motion.div
				className='preloader-background'
				initial={{ opacity: 1 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0 }}
			/>
			<motion.img
				src={logo}
				alt='Logo'
				className='logo'
				initial={{ opacity: 1, scale: 1 }}
				animate={{
					opacity: 1,
					scale: 1.2,
				}}
				exit={{ opacity: 0 }}
				transition={{
					duration: 1.2,
					ease: 'easeOut',
				}}
			/>
		</motion.div>
	)
}

export default Preloader
