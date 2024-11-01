import React, { useEffect, useRef, useState } from 'react'

const Twoimages = () => {
	const imageRefs = useRef([])
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				const visible = entries.some(entry => entry.isIntersecting)
				setIsVisible(visible)
			},
			{ threshold: 0.2 }
		)

		imageRefs.current.forEach(image => observer.observe(image))

		return () => {
			imageRefs.current.forEach(image => observer.unobserve(image))
			observer.disconnect()
		}
	}, [])

	return (
		<div className={`twoimages ${isVisible ? 'twoimages--visible' : ''}`}>
			<div className='twoimages__inner'>
				<div
					className={`twoimages__img twoimages__img-1 ${isVisible ? 'twoimages__img--visible' : ''}`}
					ref={el => (imageRefs.current[0] = el)}></div>
				<div
					className={`twoimages__img twoimages__img-2 ${isVisible ? 'twoimages__img--visible' : ''}`}
					ref={el => (imageRefs.current[1] = el)}></div>
			</div>
		</div>
	)
}

export default Twoimages
