import React from 'react';

const ProfileTab = (props: { tabContainerStyle: string }) => {
	const { tabContainerStyle } = props;

	return <div className={tabContainerStyle}>ProfileTab</div>;
};

export default ProfileTab;
