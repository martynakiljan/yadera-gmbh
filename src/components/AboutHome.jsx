import { useLocation } from 'react-router-dom'
import Title from './Title'
import Link from './Link'
import img from '../assets/images/images/image-about.jpeg'
import BigImage from './BigImage'
import Story from './Story'
import Values from './Values'

const AboutHome = () => {
	const location = useLocation()

	return (
		<div>
			{location.pathname === '/uber-uns' && <BigImage img={img} />}
			{location.pathname === '/uber-uns' && <Story />}

			<div className='about'>
				<div className='section'>
					<div className='section-col section-col__left' id='uber-uns'>
						<Title text='über uns' />
					</div>
					<div className='section-col section-col__right'>
						<p className='about__text-wrapper'>
							<span className='about__text'>
								Die Yadera GmbH bietet seit 2021 ein breites Spektrum an Handwerksdienstleistungen. Unser Fokus liegt
								auf Malerarbeiten, Renovationen, Fassadenarbeiten, Plattenlegerarbeiten und Gipserarbeiten. Dank unserer
								langjährigen Erfahrung setzen wir Projekte jeder Art zuverlässig und präzise um – ob im Privatbereich,
								bei Umbauten oder Neubauten.
							</span>
							<span className='about__text'>
								Qualität, Verantwortung und Termintreue sind dabei unsere obersten Prinzipien. Vertrauen Sie auf ein
								Team, das auch bei komplexen Baustellen stets die beste Lösung für Sie findet.
							</span>
							{location.pathname === '/uber-uns' && <Link text='Haben Sie eine Frage?' href='/kontakt ' />}
						</p>
					</div>
				</div>
			</div>
			{location.pathname === '/uber-uns' && <Values />}
		</div>
	)
}

export default AboutHome;