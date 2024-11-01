import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Header = () => {
	const ref = useRef(null)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})

	const sizing = useTransform(scrollYProgress, [0, 1], ['100%', '125%'])
	const translate = useTransform(scrollYProgress, [0, 1], ['0px', '-175px'])
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]) // Adjust opacity based on scroll

	return (
		<div className='header'>
			<div className='header__inner' ref={ref}>
				<motion.div
					style={{
						backgroundSize: sizing,
						backgroundPositionX: translate,
					}}
					className='header__image'>
					<motion.div
						className='header__title'
						style={{ opacity }} // Apply opacity to title
					>
						<h1 className='header__text'>Das Faddaden und Maller Team.</h1>
					</motion.div>
				</motion.div>
			</div>
		</div>
	)
}

export default Header
