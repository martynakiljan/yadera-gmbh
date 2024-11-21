import Title from './Title'

const Welcome = () => {
	return (
		<>
			<h1 className='welcome-title welcome-text'>Willkommen bei Yadera GmbH </h1>
			<h2 className='welcome-title welcome-subtitle'>Ihrem Partner für erstklassige Handwerksarbeit!</h2>
			<div className='section section-welcome'>
				<div className='section-col section-col__left'>{<Title text='Erfahren Sie mehr' />}</div>
				<div className='section-col section-col__right'>
					<div className='story__text-wrapper'>
						<div className='welcome'>
							<p className='welcome-text'>
								Seit unserer Gründung im Jahr 2021 stehen wir bei der Yadera GmbH für Qualität, Zuverlässigkeit und
								umfassenden Service. Wir sind stolz darauf, Ihnen ein breites Spektrum an Dienstleistungen anbieten zu
								können, darunter:
							</p>
							<ul className='welcome-list'>
								<li className='welcome-li list-item'>
									Malerarbeiten: Ob frischer Anstrich oder kreative Wandgestaltung – wir bringen Farbe in Ihr Leben.
								</li>
								<li className='welcome-li list-item'>
									Renovationen: Von der kleinen Auffrischung bis zur kompletten Sanierung, wir verleihen Ihrem Zuhause
									neuen Glanz.
								</li>
								<li className='welcome-li list-item'>
									Fassadenarbeiten: Schutz und Schönheit für Ihre Immobilie – wir kümmern uns um Ihre Außenwände.
								</li>
								<li className='welcome-li list-item'>
									Gipserarbeiten: Perfekte Oberflächen und Innenraumgestaltung, auf die Sie sich verlassen können.
								</li>
								<li className='welcome-li list-item'>
									Plattenlegerarbeiten: Hochwertige Fliesen- und Plattenarbeiten für stilvolle und langlebige Böden und
									Wände.
								</li>
							</ul>
							<p className='welcome-subext'>
								Unser Ziel ist es, Ihre Visionen in die Realität umzusetzen. Dabei legen wir großen Wert auf eine
								persönliche Beratung, höchste Handwerkskunst und termingerechte Ausführung. Vertrauen Sie auf unser
								erfahrenes Team – wir machen Ihr Projekt zu unserer Priorität.
							</p>
							<p className='quote'>«Yadera GmbH – Qualität, die bleibt»</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Welcome
