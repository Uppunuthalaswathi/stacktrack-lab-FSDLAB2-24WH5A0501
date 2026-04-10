import React, { useEffect, useState } from "react";

function QuestionComponent() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Dummy data (simulate API)
    const data = [
      {
        _id: "1",
        title: "Complete Assignment",
        description: "React lab work",
        status: "pending"
      }
    ];

    setTasks(data);
  }, []);

  return (
    <div>
      <h2>Task List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map(task => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QuestionComponent;