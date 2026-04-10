import React from 'react';

// TODO: Replace placeholder values with actual student and lab identifiers
const STUDENT_ID = '24WH5A0501';
const LAB_ID = 'FSDLAB2';

function Home() {
  return (
    <div>
      <h2>Home page for TaskList</h2>
      <h1>Stack Track Lab</h1>
      <p>Student ID: {STUDENT_ID}</p>
      <p>Lab ID: {LAB_ID}</p>

      {/* TODO: Replace this placeholder with your question set UI */}
      <p>QuestionComponent placeholder — implement your assigned question set here.</p>

    </div>
  );
}

export default Home;
