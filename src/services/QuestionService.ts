import PlanStore from '../stores/PlanStore';
import rootStore from '../stores/RootStore';
import FirebaseWrapper from './FirebaseWrapper';

class QuestionService {
	public saveQuestion() {
		const dataToWrite = {
			userId: rootStore.authStore.activeUser?.uid,
			question: rootStore.questionStore.question,
			questionAnswer: rootStore.questionStore.questionAnswer,
		};
		FirebaseWrapper.writeToDb(
			`dailyQuestionAnswers/${rootStore.planStore.getFullDate()}`,
			dataToWrite
		);
	}
}

export default new QuestionService();
