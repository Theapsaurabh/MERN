import { FaCheck } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"


const TodoList = ({index, curTask, handleToDoDelete}) => {
  return (
    <li key={index} className="todo-item">
                <span>{curTask}</span>
                <button className="check-btn">
                  <FaCheck />
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleToDoDelete(curTask)}
                >
                  <MdDeleteForever />
                </button>
              </li>
  )
}

export default TodoList
