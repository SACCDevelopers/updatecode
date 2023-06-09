import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [wrongAttempts, setWrongAttempts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/ComputerQuiz/Questions')
      .then(response => {
        setQuestions(response.data);
        setTime(response.data.length * 60); // set time based on number of questions
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // Only set the interval if there are questions to display
    if (questions.length > 0) {
      const intervalId = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
      setIntervalId(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [questions]);

  const secondsToHMS = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const trimmedCorrectOption = currentQuestion.correctOption.trim(); // Trim whitespace from correctOption
    const totalTime = questions.length * 60 - time; // calculate total time taken

    if (trimmedCorrectOption === selectedOption) {
      setScore(score + 1);
    } else {
      setWrongAttempts(prevAttempts => [...prevAttempts, currentQuestion]);
    }
    if (currentQuestionIndex === questions.length - 1) {
      const result = {
        chapter: 'bbbb',
        totalMarks: questions.length,
        obtainedMarks: score,
        timeTaken: totalTime,
        dateTime: new Date().toISOString() // Adds the current date and time in ISO format
      };
      axios.post('http://localhost:5000/api/ComputerQuiz/Results', result)
        .then(response => {
          console.log(response.data.message);
        })
        .catch(error => {
          console.error(error);
        });
    }

    setSelectedOption('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (currentQuestionIndex >= questions.length || time <= 0) {
    clearInterval(intervalId); // stop the timer
    const totalTime = questions.length * 60 - time; // calculate total time taken
    const scorePercentage = (score / questions.length) * 100; // calculate score percentage

    return (
        <div className="quiz-container">
        <h1 className="quiz-heading">Quiz Completed</h1>
        {scorePercentage >= 50 ? (
          <div className="score-message">
            <p className="score-text">
              Your score is <span className="green-score">{score}/{questions.length}</span>
            </p>
            <p className="green-message">Keep it up!</p>
          </div>
        ) : (
          <div className="score-message">
            <p className="score-text">
              Your score is <span className="red-score">{score}/{questions.length}</span>
            </p>
            <p className="red-message">Work Hard to get good scores!</p>
          </div>
        )}
        <p className="time-taken">Total time taken: {secondsToHMS(totalTime)}</p>

        {wrongAttempts.length > 0 && (
          <div className="wrong-attempts">
            <h2 className="wrong-attempts-heading">Wrong Attempts</h2>
            {wrongAttempts.map((question, index) => (
              <div key={index} className="wrong-question">
                <h3 className="question-number">Question {index + 1}</h3>
                <p className="question-text">{question.questionText}</p>
                <p className="correct-answer">Correct Answer: {question[`option${question.correctOption.trim()}`]}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  return (

    <div className="quiz-container">
      <h1>{questions[currentQuestionIndex].chapter}</h1>
      <div className="question-count">
        <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
        <p>{questions.length - currentQuestionIndex - 1} questions remaining</p>
      </div>
      <div className="timer">{secondsToHMS(Math.max(0, time))}</div>
      <div className="question-container">
        <head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </head>
        <h1 className="question">{questions[currentQuestionIndex].questionText}</h1>
        <ul className="options">
          <li>
            <input
              type="radio"
              name="option"
              id="optionA"
              value="A"
              checked={selectedOption === 'A'}
              onChange={() => handleOptionSelect('A')}
            />
            <label htmlFor="optionA">{questions[currentQuestionIndex].optionA}</label>
          </li>
          <li>
            <input
              type="radio"
              name="option"
              id="optionB"
              value="B"
              checked={selectedOption === 'B'}
              onChange={() => handleOptionSelect('B')}
            />
            <label htmlFor="optionB">{questions[currentQuestionIndex].optionB}</label>
          </li>
          <li>
            <input
              type="radio"
              name="option"
              id="optionC"
              value="C"
              checked={selectedOption === 'C'}
              onChange={() => handleOptionSelect('C')}
            />
            <label htmlFor="optionC">{questions[currentQuestionIndex].optionC}</label>
          </li>
          <li>
            <input
              type="radio"
              name="option"
              id="optionD"
              value="D"
              checked={selectedOption === 'D'}
              onChange={() => handleOptionSelect('D')}
            />
            <label htmlFor="optionD">{questions[currentQuestionIndex].optionD}</label>
          </li>
        </ul>

        <button className="next-button" onClick={handleNextQuestion} disabled={!selectedOption}>Next</button>
      </div>
    </div>
  );


}

export default App;