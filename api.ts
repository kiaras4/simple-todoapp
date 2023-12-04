import { ITask } from "./types/tasks"

const baseUrl = 'http://localhost:3000/tasks'

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}`);
    // console.log(res)
    const todos = await res.json();
    return todos;  
}