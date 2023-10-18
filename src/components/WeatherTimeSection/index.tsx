import { useState, useEffect } from 'react';
import styles from '../../assets/styles/WeatherTime.module.css';
import rootStore from '../../stores/RootStore';
import { observer } from 'mobx-react';
import useLocalityData from '../../hooks/useLocalityData';
import useWeatherData from '../../hooks/useWeatherData';

const WeatherTimeSection = () => {
	const [date, setDate] = useState(new Date());

	// TODO: Add type definitions for weather and location data
	// @ts-ignore
	const {
		// @ts-ignore
		data: locationData,
		// @ts-ignore
		error: localityError,
		// @ts-ignore
		isLoading: isLoadingLocation,
	} = useLocalityData();
	const {
		// @ts-ignore
		data: weatherData,
		// @ts-ignore
		error: weatherError,
		// @ts-ignore
		isLoading: isLoadingWeather,
	} = useWeatherData();

	if (localityError) console.log('ERROR GETTING LOCATION: ' + localityError);

	if (weatherError) console.log('ERROR GETTING LOCATION: ' + weatherError);

	if (isLoadingLocation || isLoadingWeather) return '';

	const {
		isWeatherVisible: displayWeather,
		isTimeVisible: displayTime,
		timeFormat,
	} = rootStore.uiStore;

	const twentyFourHours = timeFormat === '24';

	useEffect(() => {
		const interval = setInterval(() => setDate(new Date()), 30000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.weatherTimeSectionContainer}>
			{displayTime && (
				<div className={styles.time}>
					<div className='clock'>
						{
							date
								.toLocaleString('en-US', {
									hour: 'numeric',
									minute: 'numeric',
									hour12: twentyFourHours,
								})
								.split(' ')[0]
						}
					</div>
					<div className={styles.ampm}>
						{date
							.toLocaleString('en-US', {
								hour: 'numeric',
								minute: 'numeric',
								hour12: twentyFourHours,
							})
							.split(' ')[1]
							? date
									.toLocaleString('en-US', {
										hour: 'numeric',
										minute: 'numeric',
										hour12: twentyFourHours,
									})
									.split(' ')[1]
							: ''}
					</div>
				</div>
			)}
			{displayTime && displayWeather && <div className={styles.hr}>&nbsp;</div>}
			{displayWeather && (
				<div className={styles.weather}>
					<div className={styles.temp}>
						{weatherData.weather[0].icon !== '' ? (
							<img
								style={{ width: '40px', height: '40px', objectFit: 'contain' }}
								src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
								alt='Weather icon'
							/>
						) : (
							<p>Icn</p>
						)}
						<p className={styles.tempString}>
							{weatherData.main.temp} <span>&deg;</span>
						</p>
					</div>
					<p>{locationData.locality}</p>
				</div>
			)}
		</div>
	);
};

export default observer(WeatherTimeSection);
