import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Title from './Title'

const Services = () => {
	const navigate = useNavigate()
	const [fadeOut, setFadeOut] = useState(false)

	const handleServiceClick = serviceId => {
		setFadeOut(true)

		setTimeout(() => {
			navigate('/dienstleistungen', { state: { serviceId } })
		}, 500)
	}

	return (
		<div className={`services ${fadeOut ? 'fade-out' : ''}`}>
			<div className='section-col section-col__left' id='diensteilungen'>
				<Title text='Womit beschäftigen wir uns?'  fullwidth={true}/>
			</div>
			<div className='service__inner'>
				<button className='service__item--wrapper' onClick={() => handleServiceClick('service1')}>
					<div className='service__item service__item-2'>
						<h2 className='service__title'>Malerarbeiten</h2>
					</div>
				</button>
				<button className='service__item--wrapper' onClick={() => handleServiceClick('service2')}>
					<div className='service__item service__item-3'>
						<h2 className='service__title'>Renovationen</h2>
					</div>
				</button>
				<button className='service__item--wrapper' onClick={() => handleServiceClick('service3')}>
					<div className='service__item service__item-3'>
						<h2 className='service__title'>Gipser</h2>
					
					</div>
				</button>
				<button className='service__item--wrapper' onClick={() => handleServiceClick('service4')}>
					<div className='service__item service__item-1'>
						<h2 className='service__title'>Fassadenarbeiten</h2>
					</div>
				</button>

				<button className='service__item--wrapper' onClick={() => handleServiceClick('service5')}>
					<div className='service__item service__item-4'>
						<h2 className='service__title'>Plattenlegger</h2>
					</div>
				</button>
			</div>
		</div>
	)
}

export default Services
