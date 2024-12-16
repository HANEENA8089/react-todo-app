import React from 'react';
import enhance from '../hoc/wrapInputBox';

function InputBox(props) {
    const { value, handleChange, handleKeyUp, priority, handlePriorityChange ,dueDate,handleDateChange } = props;

    return (
        <div>
            <input
                autoFocus
                type="text"
                className="form-control add-todo"
                value={value}
                onKeyUp={handleKeyUp}
                onChange={handleChange}
                placeholder="Add New"
            />
            <input
                type="date"
                className="form-control add-due-date"
                value={dueDate}
                onChange={handleDateChange}
                placeholder="Set Due Date"
            />
            <select
                className="form-control priority-selector"
                value={priority}
                onChange={handlePriorityChange}
            >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </div>
    );
}

export default enhance(InputBox);
