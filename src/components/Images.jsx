import React, { useEffect, useRef, useState } from 'react'

const Images = () => {
	const imageRefs = useRef([])
	const [isVisible, setIsVisible] = useState(false) // State to track visibility

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				const visible = entries.some(entry => entry.isIntersecting)
				if (visible) {
					setIsVisible(true) // Set visibility to true if any image is visible
				} else {
					setIsVisible(false) // Reset visibility when none are visible
				}
			},
			{ threshold: 0.2 } // Trigger when 20% of the image is visible
		)

		imageRefs.current.forEach(image => observer.observe(image))

		return () => {
			imageRefs.current.forEach(image => observer.unobserve(image)) // Clean up
			observer.disconnect() // Clean up
		}
	}, [])

	return (
		<div className={`images ${isVisible ? 'images--visible' : ''}`}>
			{' '}
			{/* Add class based on visibility state */}
			<div className='images__inner'>
				{Array.from({ length: 3 }, (_, index) => (
					<div
						key={index}
						className={`image image_${index + 1} ${isVisible ? 'image--visible' : ''}`} // Apply class to each image
						ref={el => (imageRefs.current[index] = el)}></div>
				))}
			</div>
		</div>
	)
}

export default Images
