const Menu = () => {
	return (
		<div className='menu'>
			<div className='menu__inner'>
				<ul className='menu__list'>
					<li className='menu__li'>
						<a className='menu__link' href='home'>
							home
						</a>
					</li>
					<li className='menu__li'>
						<a className='menu__link' href='about'>
							über uns
						</a>
					</li>
					<li className='menu__li'>
						<a className='menu__link' href='services'>
							dienstleistungen
						</a>
					</li>
					<li className='menu__li'>
						<a className='menu__link' href='projects'>
							projekte
						</a>
					</li>
					<li className='menu__li'>
						<a className='menu__link' href='contact'>
							kontakt
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Menu
