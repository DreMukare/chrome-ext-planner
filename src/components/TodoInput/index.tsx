import DraggableTodoContainer from '../DraggableTodoContainer';

const TodoInput = (props: { inputsList: { [key: string]: string }[] }) => {
	const { inputsList } = props;
	return (
		<DraggableTodoContainer inputsList={inputsList}>
			<></>
		</DraggableTodoContainer>
	);
};

export default TodoInput;
