import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Questionpage() {
  // category 9 is general knowlege
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState("easy");
  const [questionlist, setQuestionList] = useState([]);

  // scoring
  const [score, setScore] = useState(0);

  // request that uses above state to generate request

  useEffect(() => {
    getQuestion();
  }, []);

  const getQuestion = async () => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    );
    const questionData = await response.json();
    console.log(questionData);
    setQuestionList(questionData.results);
  };

  // const getRandomNumber = () => {
  //   const random = Math.floor(Math.random() * 10) + 1;
  //   console.log(random);
  // };
  // getRandomNumber();

  const incorrectanswerselect = () => {
    const annswerresult = (document.getElementsByClassName(
      "displaycorrectorincorrect"
    ).innerHTML = "Incorrect!");
  };

  const correctanswerselect = () => {
    const annswerresult = (document.getElementsByClassName(
      "displaycorrectorincorrect"
    ).innerHTML = "Correct Well done!");
    setScore(score + 1);
    console.log(score);
  };

  return (
    <div>
      <p> Score: {score} </p>
      <h3 className="displaycorrectorincorrect"></h3>
      {questionlist.map((item) => {
        return (
          <div>
            <h1> {item.question} </h1>
            <Stack direction="row" spacing={2}>
              <Button
                onClick={incorrectanswerselect}
                variant="contained"
                value={false}
              >
                {item.incorrect_answers[0]}
              </Button>
              <Button
                onClick={incorrectanswerselect}
                variant="contained"
                value={false}
              >
                {item.incorrect_answers[1]}
              </Button>
              <Button
                onClick={incorrectanswerselect}
                variant="contained"
                value={false}
              >
                {item.incorrect_answers[2]}
              </Button>
              <Button
                onClick={correctanswerselect}
                variant="contained"
                value={true}
              >
                {item.correct_answer}
              </Button>
            </Stack>
          </div>
        );
      })}
    </div>
  );
}

export default Questionpage;

// return (
//   <div>
//     <p> Score: {score} </p>
//     <h3 className="displaycorrectorincorrect"></h3>
//     {questionlist.map((item) => {
//       return (
//         <div>
//           <h1> {item.question} </h1>
//           <Stack direction="row" spacing={2}>
//             <Button
//               onClick={incorrectanswerselect}
//               variant="contained"
//               value={false}
//             >
//               {item.incorrect_answers[0]}
//             </Button>
//             <Button
//               onClick={incorrectanswerselect}
//               variant="contained"
//               value={false}
//             >
//               {item.incorrect_answers[1]}
//             </Button>
//             <Button
//               onClick={incorrectanswerselect}
//               variant="contained"
//               value={false}
//             >
//               {item.incorrect_answers[2]}
//             </Button>
//             <Button
//               onClick={correctanswerselect}
//               variant="contained"
//               value={true}
//             >
//               {item.correct_answer}
//             </Button>
//           </Stack>
//         </div>
//       );
//     })}
//   </div>
// );
// }
