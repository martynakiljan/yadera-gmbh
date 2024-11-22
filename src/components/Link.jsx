import { FaArrowRightLong } from 'react-icons/fa6'
import { NavLink, useNavigate } from 'react-router-dom'

const Link = ({ text, href, id }) => {
	const navigate = useNavigate()

	const getPageMaxScroll = () => {
		return (
			Math.max(
				document.body.scrollHeight,
				document.body.offsetHeight,
				document.documentElement.clientHeight,
				document.documentElement.scrollHeight,
				document.documentElement.offsetHeight
			) - window.innerHeight
		)
	}

	const scrollToTop = () => {
		const maxScroll = getPageMaxScroll()
		let top = -1

		if (top > maxScroll) {
			top = maxScroll
		}

		window.scroll({
			top: top,
			left: 0,
			behavior: 'smooth',
		})
	}

	const handleClick = (href, id) => {
		const isMobile = window.innerWidth < 768

		if (isMobile) {
			navigate(href)
			setTimeout(() => {
				scrollToTop()
			}, 0)
			return
		}
		else if (id) {
			navigate(href, { state: { id } })
			setTimeout(() => {
		
				const element = document.getElementById(id)
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' })
				}
			}, 0)
		}

		else {
			navigate(href)
			setTimeout(() => {
				scrollToTop()
			}, 0)
		}
	}

	return (
		<NavLink className='link' to={href} onClick={() => handleClick(href, id)}>
			<span className='link-text'>{text}</span>
			<span className='link-icon'>
				<FaArrowRightLong />
			</span>
		</NavLink>
	)
}

export default Link
