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
			<div className='section'>
				<div className='section-col section-col__left'>
					<Title text='wollen wir reden?' />
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
				</div>
			</div>
		</>
	)
}

export default Contact
