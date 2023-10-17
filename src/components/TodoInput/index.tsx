import { Draggable, Droppable } from 'react-beautiful-dnd';
import rootStore from '../../stores/RootStore';
import DraggableTodoContainer from '../DraggableTodoContainer';
import styles from '../../assets/styles/TodoInput.module.css';
import drag from '../../assets/btnimages/drag.svg';
import IconButton from '../IconButton';

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
	inputsList: { [key: string]: string | boolean }[];
	labelText: string;
	checkboxName: string;
	textareaName: string;
	modelName: string;
}) => {
	const { inputsList, labelText, checkboxName, textareaName, modelName } =
		props;
	const isDarkMode = rootStore.uiStore.isDarkMode;

	const handleCheckboxChange = (inputGroup: {
		[key: string]: string | boolean;
	}) => {
		inputGroup.checked = !inputGroup.checked;
		rootStore.planStore.setUpdatePlan(modelName, inputGroup);
	};

	const handleKeyDown = () => {};

	const handleMouseEnter = () => {};

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
						className={styles.listContainer}
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
												className={`${styles.listItem} ${
													isDarkMode ? styles.dark : ''
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
																? styles.darkCheckbox
																: ''
															: ''
													}
												/>
												<textarea
													rows={1}
													name={textareaName}
													id={textareaName + idx}
													onKeyDown={() => handleKeyDown()}
													onMouseEnter={() => handleMouseEnter()}
													value={String(inputsList[idx].text)}
													className=''
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
													className={styles.draggable}
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
