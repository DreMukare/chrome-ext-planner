import rootStore from '../../stores/RootStore';
import styles from '../../assets/styles/DailyTodo.module.css';
import TodoInputList from '../TodoInputList';
import { observer } from 'mobx-react';

const DailyTodo = () => {
	const isDarkMode = rootStore.uiStore.isDarkMode;
	const dailyTodoData = rootStore.planStore.plan?.mainTodo;

	return (
		<div
			className={styles.dailyTodoContainer}
			style={{
				border: isDarkMode ? '0.5px solid #1A1A1A' : '0.5px solid #D0D0D0',
			}}
		>
			<TodoInputList
				inputsList={dailyTodoData ? [...dailyTodoData] : []}
				labelText='Main Three Todo'
				checkboxName='mainThreeTodoCheckbox'
				modelName='mainTodo'
				textareaName='mainThreeTodoInput'
			/>
		</div>
	);
};

export default observer(DailyTodo);
