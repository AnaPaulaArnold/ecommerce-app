import { useState } from 'react';
import CreateTask, { Task } from '../components/CreateTask/CreateTask';

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
		<div>
			<CreateTask tasks={tasks} setTasks={setTasks} />
			{tasks.map((task) => (
				<li key={task.id}>
					<input
						type="checkbox"
						checked={task.completed}
						onChange={() => handleCheckBoxChange(task.id)}
					/>
					<span>{task.description}</span>
				</li>
			))}
		</div>
	);
};

export default Main;
