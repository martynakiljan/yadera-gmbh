import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__inner'>
				<div className='footer__col'>
					{' '}
					<NavLink className='footer-logo' href='/home' />
				</div>
				<div className='footer__col'>
					<ul className='menu__list-footer'>
						<li className='menu__li'>
							<NavLink className='menu__link menu__link--footer' to='/'>
								home
							</NavLink>
						</li>
						<li className='menu__li'>
							<NavLink className='menu__link menu__link--footer' to='/uber-uns' state={{ scrollToId: 'about' }}>
								über uns
							</NavLink>
						</li>
						<li className='menu__li'>
							<NavLink
								className='menu__link menu__link--footer'
								to='/dienstleistungen'
								state={{ scrollToId: 'services' }}>
								dienstleistungen
							</NavLink>
						</li>
						<li className='menu__li'>
							<NavLink className='menu__link menu__link--footer' to='/projekte' state={{ scrollToId: 'projects' }}>
								projekte
							</NavLink>
						</li>

						<li className='menu__li'>
							<NavLink className='menu__link menu__link--footer' to='/kontakt' state={{ scrollToId: 'kontakt' }}>
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
