const containerStyle = {
	display: 'flex',
	maxWidth: '361px',
	width: '361px',
	['overflow-x']: 'hidden',
};

const TabBody = (props: { children: JSX.Element }) => {
	return (
		<div style={containerStyle}>
			<div className='flex w-max h-[428px]'>{props.children}</div>
		</div>
	);
};

export default TabBody;
