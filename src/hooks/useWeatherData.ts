import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// interface weatherData {}

const useWeatherData = () => {
	const handleGeoErr = (err: GeolocationPositionError) => {
		console.log('GEOLOCATION ERROR: ' + err);
	};

	if ('geolocation' in navigator) {
		const fetchWeatherData = () => {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					return axios
						.get(
							`https://api.openweathermap.org/data/2.5/weather?lat=${
								position.coords.latitude
							}&lon=${position.coords.longitude}&appid=${
								import.meta.env.VITE_OPENWEATHERAPI_KEY
							}&units=metric`
						)
						.then((res) => res.data);
				},
				(err) => {
					handleGeoErr(err);
				}
			);
		};

		return useQuery(['weather'], fetchWeatherData);
	}
	alert('Please allow location');
	return;
};

export default useWeatherData;
