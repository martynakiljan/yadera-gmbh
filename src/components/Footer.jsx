import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Footer = () => {
	const navigate = useNavigate()
	const [isMobile, setIsMobile] = useState(window.innerWidth < 996)

	const getPageMaxScroll = () => {
		return (
			Math.max(
				document.body.scrollHeight,
				document.body.offsetHeight,
				document.documentElement.clientHeight,
				document.documentElement.scrollHeight,
				document.documentElement.offsetHeight
			) - window.innerHeight
		)
	}

	const scrollToTop = () => {
		const maxScroll = getPageMaxScroll()
		let top = -1

		if (top > maxScroll) {
			top = maxScroll
		}

		window.scroll({
			top: top,
			left: 0,
			behavior: 'smooth',
		})
	}


	const handleNavigation = (path, scrollToId) => {
		if (isMobile) {
			navigate(path)
			setTimeout(() => {
				scrollToTop()
			}, 0)
	
			return
		}
		else if (scrollToId) {
			navigate(path, { state: { scrollToId } })
			window.scrollTo({
				top: window.innerHeight * 0.7,
				behavior: 'smooth',
			})
		} else {
			navigate(path)
		}
	}

	return (
		<div className='footer'>
			<div className='footer__inner'>
				<div className='footer__col'>
					{' '}
					<NavLink className='footer-logo' to='/home' />
				</div>
				<div className='footer__col'>
					<ul className='menu__list-footer'>
						<li className='menu__li'>
							<NavLink className='menu__link menu__link--footer' to='/' onClick={() => handleNavigation('/', null)}>
								home
							</NavLink>
						</li>
						<li className='menu__li'>
							<NavLink
								className='menu__link menu__link--footer'
								to='/uber-uns'
								onClick={() => handleNavigation('/uber-uns', 'uber-uns')}>
								über uns
							</NavLink>
						</li>
						<li className='menu__li'>
							<NavLink
								className='menu__link menu__link--footer'
								to='/dienstleistungen'
								onClick={() => handleNavigation('/dienstleistungen', 'dienstleistungen')}>
								dienstleistungen
							</NavLink>
						</li>
						<li className='menu__li'>
							<NavLink
								className='menu__link menu__link--footer'
								to='/projekte'
								onClick={() => handleNavigation('/projekte', 'projekte')}>
								projekte
							</NavLink>
						</li>
						<li className='menu__li'>
							<NavLink
								className='menu__link menu__link--footer'
								to='/offerte'
								onClick={() => handleNavigation('/offerte', 'offerte')}>
								Angebotsanfrage
							</NavLink>
						</li>
						<li className='menu__li'>
							<NavLink
								className='menu__link menu__link--footer'
								to='/kontakt'
								onClick={() => handleNavigation('/kontakt', 'kontakt')}>
								kontakt
							</NavLink>
						</li>
					</ul>
				</div>

				<div className='contact__col'>
					<div>
						<FontAwesomeIcon icon={faLocationDot} />
					</div>
					<a href='https://maps.app.goo.gl/9P5jcE5JLoMsr5b78'>
						<p className='contact__title'>Standort</p>
						<p className='contact__street'>Dorfstrasse 11a</p>
						<p className='contact__city'>8603 Schwerzenbach</p>
					</a>
				</div>
				<div className='footer__col'>
					<div>
						<FontAwesomeIcon icon={faPhone} />
					</div>
					<div>
						{' '}
						<p className='contact__title '>Kontakt</p>
						<a className='contact__tel' href='tel:+41791332929'>
							+41 79 133 29 29{' '}
						</a>
						<a className='contact__email' href='mailto:info@yadera.ch'>
							info@yadera.ch
						</a>
					</div>
				</div>
			</div>
			<p className='footer-copy'>Copyright © 2024 Yadera GmbH </p>
		</div>
	)
}

export default Footer
