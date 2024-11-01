import Title from './Title'
import Link from './Link'
import React, { useState, useEffect } from 'react'
import reviewsData from '../data/reviews'

const ReviewsTest = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	// Automatyczne przesuwanie slidera co 6 sekund
	useEffect(() => {
		const interval = setInterval(() => {
			handleNext()
		}, 6000) // 6000 ms = 6s

		return () => clearInterval(interval)
	}, [currentIndex])

	// Funkcja do przechodzenia do następnej recenzji
	const handleNext = () => {
		setCurrentIndex(prevIndex => (prevIndex + 1) % reviewsData.length)
	}

	// Funkcja do przechodzenia do poprzedniej recenzji
	const handlePrev = () => {
		setCurrentIndex(prevIndex => (prevIndex - 1 + reviewsData.length) % reviewsData.length)
	}
	return (
		<div className='about' id='about'>
			<div className='about'>
				<div className='section'>
					<div className='section-col section-col__left'>
						<Title text='Was sagen unsere Kunden?' />
					</div>
					<div className='section-col section-col__right'>
						<div className='reviews-slider'>
							<div className='review__inner'>
								{/* Render only the current review */}
								<div className='review'>
									<img className='review-image' src={reviewsData[currentIndex].src} alt='person' />
									<p className='review__text'>{reviewsData[currentIndex].text}</p>
									<p className='review__name'>{reviewsData[currentIndex].name}</p>
								</div>
							</div>

							<div className='slider__controls'>
								<button onClick={handlePrev} className='slider__button slider__button--prev'>
									&#8592; {/* Strzałka w lewo */}
								</button>
								<button onClick={handleNext} className='slider__button slider__button--next'>
									&#8594; {/* Strzałka w prawo */}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ReviewsTest
