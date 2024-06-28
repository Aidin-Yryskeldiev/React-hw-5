import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";

const Todo = ({ todo, onDeleteTodo, onEditTodo, onToggleTodo }) => {
	const [isOpenEdit, setIsOpenEdit] = useState(false);
	const [changeText, setChangeText] = useState(todo.todo);

	const openEditHandler = () => setIsOpenEdit((prev) => !prev);

	const inputValueHandler = (e) => setChangeText(e.target.value);

	const submitChangeHandler = () => {
		onEditTodo(todo.id, changeText);
		setIsOpenEdit((prev) => !prev);
	};

	console.log(todo);

	return (
		<div>
			{isOpenEdit === true ? (
				<div>
					<input onChange={inputValueHandler} value={changeText} type="text" />

					<button onClick={submitChangeHandler}>Save</button>
				</div>
			) : (
				<>
					<div>
						<input
							onClick={() => onToggleTodo(todo.id)}
							checked={todo.isCompleted}
							type="checkbox"
						/>
						<p>{todo.todo}</p>
					</div>

					<div>
						<AiFillEdit onClick={openEditHandler} />

						<MdDelete onClick={() => onDeleteTodo(todo.id)} />
					</div>
				</>
			)}
		</div>
	);
};

Todo.propTypes = {
	todo: PropTypes.shape({
		todo: PropTypes.string.isRequired,
		id: PropTypes.number,
	}).isRequired,
	onDeleteTodo: PropTypes.func.isRequired,
};

export default Todo;
