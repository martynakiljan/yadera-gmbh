import BigImage from './BigImage'
import Title from './Title'
import img from '../assets/images/images/image4.jpeg'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const ServicesDetails = () => {
	const location = useLocation()

	useEffect(() => {
		if (location.state?.scrollToId) {
			const element = document.getElementById(location.state.scrollToId)
			if (element) {
				window.scrollTo({
					top: window.innerHeight * 0.7,
					behavior: 'smooth',
				})
			}
		} else if (location.state?.serviceId) {
			const element = document.getElementById(location.state.serviceId)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [location.state])



	return (
		<>
			<BigImage img={img} />
			<div className='services-details section-scroll' id='dienstleistungen'>
				<div className='section-col section-col__left section-scroll'>
					<Title text='Womit beschäftigen wir uns?' fullwidth={true} />
				</div>
			</div>
			<div className='service-details fade-in'>
				<div className='service-details__item service-details__item-title service__item-1'>
					<p className='service-details__title'>Malararbeiten</p>
				</div>
				<div className='service-details__item service-details__item-list'>
					<ul>
						<li className='list-item'>Wand- und Deckenanstriche</li>
						<li className='list-item'>Lackierarbeiten (Türen, Fenster, Geländer)</li>
						<li className='list-item'>Kreative Wandgestaltung (z. B. Spachteltechniken, Tapeten)</li>
						<li className='list-item'>Fassadenanstriche und -schutz</li>
						<li className='list-item'>Korrosions- und Holzschutz</li>
					</ul>
				</div>
			</div>
			<div className='service-details fade-in revert'>
				<div className='service-details__item service-details__item-title service__item-2'>
					<p className='service-details__title'>Gipserarbeiten</p>
				</div>
				<div className='service-details__item service-details__item-list'>
					<ul>
						<li className='list-item'>Glatt- und Strukturputze</li>
						<li className='list-item'>Trockenbau und Deckenverkleidungen</li>
						<li className='list-item'>Innen- und Außenputzarbeiten</li>
						<li className='list-item'>Reparaturen und Ausbesserungen</li>
						<li className='list-item'>Schall- und Brandschutzverkleidungen</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default ServicesDetails
