import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Title from './Title'
import ClipLoader from 'react-spinners/ClipLoader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
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
		<>
			<div className='title-center'>
				<Title text='wollen wir reden?' />
			</div>
			<div className='contact-container reduced-width' id='contact'>
				<div className='contact-col contact-form '>
					{isSubmitted ? (
						<p className='thank-you-message'>Danke. Wir werden Sie bald kontaktieren!</p>
					) : (
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='form-group'>
								<label htmlFor='name'>Ihr Name</label>
								<input
									id='name'
									type='text'
									placeholder='Kate'
									{...register('name', { required: 'Name ist erforderlich' })}
								/>
								{errors.name && <p className='error-message'>{errors.name.message}</p>}
							</div>

							<div className='form-group'>
								<label htmlFor='email'>E-Mail</label>
								<input
									id='email'
									type='email'
									placeholder='kate345@gmail.com'
									{...register('email', { required: 'E-Mail ist erforderlich' })}
								/>
								{errors.email && <p className='error-message'>{errors.email.message}</p>}
							</div>
							<div className='form-group'>
								<label htmlFor='message'>Nachricht</label>
								<textarea
									id='message'
									placeholder='
					   Ich möchte meine Wohnung streichen. Bitte kontaktieren Sie mich.'
									{...register('message', { required: 'Nachricht ist erforderlich' })}></textarea>
								{errors.message && <p className='error-message'>{errors.message.message}</p>}
							</div>
							{isSubmitting ? (
								<ClipLoader color='#242527' size={24} />
							) : (
								<button type='submit' disabled={isSubmitting}>
									Nachricht senden!
								</button>
							)}
						</form>
					)}
				</div>

				<div className='contact-col contact-info'>
					<div className='contact__bottom'>
						<div className='contact__col'>
							<div>
								<FontAwesomeIcon icon={faPhone} />
							</div>
							<div>
								{' '}
								<p className='contact__title '>Kontakt</p>
								<p className='contact__tel'>+41 79 133 29 29</p>
								<a className='contact__email' href='mailto:info@yadera.ch'>
									info@yadera.ch
								</a>
							</div>
						</div>
						<div className='contact__col'>
							<div>
								<FontAwesomeIcon icon={faLocationDot} />
							</div>
							<div>
								<p className='contact__title'>Standort</p>
								<p className='contact__street'>Dorfstrasse 11a</p>
								<p className='contact__city'>8603 Schwerzenbach</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
