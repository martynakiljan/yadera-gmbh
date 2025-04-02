import { useState, useEffect } from 'react'
import { Rotate as Hamburger } from 'hamburger-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'

function Menu() {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const [isMobile, setIsMobile] = useState(window.innerWidth < 996)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const closeMenu = () => {
		setIsOpen(false)
	}

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50)
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 996)
		}

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const navigate = useNavigate()
	const location = useLocation()

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
		const isHomePage = path === '/'
		if (isMobile) {
			navigate(path)
			setTimeout(() => {
				scrollToTop()
			}, 0)
			closeMenu()
			return
		}
		if (isHomePage) {
			navigate(path)
			setTimeout(() => {
				scrollToTop()
			}, 0)
			closeMenu()
		} else if (scrollToId) {
			navigate(path, { state: { scrollToId } })
			closeMenu()
		} else {
			navigate(path)
			setTimeout(() => {
				scrollToTop()
			}, 0)
			closeMenu()
		}
	}

	return (
		<div className={`menu ${scrolled ? 'scrolled' : ''}`}>
			<div className='menu__inner'>
				<div className='menu__mobile'>
					<NavLink className='menu__logo-wrapper menu__logo-wrapper-mobile' to='/'>
						<div className='menu__logo'></div>
					</NavLink>
					<div className={`menu__hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
						<Hamburger toggled={isOpen} toggle={setIsOpen} />
					</div>
					{isOpen && (
						<ul className={`menu__list ${isOpen ? 'open' : ''}`}>
							<li className='menu__li'>
								<a className='menu__link' onClick={() => handleNavigation('/', null)}>
									home
								</a>
							</li>
							<li className='menu__li'>
								<a className='menu__link' onClick={() => handleNavigation('/uber-uns', 'uber-uns')}>
									über uns
								</a>
							</li>
							<li className='menu__li'>
								<a className='menu__link' onClick={() => handleNavigation('/dienstleistungen', 'dienstleistungen')}>
									dienstleistungen
								</a>
							</li>
							<li className='menu__li'>
								<a className='menu__link' onClick={() => handleNavigation('/projekte', 'projekte')}>
									projekte
								</a>
							</li>
							<li className='menu__li'>
								<span
									className='menu__link menu__link--contact'
									onClick={() => handleNavigation('/kontakt', 'kontakt')}>
									kontakt
								</span>
							</li>
							
						</ul>
					)}
	
				</div>

				<div className='menu__desktop'>
					<ul className='menu__list-desktop'>
						<NavLink className='menu__logo-wrapper menu__logo-wrapper-desktop' to='/'>
							<div className='menu__logo'></div>
						</NavLink>
						<li className='menu__li-desktop'>
							<NavLink className='menu__link' to='/' onClick={closeMenu}>
								home
							</NavLink>
						</li>
						<li className='menu__li-desktop'>
							<span className='menu__link' onClick={() => handleNavigation('/uber-uns', 'uber-uns')}>
								über uns
							</span>
						</li>
						<li className='menu__li-desktop'>
							<span className='menu__link' onClick={() => handleNavigation('/dienstleistungen', 'dienstleistungen')}>
								dienstleistungen
							</span>
						</li>
						<li className='menu__li-desktop'>
							<span className='menu__link' onClick={() => handleNavigation('/projekte', 'projekte')}>
								projekte
							</span>
						</li>
						<li className='menu__li-desktop'>
							<span className='menu__link' onClick={() => handleNavigation('/kontakt', 'kontakt')}>
								kontakt
							</span>
						</li>
						{/* <li className='menu__li-desktop'>
							<a className='menu__link menu__link--contact' href='tel:+41791332929'>
								<span>
									<FontAwesomeIcon icon={faPhoneVolume} />
								</span>{' '}
								<span className='menu__Link menu__link--phone'>+41 79 133 29 29</span>
							</a>
						</li> */}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Menu
