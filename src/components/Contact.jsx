import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Title from './Title'
import ClipLoader from 'react-spinners/ClipLoader'
import BigImage from './BigImage'
import img from '../assets/images/images/image-12.jpeg'
import { useLocation } from 'react-router'
const Contact = () => {
	useEffect(() => {
		const scrollPosition = window.innerWidth < 992 ? 0 : window.innerHeight * 0.7
		window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
	}, [])

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

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)

	const onSubmit = async data => {
		setIsSubmitting(true)

		try {
			const response = await fetch('http://https://www.yadera.ch/kontakt/send_mail.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				},
				body: new URLSearchParams({
					name: data.name,
					email: data.email,
					message: `Nachricht von ${data.name} (${data.email}):\n\n${data.message}`,
				}).toString(),
			})

			const result = await response.json()
			console.log(result)
			if (result.status === 'success') {
				setIsSubmitted(true)
				reset()

				// Dodajemy timeout, aby zresetować stronę po 3 sekundach
				setTimeout(() => {
					window.location.reload() // Zresetowanie strony
				}, 3000) // 3000ms = 3 sekundy
			} else {
				alert('Błąd: ' + result.message)
			}
		} catch (error) {
			console.error('Błąd:', error)
		}

		setIsSubmitting(false)
	}

	return (
		<>
			<BigImage img={img} />
			<p className='offer-text section' id='kontakt'>
				Möchten Sie mehr über unsere Dienstleistungen erfahren oder eine individuelle Offerte für Ihr Projekt erhalten?
				Kontaktieren Sie uns einfach! Wir erstellen Ihnen gerne ein transparentes und unverbindliches Angebot, das genau
				auf Ihre Wünsche und Anforderungen abgestimmt ist. Bei Yadera GmbH legen wir grossen Wert auf klare
				Kommunikation, faire Preise und eine zuverlässige Umsetzung.
			</p>
			<p className='offer-subtext'>
				Bei Yadera GmbH legen wir grossen Wert auf klare Kommunikation, faire Preise und eine zuverlässige Umsetzung.
			</p>
			<p className='quote full-width'>Lassen Sie uns gemeinsam Ihre Ideen realisieren!</p>

			<div className='section'>
				<div className='section-col section-col__left section-scroll '>
					<Title text='sollen wir reden?' />
				</div>
				<div className='section-col section-col__right'>
					<div className='contact-form '>
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
										{...register('name', {
											required: 'Name ist erforderlich',
											pattern: {
												value: /^[a-zA-Z\s]+$/,
												message: 'Name darf nur Buchstaben enthalten',
											},
										})}
									/>
									{errors.name && <p className='error-message'>{errors.name.message}</p>}
								</div>

								<div className='form-group'>
									<label htmlFor='email'>E-Mail</label>
									<input
										id='email'
										type='email'
										placeholder='gabriel345@gmail.com'
										{...register('email', {
											required: 'E-Mail ist erforderlich',
											pattern: {
												value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
												message: 'Bitte geben Sie eine gültige E-Mail ein',
											},
										})}
									/>
									{errors.email && <p className='error-message'>{errors.email.message}</p>}
								</div>

								<div className='form-group'>
									<label htmlFor='message'>Nachricht</label>
									<textarea
										id='message'
										placeholder='Ich möchte meine Wohnung streichen. Bitte kontaktieren Sie mich.'
										{...register('message', { required: 'Nachricht ist erforderlich' })}></textarea>
									{errors.message && <p className='error-message'>{errors.message.message}</p>}
								</div>

								{isSubmitting ? (
									<ClipLoader color='#242527' size={24} />
								) : (
									<button className='form-button' type='submit' disabled={isSubmitting}>
										Absenden
									</button>
								)}
							</form>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
