import { ref, set, update } from 'firebase/database';
import { db } from '../configs/firebase';

export const dbRef = ref(db, 'nala');
class FirebaseWrapper {
	private checkEvent(event: string) {
		const acceptableEvents = [
			'child_added',
			'child_changed',
			'child_removed',
			'child_moved',
			'value',
		];
		return acceptableEvents.includes(event);
	}

	// public on(event: string, callback: Function, cancelCallback?: Function) {
	// 	if (!this.checkEvent(event)) console.log('wrong event string');
	// 	// console.log("ON: " + this.wrapperRef.toString());
	// 	return this.wrapperRef.on(event, callback, cancelCallback);
	// }

	public writeToDb(refString: string, data: { [key: string]: any }) {
		const dataToBeWritten = JSON.parse(JSON.stringify(data));

		set(ref(db, refString), {
			dataToBeWritten,
		})
			.then(() => {
				console.log('Saved data');
			})
			.catch((err) => {
				console.error(err);
			});
	}

	public updateInDb(refString: string, data: { [key: string]: any }) {
		const updateData = JSON.parse(JSON.stringify(data));

		update(ref(db, refString), { updateData })
			.then(() => {
				console.log('Updated data');
			})
			.catch((err) => {
				console.error(err);
			});
	}
}

export default new FirebaseWrapper();
