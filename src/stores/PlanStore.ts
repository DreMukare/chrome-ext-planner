import { Instance, types } from 'mobx-state-tree';
import Plan from '../models/Plan';

type IPlanValueType =
	| string
	| boolean
	| { text: string | undefined; checked: boolean }[]
	| { text: string | undefined; checked: boolean }
	| {
			mealName: string | undefined;
			calories: string | undefined;
	  }[]
	| {
			mealName: string | undefined;
			calories: string | undefined;
	  }
	| { [key: string]: string | boolean };

const date = new Date();
const todayDate = date.getDate().toString();
const todayMonth = date
	.toLocaleString('default', { month: 'short' })
	.toString();
const todayYear = date.getFullYear().toString();

const PlanStore = types
	.model({
		plan: types.maybe(Plan),
		currentDay: types.optional(types.string, todayDate),
		currentMonth: types.optional(types.string, todayMonth),
		currentYear: types.optional(types.string, todayYear),
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
