import React, { useState, useEffect } from "react";

const Home = () => {
    const [taskInput, setTaskInput] = useState("");
    const [tasks, setTasks] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const listItems = document.querySelectorAll(".list-group-item");
        listItems.forEach((item, index) => {
            if (index === hoveredIndex) {
                item.style.backgroundColor = "red";
            } else {
                item.style.backgroundColor = "transparent";
            }
        });
    }, [hoveredIndex]);

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && taskInput.trim() !== "") {
            setTasks([...tasks, taskInput]);
            setTaskInput("");
        }
    };

    const handleDelete = (indexToDelete) => {
        setTasks(tasks.filter((task, index) => index !== indexToDelete));
    };

    return (
        <div>
            <div className="row mt-3">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="card ">
                            <div className="card-body">
                                <h1 className="card-title p-1 text-center">TODO LIST</h1>
                                <div className="input-group">
                                    <input
                                        value={taskInput}
                                        type="text"
                                        className="form-control shadow-none"
                                        placeholder="What needs to be done?"
                                        onChange={(e) => setTaskInput(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                    />
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => {
                                            if (taskInput.trim() !== "") {
                                                setTasks([...tasks, taskInput]);
                                                setTaskInput("");
                                            }
                                        }}
                                    >Add</button>
                                </div>
                                <ul className="list-group mt-2">
                                    {tasks.map((task, index) => (
                                        <li
                                            key={index}
                                            className="list-group-item"
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                            onClick={() => handleDelete(index)}
                                        >{task}</li>
                                    ))}
                                </ul>
                            </div>
                            <p className="small text-left ms-3">{tasks.length === 0 ? "No tasks, add a task" : tasks.length + " items left"}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
};

export default Home;
