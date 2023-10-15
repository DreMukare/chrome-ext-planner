import { types } from 'mobx-state-tree';

const Profile = types.model({
	email: types.string,
});

export default Profile;
