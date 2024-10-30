import Title from './Title'
import Accordion from './Accordion'
const Services = () => {
	return (
		<div className='about' id='about'>
			<div className='about'>
				<div className='section'>
					<div className='section-col section-col__left'>
						<Title text='was machen wir eigentlich?' />
					</div>
					<div className='section-col section-col__right'>
						<div className='services'>
							<Accordion />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
