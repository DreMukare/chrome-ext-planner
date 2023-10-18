import { types } from 'mobx-state-tree';

const QuestionStore = types
	.model({
		user: types.maybe(types.string),
		question: types.optional(
			types.string,
			'What is your definition of happiness?'
		),
		questionAnswer: types.optional(types.string, ''),
	})
	.actions((self) => ({
		setQuestionAnswer(answer: string) {
			self.questionAnswer = answer;
		},

		setQuestion(question: string) {
			self.question = question;
		},
	}));

export default QuestionStore;
