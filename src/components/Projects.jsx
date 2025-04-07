import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'
import img from '../assets/images/images/image-13.jpeg'
import BigImage from './BigImage'
import Title from './Title'
import projects from '../data/projects'
import { IoIosArrowUp } from 'react-icons/io'

const Projects = () => {
	const location = useLocation()
	const scrollToId = location.state?.scrollToId

	useEffect(() => {
		if (scrollToId) {
			const element = document.getElementById(scrollToId)
			if (element) {
				window.scrollTo({
					top: window.innerHeight * 0.7,
					behavior: 'smooth',
				})
			}
		}
	}, [scrollToId])
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible')
					} else {
						entry.target.classList.remove('visible')
					}
				})
			},
			{
				threshold: 0.1,
			}
		)

		const projectItems = document.querySelectorAll('.project__item')
		projectItems.forEach(item => observer.observe(item))

		return () => {
			projectItems.forEach(item => observer.unobserve(item))
		}
	}, [])

	const [currentImage, setCurrentImage] = useState({})

	const handleNext = (index, project) => {
		const current = currentImage[index] || 0
		const images = [project.url, project.url2, project.url3].filter(Boolean)
		const nextIndex = (current + 1) % images.length
		setCurrentImage({ ...currentImage, [index]: nextIndex })
	}

	const handlePrev = (index, project) => {
		const current = currentImage[index] || 0
		const images = [project.url, project.url2, project.url3].filter(Boolean)
		const prevIndex = (current - 1 + images.length) % images.length
		setCurrentImage({ ...currentImage, [index]: prevIndex })
	}

	return (
		<div>
			<BigImage img={img} />
			<div className='projects'>
				<div className='section-col section-col__left section-scroll' id='projekte'>
					<Title text='unsere projekte' />
				</div>
				<div className='projects__inner'>
					{projects.map((project, index) => {
						const images = [project.url, project.url2, project.url3].filter(Boolean)
						const currentImageIndex = currentImage[index] || 0
						return (
							<div key={index} className={`project__item ${index % 2 !== 0 ? 'revert' : ''}`}>
								<div className='project'>
									<div className='project-col project-wrapper'>
										<div className='project-img' style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
											{images.length > 1 && (
												<>
													<button className='slider-btn left' onClick={() => handlePrev(index, project)}>
														<IoIosArrowBack />
													</button>
													<button className='slider-btn right' onClick={() => handleNext(index, project)}>
														<IoIosArrowForward />
													</button>
												</>
											)}
										</div>
									</div>
									<div className='project-col project-col__bg'>
										<div className='project-info'>
											<h3 className='project-title'>{project.title}</h3>
										</div>
										<div className='project-info__active'>
											<div className='project-info__active--text'>
												<h3 className='project-info__active-title'>{project.title}</h3>
												{/* <p className='project-info-text'>
													<span className='project-info-text__title'>Arbeitsgattungen</span> {project.title}
												</p> */}
												<p className='project-info-text'>
													<span className='project-info-text__title'>Leistungen:</span> {project.services}
												</p>
												<p className='project-info-text'>
													<span className='project-info-text__title'>Fertigstellungsjahr:</span>{' '}
													{project.completionYear}
												</p>
												<p className='project-info-text'>
													<span className='project-info-text__title'></span> {project.text}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className='project__btn-more'>
									<span className='project__btn-more-text'>mehr informationen</span>
									<IoIosArrowUp />
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Projects
