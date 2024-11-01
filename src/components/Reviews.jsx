import React, { useState, useEffect } from 'react'
import reviewsData from '../data/reviews'
import Title from './Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const Reviews = () => {
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
		<div className='reviews-slider'>
			<div className='review-title'>
				<Title text='Was sagen Kunden über uns?' />
			</div>

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
	)
}

export default Reviews
