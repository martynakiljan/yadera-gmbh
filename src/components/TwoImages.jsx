import React, { useEffect, useRef, useState } from 'react'

const Twoimages = () => {
	const imageRefs = useRef([]) // Ref to store image DOM elements
	const [isVisible, setIsVisible] = useState(false) // State to track visibility

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				const visible = entries.some(entry => entry.isIntersecting)
				setIsVisible(visible) // Set visibility to true if any image is visible
			},
			{ threshold: 0.2 } // Trigger when 20% of the image is visible
		)

		imageRefs.current.forEach(image => observer.observe(image)) // Observe each image

		return () => {
			imageRefs.current.forEach(image => observer.unobserve(image)) // Clean up
			observer.disconnect() // Clean up
		}
	}, [])

	return (
		<div className={`twoimages ${isVisible ? 'twoimages--visible' : ''}`}>
			{/* Add class based on visibility state */}
			<div className='twoimages__inner'>
				<div
					className={`twoimages__img twoimages__img-1 ${isVisible ? 'twoimages__img--visible' : ''}`}
					ref={el => (imageRefs.current[0] = el)} // Assign ref for the first image
				></div>
				<div
					className={`twoimages__img twoimages__img-2 ${isVisible ? 'twoimages__img--visible' : ''}`}
					ref={el => (imageRefs.current[1] = el)} // Assign ref for the second image
				></div>
			</div>
		</div>
	)
}

export default Twoimages
