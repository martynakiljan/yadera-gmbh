import Title from './Title'
import Link from './Link'

const About = () => {
	return (
		<div className='about' id='about'>
			<div className='about'>
				<div className='section'>
					<div className='section-col section-col__left'>
						<Title text='über uns' />
					</div>
					<div className='section-col section-col__right'>
						<p className='about__text-wrapper'>
							<span className='about__text'>
								Wir bieten Innere / Äussere Malerarbeiten, sowie auch Verputzte Aussenwärmedämmungen und Hinterlüftete
								Fassadensysteme als Montagearbeiten an. Die partnerschaftliche Zusammenarbeit mit privaten
								Bauherrschaften, Immobilien-Verwaltungen, Architekten, Total- und Generalunternehmungen funktioniert bis
								heute tadellos.
							</span>
							<span></span>
							<span className='about__text'>
								Unsere jahrelange Erfahrung im Privat, Umbau und Neubau gibt uns die Professionalität auch bei
								schwierigen Baustellen ruhe zu bewahren und dem Kunden die bestmögliche Lösung zu Präsentieren. ​ Wir
								arbeiten zuverlässig, zügig und effizient. Die Qualität ist unsere Visitenkarte, das erachten wir als
								Selbstverständlichkeit. Wir übernehmen Verantwortung in Bezug auf Termin, Qualität und Preis.
							</span>
						    <Link />
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
