import React from 'react';
import Input from './Input';
import Item from './Item';

const ToDoListPage: React.FC<any> = () => {
    return (
        <div>
            <Input />
            <Item />
        </div>
    )
}

export default ToDoListPage;