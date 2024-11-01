import React, { useEffect, useRef, useState } from 'react'

const Images = () => {
	const imageRefs = useRef([])
	const [visibleImages, setVisibleImages] = useState([])

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setVisibleImages(prev => [...prev, entry.target])
					}
				})
			},
			{ threshold: 0.2 }
		)

		imageRefs.current.forEach(image => observer.observe(image))

		return () => {
			imageRefs.current.forEach(image => observer.unobserve(image)) // Clean up
			observer.disconnect()
		}
	}, [])

	return (
		<div className='images'>
			<div className='images__inner'>
				{Array.from({ length: 3 }, (_, index) => (
					<div
						key={index}
						className={`image image_${index + 1} ${
							visibleImages.includes(imageRefs.current[index]) ? 'image--visible' : ''
						}`}
						ref={el => (imageRefs.current[index] = el)}></div>
				))}
			</div>
		</div>
	)
}

export default Images
