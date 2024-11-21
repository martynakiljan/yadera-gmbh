import BigImage from './BigImage'
import img from '../assets/images/images/image-9.jpg'
import Title from './Title'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import ClipLoader from 'react-spinners/ClipLoader'

const OffertForm = () => {
	useEffect(() => {
		const scrollPosition = window.innerWidth < 992 ? 0 : window.innerHeight * 0.7
		window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
	}, [])

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const [isSubmitting, setIsSubmitting] = useState()
	const [isSubmitted, setIsSubmitted] = useState()

	const onSubmit = () => {
		setIsSubmitting(true)
		setTimeout(() => {
			setIsSubmitting(false)
			setIsSubmitted(true)

			setTimeout(() => {
				setIsSubmitted(false)
				reset()
			}, 3000)
		}, 1500)
	}

	return (
		<div>
			<>
				<BigImage img={img} />
				<p className='offer-text section' id='offerte'>
					Möchten Sie mehr über unsere Dienstleistungen erfahren oder eine individuelle Offerte für Ihr Projekt
					erhalten? Kontaktieren Sie uns einfach! Wir erstellen Ihnen gerne ein transparentes und unverbindliches
					Angebot, das genau auf Ihre Wünsche und Anforderungen abgestimmt ist. Bei Yadera GmbH legen wir grossen Wert
					auf klare Kommunikation, faire Preise und eine zuverlässige Umsetzung.
				</p>
				<p className='offer-subtext'>
					Bei Yadera GmbH legen wir grossen Wert auf klare Kommunikation, faire Preise und eine zuverlässige Umsetzung.
				</p>
				<p className='quote full-width'>Lassen Sie uns gemeinsam Ihre Ideen realisieren!</p>

				<div className='section'>
					<div className='section-col section-col__left'>
						<Title text='Wünschen Sie eine Offerte?' fullwidth={true} />
						<p></p>
					</div>
					<div className='section-col section-col__right'>
						<div className='contact-form contact-offer-form'>
							{isSubmitted ? (
								<p className='thank-you-message'>Danke. Wir werden Sie bald kontaktieren!</p>
							) : (
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className='form-group'>
										<label htmlFor='name'>Ihr Name</label>
										<input
											id='name'
											type='text'
											placeholder='Gabriel'
											{...register('name', { required: 'Name ist erforderlich' })}
										/>
										{errors.name && <p className='error-message'>{errors.name.message}</p>}
									</div>

									<div className='form-group'>
										<label htmlFor='email'>E-Mail</label>
										<input
											id='email'
											type='email'
											placeholder='gabriel345@gmail.com'
											{...register('email', { required: 'E-Mail ist erforderlich' })}
										/>
										{errors.email && <p className='error-message'>{errors.email.message}</p>}
									</div>
									<div className='form-group'>
										<label htmlFor='phone'>Telefon</label>
										<input
											id='phone'
											type='phone'
											placeholder='+41 767 342 245'
											{...register('phone', { required: 'Telefon ist erforderlich' })}
										/>
										{errors.phone && <p className='error-message'>{errors.phone.message}</p>}
									</div>
									<div className='checkbox-container'>
										<label>Wählen Sie die Dienstleistung aus, die Sie interessiert:</label>
										<div className='checkbox-group'>
											<div className='checkbox-item'>
												<input type='radio' value='Malerarbeiten' {...register('services')} id='malerarbeiten' />
												<label className='label-checkbox' htmlFor='malerarbeiten'>
													Malerarbeiten
												</label>
											</div>
											<div className='checkbox-item'>
												<input type='radio' value='Gipser' {...register('services')} id='gipser' />

												<label className='label-checkbox' htmlFor='gipser'>
													Gipser
												</label>
											</div>
											<div className='checkbox-item'>
												<input type='radio' value='Renovationen' {...register('services')} id='renovationen' />
												<label className='label-checkbox' htmlFor='renovationen'>
													Renovationen
												</label>
											</div>
											<div className='checkbox-item'>
												<input type='radio' value='Plattenlegger' {...register('services')} id='plattenlegger' />
												<label className='label-checkbox' htmlFor='plattenlegger'>
													Plattenlegger
												</label>
											</div>
											<div className='checkbox-item'>
												<input type='radio' value='other' {...register('services')} id='other' />
												<label className='label-checkbox' htmlFor='plattenlegger'>
													Es steht nicht auf der Liste
												</label>
											</div>
										</div>
									</div>

									<div className='form-group'>
										<label htmlFor='message'>Nachricht</label>
										<textarea
											id='message'
											placeholder='Ich bitte um ein Angebot...'
											{...register('message', { required: 'Nachricht ist erforderlich' })}></textarea>
										{errors.message && <p className='error-message'>{errors.message.message}</p>}
									</div>

									{isSubmitting ? (
										<ClipLoader color='#242527' size={24} />
									) : (
										<button className='offer-form__button' type='submit' disabled={isSubmitting}>
											Jetzt Angebot anfordern!
										</button>
									)}
								</form>
							)}
						</div>
					</div>
				</div>
			</>
		</div>
	)
}

export default OffertForm
