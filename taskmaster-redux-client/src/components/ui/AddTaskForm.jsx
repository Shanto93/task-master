import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";

const AddTaskForm = ({ setIsOpen }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    // console.log(data);
    dispatch(addTask(data));
    onCancel();
  };

  return (
    <form
      className="flex flex-col w-3/4 mx-auto mt-5 space-y-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Title */}
      <div className="flex flex-col">
        <label className="font-semibold">Title</label>
        <input
          className="rounded-md mt-2"
          type="text"
          placeholder="Title here..."
          {...register("title")}
        />
      </div>
      {errors.title && <span>Title is required</span>}

      {/* Description */}
      <div className="flex flex-col">
        <label className="font-semibold">Description</label>
        <textarea
          className="rounded-md mt-2"
          placeholder="Description here..."
          {...register("description")}
        />
      </div>
      {errors.description && <span>Description is required</span>}

      {/* Deadline */}
      <div className="flex flex-col">
        <label className="font-semibold">Deadline</label>
        <input
          className="rounded-md mt-2"
          type="date"
          {...register("date")}
        />
      </div>
      {errors.date && <span>Deadline is required</span>}

      {/* Assign To */}
      <div className="flex flex-col">
        <label className="font-semibold">Assign To</label>
        <select {...register("assignedTo")} className="rounded-md mt-2">
          <option value="shanta">Shanta</option>
          <option value="rabbi">Rabbi</option>
        </select>
      </div>
      {errors.assignedTo && <span>Make sure to assign this to someone.</span>}

      {/* Priority */}
      <div className="flex flex-col">
        <label className="font-semibold">Priority</label>
        <select {...register("priority")} className="rounded-md mt-2">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      {errors.priority && <span>You have to select a priority</span>}

      <div className="flex justify-between">
        <button
          onClick={() => onCancel()}
          className="btn btn-danger"
          type="button"
        >
          Cancel
        </button>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
