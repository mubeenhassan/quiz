import React, { useState, useEffect } from "react"
import { QUIZ } from "../DataFolder/QuizData"
import QuestionComponent from "./QuestionComponent"

import step1 from "../../assets/images/step-icon-01.png"
import step2 from "../../assets/images/step-icon-02.png"
import step3 from "../../assets/images/step-icon-03.png"
import arrow from "../../assets/images/arrow.png"

const QUESTIONS_PER_PAGE = 8;
const TOTAL_QUESTIONS = QUIZ.length;
const STEP_DATA = [
  {
    icon: step1,
    heading: "Complete The Test",
    description:
      "Take your time and answer honestly to find out the dominant strand of your trauma bond",
  },
  {
    icon: step2,
    heading: "View Your Results",
    description:
      "Learn how your trauma bond is showing up and what you need to do to start breaking it",
  },
  {
    icon: step3,
    heading: "Unlock Your Potential",
    description:
      "Take the first steps towards freedom with a 3-step strategy tailored to your trauma bond and subconscious processing style",
  },
]
function Home() {
  const [quiz, setQuiz] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [points, setPoints] = useState({
    PH: 0,
    EN: 0,
    EM: 0,
    KI: 0,
    AU: 0,
    VI: 0
  })

  useEffect(() => {
    handleNext()
  }, [])

  const handleNext = () => {
    // 0-7, 8-15, 16-23
    if (currentPage * QUESTIONS_PER_PAGE <= TOTAL_QUESTIONS) {
      let quizData = [...QUIZ]
      let start = QUESTIONS_PER_PAGE * currentPage
      let end = (QUESTIONS_PER_PAGE * (currentPage + 1) - 1)
      quizData = quizData.slice(start, end + 1)
      setQuiz(quizData)
      setCurrentPage(currentPage + 1)
    } else {
      alert("Quiz Done")
    }
  }

  const renderQuestions = () => {
    return quiz.map((questions, key) => {
      let questionNumber = (((currentPage - 1) * QUESTIONS_PER_PAGE + key) + 1)
      return <QuestionComponent
        key1={key}
        data={questions}
        questionNumber={questionNumber}
        points={points}
        setPoints={setPoints}
      />
    })
  }
  return (
    <div className="main-container">
      <div className="heading-container">
        <h1>Free Trauma Bond Test</h1>
        <p>Find out which type of trauma bond you have and how to break it</p>
      </div>
      <div className="step-container">
        {STEP_DATA.map((item, key) => (
          <div className="step-card" key={key}>
            <div className="step-icon">
              <img src={item.icon} />
            </div>
            <h2>{item.heading}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="question-container">
        {renderQuestions()}
        <button onClick={handleNext} className="next-button">
          <span>Next</span>
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Home
