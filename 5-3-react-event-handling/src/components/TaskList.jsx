import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  if (!tasks || tasks.length === 0) {
    return <p className="placeholder">No tasks yet. Add your first task above.</p>;
  }

  return (
    <ul className="list">
      {tasks.map((t) => (
        <TaskItem key={t.id} id={t.id} text={t.text} onDelete={onDelete} />
      ))}
    </ul>
  );
}
