import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

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
		<div className='header' id='home'>
			<div className='header__inner' ref={ref}>
				<motion.div
					style={{
						scale,
						y: translateY,
					}}
					className='header__image'>
					<motion.div className='header__title' style={{ opacity }}>
						<h1 className='header__text'>Das Fassaden und Maller Team.</h1>
					</motion.div>
				</motion.div>
			</div>
		</div>
	)
}

export default Header
