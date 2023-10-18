import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from '../../assets/styles/DailyQuestion.module.css';
import rootStore from '../../stores/RootStore';
import QuestionService from '../../services/QuestionService';

const DailyQuestion = () => {
	const [fadedOut, setFadedOut] = useState(false);
	const { question, questionAnswer } = rootStore.questionStore;
	const firstwordInQuestion = question.split(' ')[0];
	const restOfQuestion = question.split(' ').slice(1).join(' ');
	const name = rootStore.authStore.activeUser?.name;

	useEffect(() => {
		let timer: NodeJS.Timeout;
		let handleMouseMove = () => {
			setFadedOut(false);
			clearTimeout(timer);
			timer = setTimeout(() => setFadedOut(true), 10000);
		};
		handleMouseMove();
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter' || e.code === 'NumpadEnter') {
			e.preventDefault();
			QuestionService.saveQuestion();
		}
	};

	return (
		<div
			className={styles.questionContainer}
			style={fadedOut ? { opacity: '0.04' } : { transition: '0.3s' }}
		>
			<div className={styles.inner}>
				<h1>Hi {name}</h1>
				<form onSubmit={() => {}}>
					<label htmlFor='answer'>
						<em>{firstwordInQuestion}</em> {restOfQuestion}
					</label>
					<input
						type='text'
						name='answer'
						id='answer'
						placeholder='I...'
						value={questionAnswer}
						onKeyDown={(e) => {
							handleKeyDown(e);
						}}
						onChange={(e) => {
							rootStore.questionStore.setQuestionAnswer(e.target.value);
						}}
					/>
				</form>
			</div>
		</div>
	);
};

export default observer(DailyQuestion);
