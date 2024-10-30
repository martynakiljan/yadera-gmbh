import { useState, useEffect } from 'react'
import { Rotate as Hamburger } from 'hamburger-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile } from '@fortawesome/free-solid-svg-icons'

function Menu() {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className={`menu ${scrolled ? 'scrolled' : ''}`}>
			<div className='menu__inner'>
				<div className='menu__logo-wrapper'>
					<a className={`menu__logo ${scrolled ? 'menu__logo--small' : 'menu__logo--large'}`}></a>
				</div>
				<div className={`menu__hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
					<Hamburger toggled={isOpen} toggle={setIsOpen} />
				</div>
				{isOpen && (
					<ul className={`menu__list ${isOpen ? 'open' : ''}`}>
						<li className='menu__li'>
							<a className='menu__link' href='#home'>
								home
							</a>
						</li>
						<li className='menu__li'>
							<a className='menu__link' href='#about'>
								über uns
							</a>
						</li>
						<li className='menu__li'>
							<a className='menu__link' href='#services'>
								dienstleistungen
							</a>
						</li>
						<li className='menu__li'>
							<a className='menu__link' href='#projects'>
								projekte
							</a>
						</li>
						<li className='menu__li'>
							<a className='menu__link menu__link--contact' href='#contact'>
								kontakt
							</a>
						</li>
					</ul>
				)}
				<div>
					<a className='menu__link menu__link--contact'>
						<span>
							<FontAwesomeIcon icon={faMobile} />
						</span>{' '}
						<span>Kontakt</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Menu
