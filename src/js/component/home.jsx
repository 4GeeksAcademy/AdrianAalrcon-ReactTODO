import React, { useState } from "react";
import TaskItem from "./taskitem";


const Home = () => {
    const [taskInput, setTaskInput] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if (taskInput.trim() !== "") {
            setTasks([...tasks, taskInput]);
            setTaskInput("");
        }
    };

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleAddTask();
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h1 className="card-title text-center mb-4">TODO LIST</h1>
                            <div className="input-group mb-3">
                                <input
                                    value={taskInput}
                                    type="text"
                                    className="form-control"
                                    placeholder="What needs to be done?"
                                    onChange={(e) => setTaskInput(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                />
                                <button className="btn btn-dark" onClick={handleAddTask}>
                                    Add
                                </button>
                            </div>
                            <ul className="list-group">
                                {tasks.map((task, index) => (
                                    <TaskItem
                                        key={index}
                                        index={index}
                                        task={task}
                                        onDelete={handleDeleteTask}
                                    />
                                ))}
                            </ul>
                        </div>
                        <p className="small text-left ms-3 mt-2">
                            {tasks.length === 0 ? "No tasks, add a task" : `${tasks.length} item(s) left`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
