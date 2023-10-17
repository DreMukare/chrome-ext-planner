import { DragDropContext } from 'react-beautiful-dnd';
import rootStore from '../../stores/RootStore';

const DraggableTodoContainer = (props: {
	inputsList: { [key: string]: string | boolean }[];
	children: JSX.Element | JSX.Element[];
}) => {
	const { inputsList, children } = props;
	return (
		<DragDropContext
			onDragEnd={(param) => {
				if (!param.destination) {
					return;
				}
				const tx = document.getElementsByTagName('textarea');
				for (let i = 0; i < tx.length; i++) {
					//@ts-ignore
					tx[i].height = '22px';
					tx[i].setAttribute('style', 'height:' + 22 + 'px;overflow-y:hidden;');
				}
				const srcIdx = param.source.index;
				const destIdx = param.destination.index;
				const list = [...inputsList];
				const [removed] = list.splice(srcIdx, 1);
				list.splice(destIdx, 0, removed);

				rootStore.planStore.setUpdatePlan('mainTodo', [...list]);
			}}
		>
			{children}
		</DragDropContext>
	);
};

export default DraggableTodoContainer;
