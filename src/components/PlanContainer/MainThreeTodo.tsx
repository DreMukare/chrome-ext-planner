import { observer } from 'mobx-react';
import style from '../../assets/styles/MainThreeTodoStyles.module.css';
import rootStore from '../../stores/RootStore';

const MainThreeTodo = () => {
	const isDarkMode = rootStore.uiStore.isDarkMode;

	return (
		<div
			className={style.container}
			style={{ border: isDarkMode ? '2px solid #1A1A1A' : '1px solid #000000' }}
		>
			MainThreeTodo
		</div>
	);
};

export default observer(MainThreeTodo);
