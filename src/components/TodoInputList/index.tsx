import { Draggable, Droppable } from 'react-beautiful-dnd';
import rootStore from '../../stores/RootStore';
import DraggableTodoContainer from '../DraggableTodoContainer';
import styles from '../../assets/styles/TodoInput.module.css';
import drag from '../../assets/btnimages/drag.svg';
import IconButton from '../IconButton';
import { getUuid } from '../../utils/uuid';

const BtnSvg = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-6 w-6'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
		strokeWidth={2}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M6 18L18 6M6 6l12 12'
		/>
	</svg>
);

const EmptyListAddBtnSvg = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-6 w-6'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
		strokeWidth={2}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M12 6v6m0 0v6m0-6h6m-6 0H6'
		/>
	</svg>
);

const TodoInput = (props: {
	inputsList: { uid: string; text: string | undefined; checked: boolean }[];
	labelText: string;
	checkboxName: string;
	textareaName: string;
	modelName: string;
	styleOverride?: CSSModuleClasses;
}) => {
	const {
		inputsList,
		labelText,
		checkboxName,
		textareaName,
		modelName,
		styleOverride,
	} = props;
	const isDarkMode = rootStore.uiStore.isDarkMode;
	const stylesForComponent = styleOverride ? styleOverride : styles;

	const handleCheckboxChange = (inputGroup: {
		uid: string;
		text: string | undefined;
		checked: boolean;
	}) => {
		if (inputGroup) {
			inputGroup.checked = !inputGroup.checked;
			rootStore.planStore.setUpdatePlan(modelName, inputGroup);
		}
	};

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLTextAreaElement>,
		idx: number
	) => {
		const target = e.target as HTMLElement;
		target.style.height = '22px';
		target.style.height = `${target.scrollHeight}px`;
		target.style.borderBottom = isDarkMode
			? '2px solid #1A1A1A'
			: '0.5px solid #575757';
		target.style.backgroundColor = isDarkMode ? '#080808' : '#FFFFFF';

		if (e.key === 'Enter') {
			e.preventDefault();
			if (inputsList.length - 1 > idx) {
				const element = document.getElementById(`${textareaName}${idx + 1}`);
				element && element.focus();
			}
		} else if (inputsList.length - 1 <= idx) {
			const list = [...inputsList];
			if (inputsList.length < 3)
				list.push({ uid: getUuid(), text: '', checked: false });
			rootStore.planStore.setUpdatePlan(modelName, list);
		}
	};

	const handleMouseEnter = (
		e: React.MouseEvent<HTMLTextAreaElement, MouseEvent>
	) => {
		const target = e.target as HTMLElement;
		target.style.height = '22px';
		target.style.height = `${target.scrollHeight}px`;
	};

	const handleButtonClick = () => {};

	const handleAddButtonClick = () => {};

	return (
		<DraggableTodoContainer inputsList={inputsList}>
			<label style={{ color: isDarkMode ? '#FFFFFF' : '#575757' }}>
				{labelText}
			</label>
			<Droppable droppableId='droppable-1'>
				{(provided, _) => (
					<div
						className={stylesForComponent.listContainer}
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						{inputsList.map((inputGroup, idx) => {
							return (
								<Draggable
									index={idx}
									draggableId={'draggable-' + idx}
									key={idx}
								>
									{(provided, _) => {
										return (
											<div
												ref={provided.innerRef}
												{...provided.draggableProps}
												className={`${stylesForComponent.listItem} ${
													isDarkMode ? stylesForComponent.dark : ''
												}`}
											>
												<input
													type='checkbox'
													name={checkboxName}
													id={checkboxName + idx}
													checked={inputsList && !!inputsList[idx].checked}
													onChange={() => handleCheckboxChange(inputGroup)}
													className={
														isDarkMode
															? !inputsList[idx].checked
																? stylesForComponent.darkCheckbox
																: ''
															: ''
													}
												/>
												<textarea
													rows={1}
													name={textareaName}
													id={textareaName + idx}
													onKeyDown={(e) => handleKeyDown(e, idx)}
													onMouseEnter={(e) => handleMouseEnter(e)}
													value={String(inputsList[idx].text)}
													className={
														inputsList[idx].checked
															? `${stylesForComponent.todoDone} ${stylesForComponent.todoInput}`
															: isDarkMode
															? `${stylesForComponent.todoDark} ${stylesForComponent.todoInput}`
															: stylesForComponent.todoInput
													}
													style={{}}
												/>
												<IconButton
													name={modelName + '-btn'}
													onClick={() => handleButtonClick()}
													svgImage={<BtnSvg />}
												/>
												<img
													{...provided.dragHandleProps}
													src={drag}
													alt='drag icon'
													className={stylesForComponent.draggable}
												/>
											</div>
										);
									}}
								</Draggable>
							);
						})}
						{provided.placeholder}
						{inputsList.length < 3 && (
							<IconButton
								svgImage={<EmptyListAddBtnSvg />}
								name='Add item to list'
								onClick={() => handleAddButtonClick()}
								btnText='Add todo'
							/>
						)}
					</div>
				)}
			</Droppable>
		</DraggableTodoContainer>
	);
};

export default TodoInput;
