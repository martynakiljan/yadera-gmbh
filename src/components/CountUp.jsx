import { useEffect, useRef, useState } from 'react'
import Link from './Link'

const CountUp = () => {
	const [count, setCount] = useState(0)
	const target = 500
	const elementRef = useRef(null)
	const hasAnimated = useRef(false)

	useEffect(() => {
		const handleCountUp = () => {
			let start = 0
			const duration = 2000
			const startTime = performance.now()

			const updateCount = currentTime => {
				const elapsed = currentTime - startTime
				const progress = Math.min(elapsed / duration, 1)
				const newValue = start + progress * (target - start)

				setCount(parseFloat(newValue.toFixed(1)))

				if (progress < 1) {
					requestAnimationFrame(updateCount)
				}
			}

			requestAnimationFrame(updateCount)
		}

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting && !hasAnimated.current) {
						handleCountUp()
						hasAnimated.current = true
					}
				})
			},
			{ threshold: 0.1 }
		)

		if (elementRef.current) {
			observer.observe(elementRef.current)
		}

		return () => {
			if (elementRef.current) {
				observer.unobserve(elementRef.current)
			}
		}
	}, [target])

	return (
		<div className='section count-up__section'>
			<div className='section-col section-col__left'></div>
			<div className='section-col section-col__right'>
				<div className='about__text-wrapper'>
					<div className='count-up' ref={elementRef}>
						<div className='count-up__number'>+{count}</div>
						<p className='count-up__text'>abgeschlossene Projekte</p>
					</div>
					<Link text='Möchten Sie unsere Projekte sehen?' href='/projekte' />
				</div>
			</div>
		</div>
	)
}

export default CountUp
