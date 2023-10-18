import rootStore from '../../stores/RootStore';
import { observer } from 'mobx-react';
import {
	MonthType,
	getNumberOfDaysInMonth,
	monthNames,
	yearRange,
} from '../../utils/dateUtils';
import styles from '../../assets/styles/DatePickerStyles.module.css';
import calendar from '../../assets/btnimages/calendar.svg';
import PlanService from '../../services/PlanService';

const DatePicker = () => {
	const { isDarkMode, displayMonthsOrYears } = rootStore.uiStore;
	const { currentMonth, currentYear, currentDay } = rootStore.planStore;
	const dateBorderColor = isDarkMode ? '#2C2C2C' : '#FCEFEF';
	const dateBgColor = isDarkMode ? '#191919' : '#FFFFFF';

	return (
		<div
			className={styles.datePicker}
			style={{
				background: isDarkMode ? '#000000' : '#FCFCFC',
				borderLeftColor: dateBorderColor,
			}}
		>
			<button
				className={styles.calendarIcon}
				onClick={() => {
					const current =
						displayMonthsOrYears === 'months' ? 'years' : 'months';
					rootStore.uiStore.setDisplayMonthsOrYears(current);
				}}
			>
				{displayMonthsOrYears === 'months' ? (
					<img src={calendar} alt='icon of calendar' />
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						stroke-width='2'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				)}
			</button>
			<div className={styles.selectors}>
				<div className={styles.days}>
					{Array.from(
						Array(getNumberOfDaysInMonth(currentMonth as MonthType)).keys()
					).map((day, idx) => {
						return (
							<button
								key={idx}
								onClick={async (e) => {
									// syncPlan(payload, date);
									if (String(day + 1) !== currentDay) {
										// storePlanInDb();
										rootStore.planStore.setCurrentDay(String(day + 1));
									}
								}}
								style={{
									fontFamily: 'Quicksand',
									border:
										String(day + 1) === currentDay
											? '0.5px solid #FFEFEF'
											: `0.5px solid ${dateBorderColor}`,
									backgroundColor:
										String(day + 1) === currentDay ? '#000000' : dateBgColor,
									color: String(day + 1) === currentDay ? 'white' : '#dc60a8',
								}}
								className={styles.day}
							>
								{day + 1}
							</button>
						);
					})}
				</div>
				<div className={styles.monthsOrYears}>
					{displayMonthsOrYears === 'months' ? (
						<div
							className={styles.period}
							style={{
								background: dateBgColor,
								border: `0.5px solid ${dateBorderColor}`,
							}}
						>
							{monthNames.map((month, idx) => {
								return (
									<button
										onClick={(e) => {
											// syncPlan(payload, date);
											// storePlanInDb();
											PlanService.resetPlan();
											rootStore.planStore.setCurrentMonth(String(month));
										}}
										style={{
											fontFamily: 'Varela Round',
											border: month === currentMonth ? '1px solid #FFEFEF' : '',
											backgroundColor:
												month === currentMonth ? '#000000' : dateBgColor,
											color: month === currentMonth ? 'white' : '#dc60a8',
										}}
										key={idx}
									>
										{month.toUpperCase()}
									</button>
								);
							})}
						</div>
					) : (
						<div
							className={styles.period}
							style={{
								background: dateBgColor,
								border: `0.5px solid ${dateBorderColor}`,
							}}
						>
							{yearRange.map((year, idx) => {
								return (
									<button
										key={idx}
										onClick={(e) => {
											// syncPlan(payload, date);
											// storePlanInDb();
											PlanService.resetPlan();
											rootStore.planStore.setCurrentYear(String(year));
										}}
										style={{
											fontFamily: 'Quicksand',
											border:
												String(year) === currentYear ? '1px solid #FFEFEF' : '',
											backgroundColor:
												String(year) === currentYear ? '#000000' : dateBgColor,
											color: String(year) === currentYear ? 'white' : '#dc60a8',
										}}
									>
										{year}
									</button>
								);
							})}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default observer(DatePicker);
