import Title from './Title'
import Images from './Images'

const Story = () => {
	return (
		<div className='section section-story'>
			<div className='section-col section-col__left'>
				<Title text='unsere Gesichte' />
			</div>
			<div className='section-col section-col__right'>
				<div className='story__text-wrapper'>
					<span className='story__text'>
						Seit unserer Gründung im Jahr 2021 vereinen wir fundiertes Fachwissen und langjährige Erfahrung aus einer
						großen Firmengruppe. Unser Leistungsangebot umfasst Malerarbeiten, Renovationen, Fassadenarbeiten,
						Plattenlegerarbeiten und Gipserarbeiten.
					</span>
					<span className='story__text'>
						Mit Leidenschaft, Präzision und Termintreue setzen wir Ihre Projekte zuverlässig und effizient um. Vertrauen
						Sie auf ein engagiertes Team, das Ihre Visionen partnerschaftlich und professionell verwirklicht.
					</span>

					<span className='quote'>«Yadera GmbH – Qualität, auf die Sie bauen können»</span>
				</div>
				<Images />
			</div>
		</div>
	)
}

export default Story
