import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const Accordion = () => {
	const [activeKey, setActiveKey] = useState(null)

	const handleToggle = key => {
		setActiveKey(activeKey === key ? null : key)
	}

	return (
		<div className='custom-accordion'>
			<AccordionItem
				title='Malerarbeiten'
				imageClass='service-image-1'
				isActive={activeKey === '0'}
				onClick={() => handleToggle('0')}>
				<p className='list-title'>Das Leistungsspektrum der Malerarbeiten:</p>

				<ul className='list'>
					<li className='list-item'>Innere & Äussere Malerarbeiten</li>
					<li className='list-item'>Schimmel Sanierungen</li>
					<li className='list-item'>Spritzarbeiten</li>
					<li className='list-item'>Tapezierarbeiten</li>
					<li className='list-item'>Strassenmarkierungen</li>
					<li className='list-item'>Dekorative Arbeiten</li>
					<li className='list-item'>Fassadenreinigungen</li>
				</ul>
			</AccordionItem>
			<AccordionItem
				title='Hinterlüftete Fassadensysteme'
				imageClass='service-image-3'
				isActive={activeKey === '1'}
				onClick={() => handleToggle('1')}>
				<p className='list-title'>Das Leistungsspektrum der Verputzten Aussenwärmedämmung: ​</p>
				<ul className='list'>
					<li className='list-item'>Dämmen von Fassaden, Keller Decken und Garagen</li>
					<li className='list-item'>Perimeterdämmungen / Sockeldämmungen</li>
					<li className='list-item'>Verputzen von Fassaden</li>
					<li className='list-item'>Sockel Sanierungen</li>
					<li className='list-item'>Riss Sanierungen</li>
				</ul>
			</AccordionItem>
			<AccordionItem
				title='Verputzte Aussenwärmedämmung'
				imageClass='service-image-2'
				isActive={activeKey === '2'}
				onClick={() => handleToggle('2')}>
				<p className='list-title'>
					Profitieren Sie von unseren Erfahrungen bei der Umsetzung von hinterlüfteten so wie vorgehängten Fassaden
					Systemen
				</p>
				<ul className='list'>
					<ul className='sub-list'>
						<p> Montage Arbeiten im HF-Bereich:</p>
						<li className='sub-list-item'>Unterkonstruktionen Alu / Holz</li>
						<li className='sub-list-item'>Unterkonstruktionen Alu / Alu</li>
						<li className='sub-list-item'>Dämmung Mineral oder Steinwolle</li>
						<li className='sub-list-item'>Fensterbänke / Zargen Montage</li>
						<li className='sub-list-item'>Dachrandabdeckungen / Mauerkronenabdeckungen</li>

						<p> Montage verschiedenster Bekleidungen:</p>
						<li className='sub-list-item'>Eternit</li>
						<li className='sub-list-item'>Naturschiefer</li>
						<li className='sub-list-item'>Alucobond</li>
						<li className='sub-list-item'>Wellblech/gelochtes Wellblech</li>
						<li className='sub-list-item'>Flachblech</li>
						<li className='sub-list-item'>Fundermax-Platten Exterior</li>
						<li className='sub-list-item'>Künstlicher Rasenteppich</li>
						<li className='sub-list-item'>Trespa Meteon</li>
						<li className='sub-list-item'>Slimtech</li>
						<li className='sub-list-item'>Lisenen</li>
						<li className='sub-list-item'>Stahlblech</li>
						<li className='sub-list-item'>Montana Sandwich Panele</li>
						<li className='sub-list-item'>Putzträgerplatten</li>
						<li className='sub-list-item'>etc.</li>
					</ul>
				</ul>
			</AccordionItem>
		</div>
	)
}

const AccordionItem = ({ title, imageClass, isActive, onClick, children }) => {
	return (
		<div className='accordion-item'>
			<div className='accordion-header' onClick={onClick}>
				<span className='accordion-title'>
					<span className={`service-image ${imageClass}`}></span>
					{title}
				</span>
				<span className='accordion-icon'>
					<FontAwesomeIcon icon={isActive ? faMinus : faPlus} />
				</span>
			</div>
			{isActive && <div className='accordion-body'>{children}</div>}
		</div>
	)
}

export default Accordion
