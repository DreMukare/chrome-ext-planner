import { Instance, types } from 'mobx-state-tree';
import Plan from '../models/Plan';

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

		setUpdatePlan(
			planKey: string,
			planValue:
				| string
				| { [key: string]: string | boolean }[]
				| { [key: string]: string | boolean }
		) {
			const newPlan = { ...self.plan, [planKey]: planValue };
			self.plan = JSON.parse(JSON.stringify(newPlan));
		},
	}));

export default PlanStore;
