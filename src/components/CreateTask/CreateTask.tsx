import React, { useState } from 'react';

export interface Task {
	id: number;
	description: string;
	completed: boolean;
}

interface CreateTaskProps {
	task?: Task;
	tasks: Array<Task>;
	setTasks: Function;
}

const CreateTask: React.FC<CreateTaskProps> = ({ task, tasks, setTasks }) => {
	const [inputText, setInputText] = useState<string>('');

	const handleCreateTask = () => {
		if (inputText.trim() !== '') {
			const newTask: Task = {
				id: Date.now(),
				description: inputText,
				completed: false,
			};

			setTasks([...tasks, newTask]);
			setInputText('');
		}
	};

	return (
		<div className="w-full ">
			<input
				type="text"
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
				placeholder="Digite uma nova tarefa"
				className="w-3/4 mb-6 bg-gray-700 border border-gray-600 text-white text-sm rounded-lg  p-2.5 "
			/>
			<button
				type="button"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				<svg
					className="w-6 h-6 text-gray-800 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 18 18"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M9 1v16M1 9h16"
					/>
				</svg>
			</button>
		</div>
	);
};

export default CreateTask;
