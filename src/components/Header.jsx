import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
	const ref = useRef(null)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})

	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25])
	const translateY = useTransform(scrollYProgress, [0, 1], ['0px', '-175px'])
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

	return (
		<div className='header'>
			<div className='header__inner' ref={ref} id='home'>
				<motion.div
					style={{
						scale,
						y: translateY,
					}}
					className='header__image'>
					<motion.div className='header__title' style={{ opacity }}>
						<div className='header__text-wrapper'>
							<h1 className='header__text'>Das Fassaden und Maller Team.</h1>
							<NavLink to='/offerte' className='header__button'>
								Jetzt Angebot anfordern!
							</NavLink>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	)
}

export default Header
