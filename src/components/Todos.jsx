import PropTypes from "prop-types";

const Todos = ({ children }) => {
	return <div>{children}</div>;
};

Todos.propTypes = {
	children: PropTypes.node,
};

export default Todos;
