import { useForm } from "react-hook-form";

const AddTaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
          {...register("deadline")}
        />
      </div>
      {errors.deadline && <span>Deadline is required</span>}

      {/* Assign To */}
      <div className="flex flex-col">
        <label className="font-semibold">Assign To</label>
        <select {...register("assign")} className="rounded-md mt-2">
          <option>Shanta</option>
          <option>Rabbi</option>
        </select>
      </div>
      {errors.assign && <span>Make sure to assign this to someone.</span>}

      {/* Priority */}
      <div className="flex flex-col">
        <label className="font-semibold">Priority</label>
        <select {...register("priority")} className="rounded-md mt-2">
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
      {errors.priority && <span>You have to select a priority</span>}

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddTaskForm;
