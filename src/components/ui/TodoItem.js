import React from 'react';
import CheckBox from './CheckBox';

export default function TodoItem(props) {
    const {data, changeStatus} = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');

    return (
        <li className={className}>
            <div className="checkbox">
            <CheckBox checked={data.completed} onChange={handleChange} /> 
                    {data.text}
                    {/* Displaying the priority next to the task */}
                    <span className="priority-label" style={{ marginLeft: '10px', fontWeight: 'bold', color: 'gray' }}>
                        ({data.priority})
                    </span>
                    {/* Displaying the due date */}
                    <span className="due-date-label" style={{ marginLeft: '10px', fontWeight: 'normal', color: 'gray' }}>
                        {data.dueDate ? `Due: ${new Date(data.dueDate).toLocaleDateString()}` : ''}
                    </span>
            </div>
        </li>
        
    );
}
