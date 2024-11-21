import { FaArrowRightLong } from 'react-icons/fa6'

const Link = ({ text, href }) => {
	return (
		<a className='link' href={href}>
			<span className='link-text'>{text}</span>
			<span className='link-icon'>
				<FaArrowRightLong />
			</span>
		</a>
	)
}

export default Link
