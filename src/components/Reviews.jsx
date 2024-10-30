import React, { useState, useEffect } from 'react'
import reviewsData from '../data/reviews'
import Title from './Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const Reviews = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	// Automatyczne przesuwanie slidera co 3 sekundy
	useEffect(() => {
		const interval = setInterval(() => {
			handleNext()
		}, 6000) // 3000 ms = 3s

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

	// Wybieramy trzy widoczne recenzje
	const visibleReviews = [
		reviewsData[currentIndex],
		reviewsData[(currentIndex + 1) % reviewsData.length],
		reviewsData[(currentIndex + 2) % reviewsData.length],
	]

	return (
		<div className='reviews-slider'>
			<div className='review-title'>
				<span className='review-icon'>
					<FontAwesomeIcon icon={faQuoteLeft} />
				</span>{' '}
				<Title text='Was sagen Kunden über uns?' />
			</div>

			<div className='review__inner'>
				{visibleReviews.map((review, index) => (
					<div key={index} className='review'>
						<img className='review-image' src={review.src} alt='person' />

						<p className='review__text'>{review.text}</p>
						<p className='review__name'>{review.name}</p>
					</div>
				))}
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
