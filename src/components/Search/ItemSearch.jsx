import { Link } from "react-router-dom";
import useDate from "../../hooks/useDate";

const ItemSearch = ({ task }) => {
    const dateFormated = useDate(task.date);
    return (
      <li key={task.id} className="py-2">
        <Link
          to={`/task/${task.id}`}
          className="flex justify-between transition hover:text-rose-500 dark:hover:text-slate-200"
        >
          <span>{task.title}</span>
          <span>{dateFormated}</span>
        </Link>
      </li>
    );
  };

  export default ItemSearch