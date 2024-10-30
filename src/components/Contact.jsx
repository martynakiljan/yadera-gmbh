import { useState } from 'react'
import { useForm } from 'react-hook-form'

import ClipLoader from 'react-spinners/ClipLoader'

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
		<div className='contact-container reduced-width' id='contact'>
			<div className='contact-form '>
				<h2 className='contact-form__title title-section'>-Contact me-</h2>
				{isSubmitted ? (
					<p className='thank-you-message'>Thank you. We will contact you soon!</p>
				) : (
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='form-group'>
							<label htmlFor='name'>Your Name</label>
							<input id='name' type='text' placeholder='Kate' {...register('name', { required: 'Name is required' })} />
							{errors.name && <p className='error-message'>{errors.name.message}</p>}
						</div>

						<div className='form-group'>
							<label htmlFor='email'>Email</label>
							<input
								id='email'
								type='email'
								placeholder='kate345@gmail.com'
								{...register('email', { required: 'Email is required' })}
							/>
							{errors.email && <p className='error-message'>{errors.email.message}</p>}
						</div>
						<div className='form-group'>
							<label htmlFor='message'>Message</label>
							<textarea
								id='message'
								placeholder='I am interested in a high altitude course with my husband. Can I ask for more information?'
								{...register('message', { required: 'Message is required' })}></textarea>
							{errors.message && <p className='error-message'>{errors.message.message}</p>}
						</div>
						{isSubmitting ? (
							<ClipLoader color='#242527' size={24} />
						) : (
							<button type='submit' disabled={isSubmitting}>
								Send this message!
							</button>
						)}
					</form>
				)}
			</div>

			<div>
				<div className='contact__bottom'>
					<div className='contact__col'>
						<p className='contact__title '>Contact</p>
						<p className='contact__tel'>+41 546 345 345</p>
						<a className='contact__email' href='mailto:tom@your-guide.com'>
							tom@your-guide.com
						</a>
					</div>
					<div className='contact__col'>
						<p className='contact__title'>Location</p>
						<p className='contact__street'>wherever you want!</p>
						<p className='contact__city'>every mountain.</p>
					</div>
					<div className='contact__col'></div>
				</div>
			</div>
		</div>
	)
}

export default Contact
