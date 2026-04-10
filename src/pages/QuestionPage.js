import React from 'react';
import { Link } from 'react-router-dom';
import QuestionComponent from '../components/question/QuestionComponent';

function QuestionPage() {
  return (
    <div>
      <h1>Question Page</h1>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
      <QuestionComponent />
    </div>
  );
}
export default QuestionPage;
