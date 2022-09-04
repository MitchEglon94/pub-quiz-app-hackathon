import React, { useState } from "react";
import Leaderboard from "../components/Leaderboard";

function LeaderboardPage() {
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState("easy");

  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };
  const difficultyHandler = (event) => {
    setDifficulty(event.target.value);
  };
  return (
    <div>
      <label for="category">Category</label>
      <select value={category} id="category" onChange={categoryHandler}>
        <option selected="selected" value={9}>
          General Knowledge
        </option>
        <option value={21}>Sport</option>
        <option value={22}>Geography</option>
        <option value={23}>History</option>
        <option value={12}>Music</option>
        <option value={18}>Computers</option>
      </select>
      <label for="difficulty">Difficulty</label>
      <select value={difficulty} id="difficulty" onChange={difficultyHandler}>
        <option selected="selected" value={"easy"}>
          Easy
        </option>
        <option value={"medium"}>Medium</option>
        <option value={"hard"}>Hard</option>
      </select>
      <Leaderboard category={category} difficulty={difficulty} />
    </div>
  );
}

export default LeaderboardPage;
