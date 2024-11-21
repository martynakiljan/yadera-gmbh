import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const BigImage = ({ img }) => {
	const ref = useRef(null)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})

	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25])
	const translateY = useTransform(scrollYProgress, [0, 1], ['0px', '-175px'])

	return (
		<div className='big-image-container' ref={ref}>
			<motion.div
				className='big-image'
				style={{
					backgroundImage: `url(${img})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					scale,
					y: translateY,
				}}
			/>
		</div>
	)
}

export default BigImage
