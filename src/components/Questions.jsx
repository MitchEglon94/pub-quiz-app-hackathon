// Copyright 2022 mitchelleglon
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import React, { useState, useEffect } from "react";

function Questions() {
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState("easy");
  const [questionlist, setQuestionList] = useState([]);
  const [score, setScore] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const getQuestion = async () => {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      const questionData = await response.json();
      console.log(questionData.results);
      setQuestionList(questionData.results);
    } catch (err) {
      console.log(err);
    }
  };

  const scoreSubmission = () => {};

  useEffect(() => {
    getQuestion();
  }, []);

  const clickHandler = (e) => {
    if (e.target.value === "true") {
      setScore(score + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
    questionlist.shift();
    setQuestionList(questionlist);
  };

  return (
    <div className="question-section-container">
      <h2>
        Correct = {score} Incorrect = {incorrect}
      </h2>
      {questionlist.length > -1 && (
        <div className="question-container">
          {questionlist.map((question) => (
            <div className="question-card">
              <h2>{question.question}</h2>
              {/* {question.incorrect_answers.push(question.correct_answer)} */}
              {question.incorrect_answers.map((answer) => (
                <button onClick={clickHandler} value={false}>
                  {answer}
                </button>
              ))}
              <button onClick={clickHandler} value={true}>
                {question.correct_answer}
              </button>
            </div>
          ))}
        </div>
      )}
      {questionlist.length === 0 && (
        <button onClick={scoreSubmission}>Submit to scoreboard</button>
      )}
    </div>
  );
}

export default Questions;
