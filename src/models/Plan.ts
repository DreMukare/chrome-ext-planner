import { types } from 'mobx-state-tree';

const todo = types.model({
	text: types.optional(types.string, ''),
	checked: types.optional(types.boolean, false),
});

export const initTodo = [
	{ text: '', checked: false },
	{ text: '', checked: false },
	{ text: '', checked: false },
];

export const meal = types.model({
	mealName: types.optional(types.string, ''),
	calories: types.optional(types.string, ''),
});

export const initMeal = [
	{
		mealName: '',
		calories: '',
	},
	{
		mealName: '',
		calories: '',
	},
	{
		mealName: '',
		calories: '',
	},
];

export const MealArray = types.array(meal);

const Plan = types.model({
	user: types.identifier,
	date: types.Date,
	mainTodo: types.optional(types.array(todo), initTodo),
	dailyTodo: types.optional(types.array(todo), initTodo),
	lunch: types.optional(types.array(meal), initMeal),
	breakfast: types.optional(types.array(meal), initMeal),
	dinner: types.optional(types.array(meal), initMeal),
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
