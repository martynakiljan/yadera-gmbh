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
					top: window.innerHeight,
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
			<div className='section services-details' id='dienstleistungen'>
				<div className='section-col section-col__left'>
					<Title text='Womit beschäftigen wir uns?' fullwidth={true} />
				</div>
				<div className='section-col section-col__right'>
					<div className='services-details__inner'>
						<div className='service-detail service-detail__1' id='service1'>
							<h2 className='service-detail__title'>
								<span className='service-num'>1.</span> Malerarbeiten
							</h2>
							<div className='service-detail__list list'>
								<ul>
									<li className='list-item'>Wand- und Deckenanstriche</li>
									<li className='list-item'>Lackierarbeiten (Türen, Fenster, Geländer)</li>
									<li className='list-item'>Kreative Wandgestaltung (z. B. Spachteltechniken, Tapeten)</li>
									<li className='list-item'>Fassadenanstriche und -schutz</li>
									<li className='list-item'>Korrosions- und Holzschutz</li>
								</ul>
							</div>
						</div>

						<div className='service-detail service-detail__2' id='service2'>
							<h2 className='service-detail__title'>
								<span className='service-num'>2.</span> Renovationen
							</h2>
							<div className='service-detail__list list'>
								<ul>
									<li className='list-item'>Sanierung und Modernisierung von Innenräumen</li>
									<li className='list-item'>Trockenbau und Raumgestaltung</li>
									<li className='list-item'>Komplettumbauten</li>
									<li className='list-item'>Altbausanierung</li>
									<li className='list-item'>Schimmel- und Feuchtigkeitsbekämpfung</li>
								</ul>
							</div>
						</div>

						<div className='service-detail service-detail__3' id='service3'>
							<h2 className='service-detail__title'>
								<span className='service-num'>3.</span> Gipserarbeiten
							</h2>
							<div className='service-detail__list list'>
								<ul>
									<li className='list-item'>Glatt- und Strukturputze</li>
									<li className='list-item'>Trockenbau und Deckenverkleidungen</li>
									<li className='list-item'>Innen- und Außenputzarbeiten</li>
									<li className='list-item'>Reparaturen und Ausbesserungen</li>
									<li className='list-item'>Schall- und Brandschutzverkleidungen</li>
								</ul>
							</div>
						</div>

						<div className='service-detail service-detail__4' id='service4'>
							<h2 className='service-detail__title'>
								<span className='service-num'>4.</span> Fassadenarbeiten
							</h2>
							<div className='service-detail__list list'>
								<ul>
									<li className='list-item'>Verputzte Außenwärmedämmungen (WDVS)</li>
									<li className='list-item'>Hinterlüftete Fassadensysteme</li>
									<li className='list-item'>Risssanierung und Fassadenschutz</li>
									<li className='list-item'>Reinigung und Instandhaltung von Fassaden</li>
									<li className='list-item'>Fassadenbeschichtungen und Gestaltungen</li>
								</ul>
							</div>
						</div>

						<div className='service-detail service-detail__5' id='service5'>
							<h2 className='service-detail__title'>
								<span className='service-num'>5.</span> Plattenlegerarbeiten
							</h2>
							<div className='service-detail__list list'>
								<ul>
									<li className='list-item'>Verlegung von Fliesen, Platten und Mosaiken</li>
									<li className='list-item'>Bad- und Küchenplattenarbeiten</li>
									<li className='list-item'>Bodenbeläge in Wohn- und Außenbereichen</li>
									<li className='list-item'>Abdichtungsarbeiten im Nassbereich</li>
									<li className='list-item'>Reparaturen und Austausch von beschädigten Fliesen</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='service-svg'></div>
		</>
	)
}

export default ServicesDetails
