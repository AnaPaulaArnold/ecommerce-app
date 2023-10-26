import React, { useState } from 'react';
import { TupleType } from 'typescript';

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
		<div>
			<input
				type="text"
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
				placeholder="Digite uma nova tarefa"
			/>
			<button onClick={handleCreateTask}>Criar</button>
		</div>
	);
};

export default CreateTask;
