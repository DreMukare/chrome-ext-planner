import { types } from 'mobx-state-tree';
import Plan from '../models/Plan';

const PlanStore = types.model({
	plan: types.maybe(Plan),
	currentDay: types.string,
	currentMonth: types.string,
	currentYear: types.string,
});

export default PlanStore;
