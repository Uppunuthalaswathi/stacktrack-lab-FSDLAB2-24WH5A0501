import React from 'react';
import { Link } from 'react-router-dom';

const STUDENT_ID = '24WH5A0501';
const LAB_ID = 'FSDLAB2';

function Home() {
  return (
    <div>
      <h1>Stack Track Lab</h1>
      <h2>Task Management Application</h2>
      <p>Student ID: {STUDENT_ID}</p>
      <p>Lab ID: {LAB_ID}</p>
      <p>This application loads tasks from the backend API and shows them on a dedicated page.</p>
      <p>
        <Link to="/tasks">View Tasks</Link>
      </p>
    </div>
  );
}
export default Home;
