import React from 'react';
import './styles.css';

const Item: React.FC<any> = () => {
    return (
        <div className="container">
            <div className="content">
                <p></p>
                <div>
                    <button id="ok"> OK </button>
                    <button id="x"> X </button>
                </div>
            </div>
        </div>
    )
}

export default Item;