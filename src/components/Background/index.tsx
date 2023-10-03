import { FunctionComponent, PropsWithChildren, useState } from 'react';

const Background: FunctionComponent<PropsWithChildren> = ({ children }) => {
	const [bgImg, setBgImg] = useState(
		'https://i.postimg.cc/cLjZm9RS/default-01.jpg'
	);

	return (
		<div
			className={`fixed top-0 left-0 w-[100vw] h-[100vh] bg-[url('https://i.postimg.cc/cLjZm9RS/default-01.jpg')] bg-no-repeat bg-cover bg-center bg-fixed `}
		>
			{children}
		</div>
	);
};

export default Background;
