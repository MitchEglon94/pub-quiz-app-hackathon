import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./app/store";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LeaderboardPage from "./pages/LeaderboardPage";
import Questionpage from "./pages/QuestionPage";
import QuestionPage2 from "./pages/QuestionPage2";
import WelcomePage from "./pages/WelcomePage";

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<WelcomePage />} />
              <Route path="quiz" element={<QuestionPage2 />} />
              <Route path="leaderboard" element={<LeaderboardPage />} />
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
