import React from "react";
import ReactDom from "react-dom";
import {FrontPage, QuizGame, QuestionContext} from "../quizGame";
import {MemoryRouter} from "react-router-dom";
import pretty from "pretty";


describe("Quiz game", () => {
    it("Shows answer status",() => {
        const element = document.createElement("div");
        ReactDom.render(
            <MemoryRouter><FrontPage correctAnswers={3} questionsAnswered={10} /></MemoryRouter>,
            element
        );
        expect(element.querySelector("[data-testid=status]").textContent)
            .toEqual("You have answered 3 of 10 correctly");
        expect(pretty(element.innerHTML)).toMatchSnapshot();
    })
    it("Shows question", () => {
        const question = {
            question: "How are you?",
            answers: {
                answer_a: "Good",
                answer_b: "Bad",
                answer_c: "OK",
            }
        }
        const element = document.createElement("div");
        ReactDom.render(
            <MemoryRouter initialEntries={["/question"]}>
                <QuestionContext.Provider value={{randomQuestion: () => question}}>
                    <QuizGame/>
                </QuestionContext.Provider>
                </MemoryRouter>,
        element
        );
        expect(pretty(element.innerHTML)).toMatchSnapshot();
    })
})