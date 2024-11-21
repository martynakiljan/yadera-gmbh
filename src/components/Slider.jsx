import React, { useEffect, useRef } from 'react'
import slider1 from '../assets/images/slider/slider1.jpg'
import slider2 from '../assets/images/slider/slider2.jpg'
import slider3 from '../assets/images/slider/slider3.jpg'
import slider4 from '../assets/images/slider/slider4.jpg'
import slider5 from '../assets/images/slider/slider5.jpg'
import slider6 from '../assets/images/slider/slider6.jpg'
import slider7 from '../assets/images/slider/slider7.jpg'
import slider8 from '../assets/images/slider/slider8.jpg'
import slider9 from '../assets/images/slider/slider9.jpg'
import slider10 from '../assets/images/slider/slider10.jpg'
import slider11 from '../assets/images/slider/slider11.jpg'
import slider12 from '../assets/images/slider/slider12.jpg'
import slider13 from '../assets/images/slider/slider13.jpg'
import slider14 from '../assets/images/slider/slider14.jpg'
import slider17 from '../assets/images/slider/slider17.jpg'

const images = [
	slider1,
	slider2,
	slider3,
	slider4,
	slider5,
	slider6,
	slider7,
	slider8,
	slider9,
	slider10,
	slider11,
	slider12,
	slider13,
	slider14,
	slider17,
]

const Slider = () => {
	const sliderRef = useRef(null)

	useEffect(() => {
		const slider = sliderRef.current
		let start = 0

		const animate = () => {
			start -= 1
			if (start <= -slider.offsetWidth / 2) {
				start = 0
			}
			slider.style.transform = `translateX(${start}px)`
			requestAnimationFrame(animate)
		}

		animate()

		return () => cancelAnimationFrame(animate)
	}, [])

	return (
		<div className='slider' >
			<div className='slider__inner' ref={sliderRef}>
				{images.concat(images).map((image, index) => (
					<div className='slider__item' key={index}>
						<img src={image} alt={`slider ${index + 1}`} />
					</div>
				))}
			</div>
		</div>
	)
}

export default Slider
