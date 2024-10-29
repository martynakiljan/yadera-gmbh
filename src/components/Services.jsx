import Title from './Title'

const Services = () => {
	return (
		<div className='about' id='about'>
			<div className='about'>
				<div className='section'>
					<div className='section-col section-col__left'>
						<Title text='was machen wir?' />
					</div>
					<div className='section-col section-col__right'></div>
				</div>
				<div className='services'>
					<div className='services__inner'>
						<div className='service'>
							<div className='service-image service-image-3'></div>
							<div className='service-text'>
								Hinterlüftete<br></br> Fassadensysteme
							</div>
							<div className='service-description'>
								Malerarbeiten Ob Innere oder Äußere Malerarbeiten, Privatkunden oder Unternehmen wir bieten ein großes
								Spektrum im Malerbereich an
							</div>
						</div>
						<div className='service'>
							<div className='service-image service-image-1'></div>
							<div className='service-text'>Malerarbeiten</div>
							<div className='service-description'>
								Malerarbeiten Ob Innere oder Äußere Malerarbeiten, Privatkunden oder Unternehmen wir bieten ein großes
								Spektrum im Malerbereich an
							</div>
						</div>
						<div className='service'>
							<div className='service-image service-image-2'></div>
							<div className='service-text'>
								Verputzte <br></br>Aussenwärmedämmung
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
