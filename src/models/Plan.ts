import { types } from 'mobx-state-tree';

const Plan = types.model({
	dailyAffirmation: types.optional(types.string, ''),
	water: types.optional(types.integer, 0),
});

export default Plan;
