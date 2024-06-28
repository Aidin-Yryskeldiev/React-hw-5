import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onDeleteTodo, onEditTodo, onToggleTodo }) => {
	return (
		<>
			{todos?.map((todo) => (
				<Todo
					onToggleTodo={onToggleTodo}
					onEditTodo={onEditTodo}
					onDeleteTodo={onDeleteTodo}
					key={todo.id}
					todo={todo}
				/>
			))}
		</>
	);
};

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			todo: PropTypes.string,
		})
	),

	onDeleteTodo: PropTypes.func.isRequired,
	onEditTodo: PropTypes.func.isRequired,
};

export default TodoList;
