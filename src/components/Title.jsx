const Title = ({ text, fullwidth }) => {
	return (
		<h1 className={`title ${fullwidth ? 'full-width' : ''}`}>
			{' '}
			<span className='slash'>/</span> {text}
		</h1>
	)
}

export default Title
