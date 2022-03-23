import "./tasks-box.css";
import { useState } from "react";
function TasksBox(props) {
  const [value, setValue] = useState("");
  const [task, setTask] = useState([]);
  const [todo, setTodo] = useState();
  const [doings, setDoings] = useState([]);
  const [done, setDone] = useState([]);

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  const clickHandler = (e) => {
    setValue("");
    setTodo(true);
    setTask([...task, value]);
  };
  const addHandler = (e, i) => {
    let index = task[i];
    const TASK = task.splice(index, 1);
    setDoings([...doings, ...TASK]);
  };

  const addToDoneHandler = (e, i) => {
    let index = doings[i];
    const DOINGS = doings.splice(index, 1);
    setDone([...done, ...DOINGS]);
    console.log(done);
  };
  const clearHandler = (e, i) => {
    setDone([])
  };

  return (
    <>
      <div className="tasks-box">
        <div className="add-task">
          <label>Task Name</label>
          <input type="text" onChange={inputHandler} value={value} />
          <button onClick={clickHandler}>Add Task</button>
        </div>
        <div className="row">
          <div className="to-do">
            <strong>TO DO</strong>
            {todo &&
              task.map((task, i) => {
                return (
                  <div className="map" key={i}>
                    <p>
                      {i + 1 + "-"} {task}
                    </p>
                    <button onClick={(e) => addHandler(e, i)}>add doing</button>
                  </div>
                );
              })}
          </div>
          <div className="doing">
            <strong>DOING</strong>
            {doings.map((doing, i) => {
              return (
                <div className="map">
                  <p>{i + "-"} {doing}</p>
                  <button onClick={(e) => addToDoneHandler(e, i)}>
                    Add to Done
                  </button>
                </div>
              );
            })}
          </div>
          <div className="done">
            <strong>DONE</strong>
            {done.map((item, i) => {
             return <div className="map">
                <p>{item}</p>
              </div>;
            })}
            <button onClick={clearHandler} className="clear-btn">Clear Board</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TasksBox;
