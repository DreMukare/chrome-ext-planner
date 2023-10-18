import { initMeal, initTodo } from '../models/Plan';
import rootStore from '../stores/RootStore';

export const defualtPlanData = {
	user: rootStore.authStore.activeUser?.uid,
	date: new Date(
		Number(rootStore.planStore.currentYear),
		Number(rootStore.planStore.currentMonth),
		Number(rootStore.planStore.currentDay)
	),
	mainTodo: [...initTodo],
	dailyTodo: [...initTodo],
	lunch: [...initMeal],
	breakfast: [...initMeal],
	dinner: [...initMeal],
	excitedAbout: '',
	water: '0',
	meditation: false,
	relaxation: false,
	exercise: false,
	happinessLevel: '1',
	happyMoment: '',
	gratefulForMorning: '',
	gratefulForTonight: '',
};

class PlanService {
	public resetPlan() {
		const obj = JSON.parse(JSON.stringify(defualtPlanData));
		rootStore.planStore.setPlan(obj);
	}
}

export default new PlanService();
