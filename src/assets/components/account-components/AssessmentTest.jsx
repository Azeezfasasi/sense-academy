import React, { useState } from 'react';

const AssessmentTest = ({ assessment, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // Store user's answers

  if (!assessment) {
    return (
      <div className="w-full bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Assessment Test</h2>
        <p className="text-gray-600">No assessment selected.</p>
        <button
          onClick={onBack}
          className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Back to Assessments
        </button>
      </div>
    );
  }

  const { title, questions } = assessment;

  if (!questions || questions.length === 0) {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[17px] md:text-[20px] font-semibold">Test: {title}</h2>
          <button
            onClick={onBack}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 text-[140px] rounded focus:outline-none focus:shadow-outline"
          >
            Back to Assessments
          </button>
        </div>
        <p className="text-gray-600">This assessment does not have any questions.</p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleSubmitTest = () => {
    // Implement your logic to evaluate the answers
    console.log('Submitting answers:', answers);
    // You might want to call a function passed as a prop to handle submission
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button
          onClick={onBack}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 md:px-4 text-[13px] md:text-[14px] rounded focus:outline-none focus:shadow-outline"
        >
          Back to Assessments
        </button>
      </div>

      {currentQuestion && (
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">
            Question {currentQuestionIndex + 1}: {currentQuestion.text}
          </h3>
          {currentQuestion.options && currentQuestion.options.map((option, index) => (
            <div key={index} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-blue-600"
                  name={`question-${currentQuestion.id}`}
                  value={option}
                  checked={answers[currentQuestion.id] === option}
                  onChange={() => handleAnswerChange(currentQuestion.id, option)}
                />
                <span className="ml-2 text-gray-700">{option}</span>
              </label>
            </div>
          ))}
          {currentQuestion.type === 'text' && (
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="3"
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
            ></textarea>
          )}
        </div>
      )}

      <div className="flex justify-between">
        <button
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Previous
        </button>
        {currentQuestionIndex < questions.length - 1 ? (
          <button
            onClick={handleNextQuestion}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmitTest}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Test
          </button>
        )}
      </div>
    </div>
  );
};

export default AssessmentTest;