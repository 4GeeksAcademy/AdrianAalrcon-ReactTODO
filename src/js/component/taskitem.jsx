// TaskItem.jsx

import React from "react";

const TaskItem = ({ task, index, onDelete }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>{task}</span>
            <button className="btn btn-danger btn-sm" onClick={() => onDelete(index)}>
                Delete
            </button>
        </li>
    );
};

export default TaskItem;
