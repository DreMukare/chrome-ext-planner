import rootStore from '../stores/RootStore';

const currentYear = rootStore.planStore.currentYear;

export type MonthType =
	| 'Jan'
	| 'Feb'
	| 'Mar'
	| 'Apr'
	| 'Jun'
	| 'Jul'
	| 'May'
	| 'Aug'
	| 'Sep'
	| 'Oct'
	| 'Nov'
	| 'Dec';

export const isLeapYear = (year: string) => {
	return (
		(0 === parseInt(currentYear) % 4 && 0 !== parseInt(currentYear) % 100) ||
		0 === parseInt(currentYear) % 400
	);
};

export const daysInMonths = {
	Jan: 31,
	Feb: isLeapYear(currentYear) ? 29 : 28,
	Mar: 31,
	Apr: 30,
	May: 31,
	Jun: 30,
	Jul: 31,
	Aug: 31,
	Sep: 30,
	Oct: 31,
	Nov: 30,
	Dec: 31,
};

export const getNumberOfDaysInMonth = (month: MonthType) => {
	return daysInMonths[month];
};
