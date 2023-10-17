import { types } from 'mobx-state-tree';
import { getUuid } from '../utils/uuid';

const todo = types.model({
	uid: types.identifier,
	text: types.optional(types.string, ''),
	checked: types.optional(types.boolean, false),
});

const initTodo = [
	{ uid: getUuid(), text: '', checked: false },
	{ uid: getUuid(), text: '', checked: false },
	{ uid: getUuid(), text: '', checked: false },
];

export const meal = types.model({
	uid: types.identifier,
	mealName: types.optional(types.string, ''),
	calories: types.optional(types.string, ''),
});

const initMeal = [
	{
		uid: getUuid(),
		mealName: '',
		calories: '',
	},
	{
		uid: getUuid(),
		mealName: '',
		calories: '',
	},
	{
		uid: getUuid(),
		mealName: '',
		calories: '',
	},
];

export const MealArray = types.array(meal);

const Plan = types.model({
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
