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

	return (
		<div className='header'>
			<div className='header__inner'  ref={ref}>
				<motion.div
					style={{
						backgroundSize: sizing,
						backgroundPositionX: translate,
					}}
					className='header__image'>
					<div className='header__title'>
						<h1 className='header__text'>Das Faddaden und Maller Team. </h1>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default Header
