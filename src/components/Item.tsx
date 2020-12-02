import React from 'react';
import { Task } from './ToDoListPage';
import './styles.css';

interface ItemProps {
    task: Task;
    deleteTask: (id: string) => void; 
}

const Item: React.FC<ItemProps> = ({
    task,
    deleteTask
}) => {
    return (
        <div className="container">
            <div className="content">
                <p className={task.done ? "--strikethrough" : ""}> {task.task} </p>
                <div>
                    <button id="ok"> OK </button>
                    <button 
                    onClick={() => deleteTask(task.id)}
                    id="x"> X </button>
                </div>
            </div>
        </div>
    )
}

export default Item;