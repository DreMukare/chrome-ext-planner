import { ReactNode } from 'react';

const InnerTab = (props: {
	tabContainerStyle: string;
	title: string;
	titleSectionStyle: { [key: string]: string };
	children: ReactNode;
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