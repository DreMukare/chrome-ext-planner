import { observer } from 'mobx-react';
import rootStore from '../../stores/RootStore';
import style from '../../assets/styles/MainThreeTodoStyles.module.css';
import TodoInputList from '../TodoInputList';

const MainThreeTodo = () => {
	const isDarkMode = rootStore.uiStore.isDarkMode;
	const mainThreeTodoData = rootStore.planStore.plan?.mainTodo;

	return (
		<div
			className={style.container}
			style={{ border: isDarkMode ? '2px solid #1A1A1A' : '1px solid #000000' }}
		>
			<TodoInputList
				inputsList={mainThreeTodoData ? [...mainThreeTodoData] : []}
				labelText='Main Three Todo'
				checkboxName='mainThreeTodoCheckbox'
				modelName='mainTodo'
				textareaName='mainThreeTodoInput'
			/>
		</div>
	);
};

export default observer(MainThreeTodo);
