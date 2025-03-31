import { MdOutlineEmail } from "react-icons/md";
const ContactWidget = () => {
	return (
		<div className='contact-widget'>
			<a href="mailto:info@yadera.ch"  rel='noopener noreferrer'>
			<MdOutlineEmail />
			</a>
		</div>
	);
};

export default ContactWidget;
