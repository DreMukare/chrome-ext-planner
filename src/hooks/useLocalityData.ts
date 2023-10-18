import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useLocalityData = () => {
	const handleGeoErr = (err: GeolocationPositionError) => {
		console.log('GEOLOCATION ERROR: ' + err);
	};

	const getQueryUrl = (latitude: number, longitude: number) =>
		`https://api-bdc.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=${
			import.meta.env.VITE_GEOCODE_API_KEY
		}`;

	if ('geolocation' in navigator) {
		const fetchLocalityData = async () => {
			return new Promise((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(
					async (position) => {
						try {
							const response = await axios.get(
								getQueryUrl(position.coords.latitude, position.coords.longitude)
							);
							resolve(response.data);
						} catch (error) {
							reject(error);
						}
					},
					(err) => {
						handleGeoErr(err);
						reject(err);
					}
				);
			});
		};

		return useQuery(['location'], fetchLocalityData);
	}
	alert('Please allow location');
	return;
};

export default useLocalityData;
