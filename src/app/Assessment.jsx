import React, { useState } from 'react'
import AccountHeader from '../assets/components/account-components/AccountHeader'
import AccountMenu from '../assets/components/account-components/AccountMenu'
import CourseAssessments from '../assets/components/account-components/CourseAssessments';
import AssessmentTest from '../assets/components/account-components/AssessmentTest';

function Assessment() {
  const [assessments, setAssessments] = useState([
  { 
    id: 1, 
    title: 'React Fundamentals Quiz', 
    description: 'Test your basic React knowledge.', 
    progress: 60,
    questions: [
      {
        id: 'q1',
        text: 'What is JSX?',
        options: ['JavaScript XML', 'Java Syntax Extension', 'JSON XML', 'Just Simple XML'],
        correctAnswer: 'JavaScript XML',
      },
      {
        id: 'q2',
        type: 'text',
        text: 'Explain the purpose of the useState hook in React.',
      },
      // ... more questions for assessment 4
    ],
  },
  { 
    id: 2, 
    title: 'Component Lifecycle Assessment', 
    description: 'Understanding component mounting and updating.', 
    progress: 30,
    questions: [
      {
        id: 'q1',
        text: 'What is JSX?',
        options: ['JavaScript XML', 'Java Syntax Extension', 'JSON XML', 'Just Simple XML'],
        correctAnswer: 'JavaScript XML',
      },
      {
        id: 'q2',
        type: 'text',
        text: 'Explain the purpose of the useState hook in React.',
      },
      // ... more questions for assessment 4
    ],
  },
  { 
    id: 3, 
    title: 'State Management Challenge', 
    description: 'Working with useState and props.', 
    progress: 90,
    questions: [
      {
        id: 'q1',
        text: 'What is JSX?',
        options: ['JavaScript XML', 'Java Syntax Extension', 'JSON XML', 'Just Simple XML'],
        correctAnswer: 'JavaScript XML',
      },
      {
        id: 'q2',
        type: 'text',
        text: 'Explain the purpose of the useState hook in React.',
      },
      // ... more questions for assessment 4
    ],
   },
  {
    id: 4,
    title: 'Advanced Hooks Test',
    description: 'Explore custom hooks and more.',
    questions: [
      {
        id: 'q1',
        text: 'What is JSX?',
        options: ['JavaScript XML', 'Java Syntax Extension', 'JSON XML', 'Just Simple XML'],
        correctAnswer: 'JavaScript XML',
      },
      {
        id: 'q2',
        type: 'text',
        text: 'Explain the purpose of the useState hook in React.',
      },
      // ... more questions for assessment 4
    ],
    progress: 90
  },
  { // Add questions for the 'React Fundamentals Quiz' (id: 1)
    id: 5,
    title: 'React Fundamentals Quiz',
    description: 'Test your basic React knowledge.',
    progress: 60,
    questions: [
      {
        id: 'rfq1',
        text: 'What is React?',
        options: ['A JavaScript library', 'A CSS framework', 'A database', 'A programming language'],
        correctAnswer: 'A JavaScript library',
      },
      // ... more questions for assessment 1
    ],
  },
  // ... other assessments with or without questions
]);

  const [selectedAssessmentId, setSelectedAssessmentId] = useState(null);

  const handleSelectAssessment = (id) => {
    setSelectedAssessmentId(id);
  };

  const handleBackToAssessments = () => {
    setSelectedAssessmentId(null);
  };

  const selectedAssessment = assessments.find((assessment) => assessment.id === selectedAssessmentId);

  return (
    <>
    <AccountHeader />
    <main className="flex flex-row justify-around w-full p-0 m-0 mx-auto pt-[30px]">
      <aside className="w-fit border ml-0 p-0 relative -top-8">
        <AccountMenu />
      </aside>
      <section className='w-full px-4'>
        {!selectedAssessmentId ? (
        <CourseAssessments assessments={assessments} onSelectAssessment={handleSelectAssessment} />
      ) : (
        <AssessmentTest assessment={selectedAssessment} onBack={handleBackToAssessments} />
      )}
      </section>
    </main>
    </>
  )
}

export default Assessment;