import { observer } from 'mobx-react';
import rootStore from '../../stores/RootStore';
import InputGroup from '../InputGroup';

const DailyQuestionFooter = (props: {
	isDarkMode: boolean;
	dailyQuestionFooterStyles: CSSModuleClasses;
}) => {
	const { isDarkMode, dailyQuestionFooterStyles: styles } = props;
	const dailyQuestionValue = rootStore.questionStore.questionAnswer;
	const handleMouseEnterAndKeyUp = (
		e:
			| React.KeyboardEvent<HTMLTextAreaElement>
			| React.MouseEvent<HTMLTextAreaElement, MouseEvent>
	) => {
		const target = e.target as HTMLElement;
		target.style.height = '22px';
		target.style.height = `${target.scrollHeight}px`;
	};

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		rootStore.questionStore.setQuestionAnswer(e.target.value);
	};

	return (
		<div className={styles.dailyQuestion}>
			<InputGroup
				title="TODAY'S QUESTION"
				name='dailyQuestion'
				textAreaClasses={styles.questionInput}
				textAreaStyles={{
					backgroundColor: isDarkMode ? '#000000' : '#FCFCFC',
					borderBottom: isDarkMode
						? '2px solid #1A1A1A'
						: '0.5px solid #575757',
					color: isDarkMode ? '#FFFFFF' : '#575757',
				}}
				handleMouseEnter={handleMouseEnterAndKeyUp}
				handleKeyUp={handleMouseEnterAndKeyUp}
				value={dailyQuestionValue}
				onChange={handleChange}
			/>
		</div>
	);
};

export default observer(DailyQuestionFooter);
