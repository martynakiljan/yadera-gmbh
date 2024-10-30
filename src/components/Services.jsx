import Title from './Title'
import AccordionComponent from './AccordionComponent'
const Services = () => {
	return (
		<div className='about' id='about'>
			<div className='about'>
				<div className='section'>
					<div className='section-col section-col__left'>
						<Title text='was machen wir?' />
					</div>
					<div className='section-col section-col__right'>
						<div className='services'>
							<AccordionComponent />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
