import React, { useEffect, useRef } from 'react'
import Title from './Title'
import reviewsData from '../data/reviews'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const Reviews = () => {
	const reviewsRef = useRef([])

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('fade-in')
					} else {
						entry.target.classList.remove('fade-in')
					}
				})
			},
			{ threshold: 0.3 }
		)

		reviewsRef.current.forEach(review => {
			if (review) observer.observe(review)
		})

		return () => {
			reviewsRef.current.forEach(review => {
				if (review) observer.unobserve(review)
			})
		}
	}, [])

	return (
		<div className='reviews' id='reviews'>
			<div className='section'>
				<div className='section-col section-col__left'>
					<Title text='was sagen kunden?' />
				</div>
				<div className='section-col section-col__right'>
					<div className='reviews'>
						<div className='review__inner'>
							{reviewsData.map((review, index) => (
								<div className='review' key={index} ref={el => (reviewsRef.current[index] = el)}>
									<span>
										<FontAwesomeIcon icon={faQuoteLeft} />
									</span>
									<p className='review__text'>{review.text}</p>
									<p className='review__name'>- {review.name}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Reviews
