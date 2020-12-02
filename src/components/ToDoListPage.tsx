import React, { useState } from 'react';
import Input from './Input';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';
import './styles.css';

export interface Task {
    id: string,
    task: string,
    done: boolean
}

interface ToDoListPageProps {};

const ToDoListPage: React.FC<ToDoListPageProps> = () => {

    const [tasks, setTasks] = useState<Task[]>([]);

    function createTask(e: any, text: string) {
        e.preventDefault();
        let taskObj = {
            id: uuidv4(),
            task: text,
            done: false
        }
        setTasks([ ...tasks, taskObj ])
    }

    function deleteTask(id: string) {
        let filteredTaks = tasks.filter( task => task.id !== id );
        setTasks(filteredTaks)
    }

    return (
        <div className="to-do-list__container">
            <Input
            createTask={createTask}
            />
            <div>
                { tasks.map(task => 
                    <Item 
                    deleteTask={deleteTask}
                    key={task.id} 
                    task={task}/>
                )}
            </div>
        </div>
    )
}

export default ToDoListPage;