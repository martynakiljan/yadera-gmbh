import { FaWhatsapp } from 'react-icons/fa';

const ContactWidget = () => {
	return (
		<div className='contact-widget'>
			<a href='https://wa.me/41791332929' target='_blank' rel='noopener noreferrer'>
				<FaWhatsapp />
			</a>
		</div>
	);
};

export default ContactWidget;
