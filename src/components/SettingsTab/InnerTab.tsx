const InnerTab = (props: {
	tabContainerStyle: string;
	title: string;
	titleSectionStyle: { [key: string]: string };
	children: JSX.Element;
}) => {
	const { tabContainerStyle, title, titleSectionStyle, children } = props;
	return (
		<div className={tabContainerStyle}>
			<div style={titleSectionStyle}>
				<h2 className=''>{title}</h2>
			</div>
			{children}
		</div>
	);
};

export default InnerTab;
