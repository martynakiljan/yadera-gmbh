import BigImage from './BigImage'
import Title from './Title'
import img from '../assets/images/images/image4.jpeg'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const ServicesDetails = () => {
	const location = useLocation()

	useEffect(() => {
		if (location.state?.serviceId) {
			const element = document.getElementById(location.state.serviceId)
			if (element) {
				const offset = 100
				const elementPosition = element.getBoundingClientRect().top + window.scrollY
				window.scrollTo({
					top: elementPosition - offset,
					behavior: 'smooth',
				})
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
			<div className='service-details fade-in' id='service1'>
				<div className='service-details__item service-details__item-title service__item-1'>
					<p className='service-details__title'>Malerarbeiten</p>
				</div>
				<div className='service-details__item service-details__item-list'>
					<ul>
						<li className='list-item'>Innere & Äussere Malerarbeiten</li>
						<li className='list-item'>Spritzarbeiten</li>
						<li className='list-item'>Tapezierarbeiten</li>
						<li className='list-item'>Strassenmarkierungen</li>
						<li className='list-item'>Dekorative Arbeiten</li>
					</ul>
				</div>
			</div>
			<div className='service-details fade-in revert' id='service2'>
				<div className='service-details__item service-details__item-title service__item-2'>
					<p className='service-details__title'>Renovationen</p>
				</div>
				<div className='service-details__item service-details__item-list'>
					<ul>
						<li className='list-item'>Sanierung und Modernisierung von Innenräumen</li>
						<li className='list-item'>Trockenbau und Raumgestaltung</li>
						<li className='list-item'>Komplettumbauten</li>
						<li className='list-item'>Altbausanierung</li>
						<li className='list-item'>Schimmel- und Feuchtigkeitsbekämpfung</li>
					</ul>
				</div>
			</div>
			<div className='service-details fade-in ' id='service3'>
				<div className='service-details__item service-details__item-title service__item-3'>
					<p className='service-details__title'>Gipserarbeiten</p>
				</div>
				<div className='service-details__item service-details__item-list'>
					<ul>
						<li className='list-item'>Glatt- und Strukturputze</li>
						<li className='list-item'>Trockenbau und Deckenverkleidungen</li>
						<li className='list-item'>Innen- und Aussenputzarbeiten</li>
						<li className='list-item'>Reparaturen und Ausbesserungen</li>
						<li className='list-item'>Schall- und Brandschutzverkleidungen</li>
					</ul>
				</div>
			</div>
			<div className='service-details fade-in revert' id='service4'>
				<div className='service-details__item service-details__item-title service__item-4'>
					<p className='service-details__title'>Fassadenarbeiten</p>
				</div>
				<div className='service-details__item service-details__item-list'>
					<ul>
						<li className='list-item'>Verputzte Aussenwärmedämmungen (WDVS)</li>
						<li className='list-item'>Hinterlüftete Fassadensysteme</li>
						<li className='list-item'>Risssanierung und Fassadenschutz</li>
						<li className='list-item'>Reinigung und Instandhaltung von Fassaden</li>
						<li className='list-item'>Fassadenbeschichtungen und Gestaltungen</li>
					</ul>
				</div>
			</div>
			<div className='service-details fade-in ' id='service5'>
				<div className='service-details__item service-details__item-title service__item-5'>
					<p className='service-details__title'>Plattenlegerarbeiten</p>
				</div>
				<div className='service-details__item service-details__item-list'>
					<ul>
						<li className='list-item'>Verlegung von Fliesen, Platten und Mosaiken</li>
						<li className='list-item'>Bad- und Küchenplattenarbeiten</li>
						<li className='list-item'>Bodenbeläge in Wohn- und Außenbereichen</li>
						<li className='list-item'>Abdichtungsarbeiten im Nassbereich</li>
						<li className='list-item'>Reparaturen und Austausch von beschädigten Fliesen</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default ServicesDetails
