const DiagonalComponent = ({ isRed }) => {
	return (
		<div className={`diagonal-component ${isRed ? 'diagonal-component--red' : ''}`}>
			<div className=''></div>
		</div>
	)
}

export default DiagonalComponent
