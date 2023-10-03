import { types } from 'mobx-state-tree';

const User = types.model({
	uid: types.identifier,
	name: types.optional(types.string, ''),
	email: types.maybe(types.string),
	photoUrl: types.maybe(types.string),
});

export default User;
