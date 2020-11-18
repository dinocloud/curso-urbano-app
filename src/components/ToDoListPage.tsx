import React from 'react';
import Input from './Input';
import Item from './Item';
// import { v4 as uuidv4 } from 'uuid';
import './styles.css';

const ToDoListPage: React.FC<any> = () => {
    return (
        <div className="to-do-list__container">
            <Input/>
            <div>
                <Item/>
            </div>
        </div>
    )
}

export default ToDoListPage;