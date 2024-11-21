import { useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
import Title from './Title'
import Link from './Link'
import img from '../assets/images/images/image-about.jpeg'
import BigImage from './BigImage'
import Values from './Values'
import Images from './Images'

const About = () => {
	const location = useLocation()
	const scrollToId = location.state?.scrollToId

	useEffect(() => {
		if (scrollToId) {
			const element = document.getElementById(scrollToId)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [scrollToId])

	return (
		<div>
			{location.pathname === '/uber-uns' && <BigImage img={img} />}

			<div className='section section-story'>
				<div className='section-col section-col__left section-story-scroll' id='uber-uns'>
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
							Mit Leidenschaft, Präzision und Termintreue setzen wir Ihre Projekte zuverlässig und effizient um.
							Vertrauen Sie auf ein engagiertes Team, das Ihre Visionen partnerschaftlich und professionell
							verwirklicht.
						</span>

						<span className='quote'>«Yadera GmbH – Qualität, auf die Sie bauen können»</span>
					</div>
					<Images />
				</div>
			</div>
			<div className='about'>
				<div className='section'>
					<div className='section-col section-col__left'>
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
							{location.pathname === '/uber-uns' && <Link text='Haben Sie eine Frage?' href='/kontakt' />}
						</p>
					</div>
				</div>
			</div>
			{location.pathname === '/uber-uns' && <Values />}
		</div>
	)
}

export default About
