import React, { useState } from 'react';

interface InputProps {
    createTask: (e: any, text: string ) => void;
}

const Input: React.FC<InputProps> = ({
    createTask
}) => {

    const [text, setText] = useState<string>('');

    return (
        <form onSubmit={ (e) => { createTask(e, text); setText('') }}>
            <input
            type="text"
            placeholder="Ingrese su tarea"
            onChange={ (e) => setText(e.target.value) }
            value={text}
            />
        </form>
    )
}

export default Input;