import React, { useEffect, useRef } from 'react'
import Title from './Title'
import logo2 from '../assets/images/partners-logo/logo2.png'
import logo3 from '../assets/images/partners-logo/logo3.png'
import logo4 from '../assets/images/partners-logo/logo4.png'
import logo5 from '../assets/images/partners-logo/logo5.png'
import logo6 from '../assets/images/partners-logo/logo6.png'
import logo7 from '../assets/images/partners-logo/logo7.png'
import logo8 from '../assets/images/partners-logo/logo8.png'
import logo9 from '../assets/images/partners-logo/logo9.png'
import logo10 from '../assets/images/partners-logo/logo10.png'
import logo11 from '../assets/images/partners-logo/logo11.png'
import logo12 from '../assets/images/partners-logo/logo12.png'
import logo13 from '../assets/images/partners-logo/logo13.png'

const logos = [logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13]

const SliderLogos = () => {
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
		<div className='partners'>
			<div className='section-col section-col__left'>
				<Title text='unsere Partner' />
			</div>
			<div className='slider slider-partners' id='projects'>
				<div className='slider__inner slider__inner--logos' ref={sliderRef}>
					{logos.concat(logos).map((image, index) => (
						<div className='slider__item slider__item--logo' key={index}>
							<div
								className='slider__item slider__item--logo'
								key={index}
								style={{ backgroundImage: `url(${image})` }}
								aria-label={`slider ${index + 1}`}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default SliderLogos
