import React, { useEffect, useRef } from 'react'
import slider1 from '../assets/images/slider/slider1.jpeg'
import slider2 from '../assets/images/slider/slider2.jpeg'
import slider3 from '../assets/images/slider/slider3.jpeg'
import slider4 from '../assets/images/slider/slider4.jpeg'
import slider5 from '../assets/images/slider/slider5.jpeg'
import slider6 from '../assets/images/slider/slider6.jpeg'
import slider7 from '../assets/images/slider/slider7.jpeg'
import slider8 from '../assets/images/slider/slider8.jpeg'
import slider9 from '../assets/images/slider/slider9.jpeg'
import slider10 from '../assets/images/slider/slider10.jpeg'
import slider11 from '../assets/images/slider/slider11.jpeg'
import slider12 from '../assets/images/slider/slider12.jpeg'
import slider13 from '../assets/images/slider/slider13.jpeg'
import slider14 from '../assets/images/slider/slider14.jpeg'
import slider15 from '../assets/images/slider/slider15.jpeg'
import slider16 from '../assets/images/slider/slider16.jpeg'
import slider17 from '../assets/images/slider/slider17.jpeg'

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
	slider15,
	slider16,
	slider17,
]

const Slider = () => {
	const sliderRef = useRef(null)

	useEffect(() => {
		const slider = sliderRef.current
		let start = 0

		const animate = () => {
			start -= 2 // Prędkość przesuwania - możesz zmienić na -3, aby jeszcze bardziej przyspieszyć
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
		<div className='slider'>
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
