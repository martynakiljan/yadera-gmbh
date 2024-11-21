import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Title from './Title'
import ClipLoader from 'react-spinners/ClipLoader'
import BigImage from './BigImage'
import img from '../assets/images/images/image-12.jpeg'

const Contact = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)

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
		<>
			<BigImage img={img} />
			<div className='section'>
				<div className='section-col section-col__left' id='kontakt'>
					<Title text='sollen wir reden?' />
				</div>
				<div className='section-col section-col__right'>
					<div className='contact-form '>
						{isSubmitted ? (
							<p className='thank-you-message'>Danke. Wir werden Sie bald kontaktieren!</p>
						) : (
							<form onSubmit={handleSubmit(onSubmit)} action='kmarytnak@icloud.com' method='POST'>
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
									<label htmlFor='phone'>Telefon</label>
									<input
										id='phone'
										type='text'
										placeholder='+41 767 342 245'
										{...register('phone', {
											required: 'Telefon ist erforderlich',
											pattern: {
												value: /^[+]?[\d\s-]+$/,
												message: 'Telefon darf nur Zahlen, Leerzeichen und "-" enthalten',
											},
										})}
									/>
									{errors.phone && <p className='error-message'>{errors.phone.message}</p>}
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
