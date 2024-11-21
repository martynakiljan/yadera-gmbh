import Title from './Title'
import Link from './Link'
const Values = () => {
	return (
		<div className='section section-values'>
			<div className='section-col section-col__left'>
				<Title text='unsere Werte' />
			</div>
			<div className='section-col section-col__right'>
				<div className='values__text-wrapper'>
					<span className='values_text about__text'>
						Bei Yadera GmbH stehen Qualität, Verantwortung und Termintreue an erster Stelle. Wir wissen, dass jedes
						Projekt einzigartig ist und behandeln es mit der Aufmerksamkeit, die es verdient. Unsere langjährige
						Erfahrung in den Bereichen Malerarbeiten, Renovationen, Fassadenarbeiten, Plattenlegerarbeiten und
						Gipserarbeiten ermöglicht es uns, Ihre Wünsche und Anforderungen zuverlässig umzusetzen.
					</span>
					<span className='values_text about__text text-bold'>Warum Yadera GmbH?</span>
					<ul className='values__list about__text'>
						<li className='list-item'>
							Qualität: Präzision und sorgfältige Ausführung sind für uns selbstverständlich.
						</li>
						<li className='list-item'>
							Verantwortung: Wir stehen zu unserem Wort und übernehmen Verantwortung für jedes Projekt, das wir
							annehmen.
						</li>
						<li className='list-item'>
							Termintreue: Pünktlichkeit ist nicht nur ein Versprechen, sondern ein Prinzip, auf das Sie sich verlassen
							können.
						</li>
					</ul>
					<span className='values__text about__text'>
						Wir verstehen, dass Vertrauen eine wichtige Grundlage für jedes Bau- und Renovationsprojekt ist. Deshalb
						legen wir großen Wert auf eine enge und transparente Zusammenarbeit mit unseren Kunden.
					</span>
					<span className='values__text about__text'>
						Lassen Sie uns gemeinsam Ihre Ideen verwirklichen – mit Yadera GmbH setzen Sie auf ein Unternehmen, das mit
						Leidenschaft, Erfahrung und Verlässlichkeit arbeitet
					</span>
					<Link href='/offerte' text='Jetzt Angebot anfordern!'></Link>
				</div>
			</div>
		</div>
	)
}

export default Values
