import { Instance, types } from 'mobx-state-tree';
import Plan from '../models/Plan';
import rootStore from './RootStore';

type IPlanValueType =
	| string
	| boolean
	| { uid: string; text: string | undefined; checked: boolean }[]
	| { uid: string; text: string | undefined; checked: boolean }
	| {
			uid: string;
			mealName: string | undefined;
			calories: string | undefined;
	  }[]
	| {
			uid: string;
			mealName: string | undefined;
			calories: string | undefined;
	  }
	| { [key: string]: string | boolean };

const PlanStore = types
	.model({
		plan: types.maybe(Plan),
		currentDay: types.string,
		currentMonth: types.string,
		currentYear: types.string,
	})
	.actions((self) => ({
		setPlan(plan: Instance<typeof Plan>) {
			const newPlan = JSON.parse(JSON.stringify(plan));
			self.plan = newPlan;
		},

		setCurrentDay(day: string) {
			self.currentDay = day;
		},

		setCurrentMonth(month: string) {
			self.currentMonth = month;
		},

		setCurrentYear(year: string) {
			self.currentYear = year;
		},

		setUpdatePlan(planKey: string, planValue: IPlanValueType) {
			const newPlan = { ...self.plan, [planKey]: planValue };
			self.plan = JSON.parse(JSON.stringify(newPlan));
		},
	}))
	.views((self) => ({
		getFullDate() {
			return `${self.currentDay}-${self.currentMonth}-${self.currentYear}`;
		},
	}));

export default PlanStore;
