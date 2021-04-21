import React, { useContext, useState } from 'react'
import { API } from '../../API/APIHost'
import { AuthContext } from './AuthContext';
import { TaskContext } from './TaskContext'


export const TaskContextProvider = ({ children }) => {
	const [tasksState, setTasksState] = useState();

	const { user } = useContext(AuthContext)

	const createTask = (projectId, task) => {
		API.post('/tasks', {
			projectId,
			task
		}, {
			headers: {
				Authorization: user
			}
		})
			.then(response => {
				console.log(response)
				setTasksState(response.data)
			})
			.catch(err => console.log(err))
	}

	const getTasks = (projectId) => {

		console.log('user id', user)
		API.get(`/tasks?projectId=${projectId}`,{
			headers: {
				Authorization: user
			}
		}).then(response => {
			console.log(response.data)
			setTasksState(response.data)
		})
			.catch(err => console.log(err))
	}


	return (
		<TaskContext.Provider value={{ createTask, tasksState, getTasks }}>
			{children}
		</TaskContext.Provider>
	)
}
