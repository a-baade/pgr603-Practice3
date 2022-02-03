import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter} from "react-router-dom";

import {QuizGame} from "./quizGame"

ReactDom.render(<BrowserRouter><QuizGame/></BrowserRouter>, document.getElementById("app"));
