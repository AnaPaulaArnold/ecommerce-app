import { useState } from 'react';
import CreateTask, { Task } from '../components/CreateTask/CreateTask';
import '../styles/tailwind.css';

const Main = () => {
	const [tasks, setTasks] = useState<Task[]>([]);

	const handleCheckBoxChange = (taskId: number) => {
		const updatedTasks = tasks.map((task) => {
			if (task.id === taskId) {
				return {
					...task,
					completed: !task.completed,
				};
			}
			return task;
		});

		const reorderedTasks = [
			...updatedTasks.filter((task) => !task.completed),
			...updatedTasks.filter((task) => task.completed),
		];

		setTasks(reorderedTasks);
	};

	return (
		<div className="bg-yellow-200 rounded-lg shadow-lg p-4 w-1/3">
			<CreateTask tasks={tasks} setTasks={setTasks} />
			{tasks.map((task) => (
				<li key={task.id} className="w-full flex">
					<input
						type="checkbox"
						checked={task.completed}
						onChange={() => handleCheckBoxChange(task.id)}
						className=" w-full w-3/4"
					/>
					<span className="w-full w-1/4">{task.description}</span>
				</li>
			))}
		</div>
	);
};

export default Main;
