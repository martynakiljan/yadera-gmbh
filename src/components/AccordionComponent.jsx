import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const AccordionComponent = () => {
	const [activeKey, setActiveKey] = useState(null)

	const handleToggle = key => {
		setActiveKey(activeKey === key ? null : key)
	}

	return (
		<div className='custom-accordion'>
			<AccordionItem title='Malerarbeiten' isActive={activeKey === '0'} onClick={() => handleToggle('0')}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</AccordionItem>
			<AccordionItem title='Fassadensysteme' isActive={activeKey === '1'} onClick={() => handleToggle('1')}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</AccordionItem>
			<AccordionItem
				title='Verputzte Aussenwärmedämmung'
				isActive={activeKey === '2'}
				onClick={() => handleToggle('2')}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</AccordionItem>
		</div>
	)
}

const AccordionItem = ({ title, isActive, onClick, children }) => {
	return (
		<div className='accordion-item'>
			<div className='accordion-header' onClick={onClick}>
				<span>{title}</span>
				<span className='accordion-icon'>
					<FontAwesomeIcon icon={isActive ? faMinus : faPlus} />
				</span>
			</div>
			{isActive && <div className='accordion-body'>{children}</div>}
		</div>
	)
}

export default AccordionComponent
