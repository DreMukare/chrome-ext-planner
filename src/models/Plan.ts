import { types } from 'mobx-state-tree';

const todo = types.model({
	text: types.optional(types.string, ''),
	checked: types.optional(types.boolean, false),
});

const meal = types.model({
	mealName: types.optional(types.string, ''),
	calories: types.optional(types.string, ''),
});

const Plan = types.model({
	date: types.Date,
	mainTodo: types.array(todo),
	dailyTodo: types.array(todo),
	lunch: types.maybe(meal),
	breakfast: types.maybe(meal),
	dinner: types.maybe(meal),
	excitedAbout: types.optional(types.string, ''),
	water: types.optional(types.string, '0'),
	meditation: types.optional(types.boolean, false),
	relaxation: types.optional(types.boolean, false),
	exercise: types.optional(types.boolean, false),
	happinessLevel: types.optional(types.string, '0'),
	happyMoment: types.optional(types.string, ''),
	gratefulForMorning: types.optional(types.string, ''),
	gratefulForTonight: types.optional(types.string, ''),
});

export default Plan;
