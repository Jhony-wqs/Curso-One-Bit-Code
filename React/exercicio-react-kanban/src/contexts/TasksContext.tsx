import type { Task} from "../entities/task";
import { createContext, type ReactNode } from "react";
import { useEffect, useState} from "react";
import { tasksService } from "../services/api";



export interface TasksContextData {
    tasks: Task[],
    createTask: (attributes: Omit<Task, 'id'>) => Promise<void>
    updateTask: (id: string, attributes: Partial<Omit<Task, 'id'>>) => Promise<void>
    deleteTask: (id: string) => Promise<void>
}

export const TasksContext = createContext({} as TasksContextData)

interface TasksContextProviderProps {
    children: ReactNode
}


export const TasksContextProvider: React.FC<TasksContextProviderProps> = ({children}) => {
     const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
       tasksService.fetchTasks().then((data) => setTasks(data))
    },[])

    const createTask = async (attributes: Omit<Task, "id">) => {
        
        const newTask = await tasksService.createTask(attributes)
        setTasks((currentState) => {
            const updatedTasks = [...currentState, newTask]
            return updatedTasks
        })
    } 

    const updateTask = async (id: string, attributes: Partial<Omit<Task, "id">>) =>{
        await tasksService.updateTask(id, attributes)
        setTasks((currentState) => {
            const updatedTask = [...currentState]
            const taskIndex = updatedTask.findIndex((task)=> task.id === id)
            Object.assign(updatedTask[taskIndex], attributes)
            return updatedTask
        })
    }

    const deleteTask = async (id: string) => {
        await tasksService.deleteTask(id)
        setTasks((currentState)=> currentState.filter((task)=> task.id !== id))
    } 


    return(
        <TasksContext.Provider value={{tasks, createTask, updateTask, deleteTask}}>
           {children}
        </TasksContext.Provider>
    )
}



