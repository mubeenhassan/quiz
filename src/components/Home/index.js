import React, { useState, useEffect } from "react"
import { QUIZ } from "../DataFolder/QuizData"
import QuestionComponent from "./QuestionComponent"
import Result from "../Result"
import ProgressBar from "../Reused/ProgressBar"
import LandingPage from "../LandingPage"

import step1 from "../../assets/images/step-icon-01.png"
import step2 from "../../assets/images/step-icon-02.png"
import step3 from "../../assets/images/step-icon-03.png"
import arrow from "../../assets/images/arrow.png"

const QUESTIONS_PER_PAGE = 8
const TOTAL_QUESTIONS = QUIZ.length
const TOTAL_PAGES = TOTAL_QUESTIONS / QUESTIONS_PER_PAGE
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
function Home(props) {
  const [quiz, setQuiz] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isQuizFinished, setIsQuizFinished] = useState(false)
  const [disabledQuizes, setDisabledQuizes] = useState([])
  const [takeTest, setTakeTest] = useState(false)
  const [points, setPoints] = useState({
    PH: 0,
    EN: 0,
    EM: 0,
    KI: 0,
    AU: 0,
    VI: 0,
  })

  useEffect(() => {

    handleNext()
    window.scrollTo(0, 0)

  }, [])

  const handleNext = () => {
    // 0-7, 8-15, 16-23, 24-31, 32-30, 40-47

    let disabledQuestions = []
    if (currentPage <= TOTAL_PAGES) {
      window.scrollTo(0, 500)

      let quizData = [...QUIZ]
      let start = QUESTIONS_PER_PAGE * currentPage
      let end = QUESTIONS_PER_PAGE * (currentPage + 1) - 1
      quizData = quizData.slice(start, end + 1)
      setQuiz(quizData)
      setCurrentPage(currentPage + 1)
      setProgress(
        parseInt((QUESTIONS_PER_PAGE / TOTAL_QUESTIONS) * 100 * currentPage)
      )
      for (let i = 0; i < QUESTIONS_PER_PAGE; i++) {
        if (i === 0) disabledQuestions.push(false)
        else disabledQuestions.push(true)
      }
      setDisabledQuizes(disabledQuestions)
    }
  }

  const handleFinish = () => {
    setProgress(100)
    setIsQuizFinished(true)
  }

  const renderResults = () => {
    return (
      <div className="test">
        <strong>PH: </strong> {points.PH} <br />
        <strong>EM: </strong> {points.EM} <br />
        <strong>EN: </strong> {points.EN} <br />
        <strong>AU: </strong> {points.AU} <br />
        <strong>VI: </strong> {points.VI} <br />
        <strong>KI: </strong> {points.KI}
      </div>
    )
  }

  const handleSetPoints = (p, questionID) => {
    unableQuiz(questionID)
    setPoints(p)
  }

  const unableQuiz = (questionID) => {
    let disabledPoints = [...disabledQuizes]
    if (
      questionID + 1 < QUESTIONS_PER_PAGE &&
      disabledPoints[questionID + 1] !== false
    ) {
      disabledPoints[questionID + 1] = false
      // document.getElementById(`question_${questionID + 1}`) &&
      //   document
      //     .getElementById(`question_${questionID + 1}`)
      //     .scrollIntoView({ block: 'center' })
      setDisabledQuizes(disabledPoints)
    }
  }

  const renderQuestions = () => {
    return quiz.map((questions, key) => {
      let questionNumber = (currentPage - 1) * QUESTIONS_PER_PAGE + key + 1
      return (
        <QuestionComponent
          key={questionNumber}
          questionID={key}
          data={questions}
          points={points}
          setPoints={handleSetPoints}
          isDisabled={disabledQuizes[key]}
        />
      )
    })
  }
  return (
    <div className="main-container">
      {takeTest ? (
        <div>
          <ProgressBar bgcolor={"#e8c0aa"} completed={progress} />
          {renderResults()}
          {isQuizFinished ? (
            <Result points={points} />
          ) : (
            <React.Fragment>
              <div className="heading-container">
                <h1>Free Trauma Bond Test</h1>
                <p>
                  Find out which type of trauma bond you have and how to break
                  it
                </p>
              </div>
              <div className="step-container">
                {STEP_DATA.map((item, key) => (
                  <div className="step-card" key={key}>
                    <div className="step-icon">
                      <img src={item.icon} />
                    </div>
                    <div className="step-heads">
                      <h2>{item.heading}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="question-container">
                {renderQuestions()}
                {currentPage <= TOTAL_PAGES ? (
                  <button onClick={handleNext} className="next-button">
                    <span>Next</span>
                    <img src={arrow} alt="" />
                  </button>
                ) : (
                  <button onClick={handleFinish} className="next-button">
                    <span>Finish Quiz</span>
                    <img src={arrow} alt="" />
                  </button>
                )}
              </div>
            </React.Fragment>
          )}
        </div>
      ) : (
        <LandingPage takeTest={takeTest} setTakeTest={setTakeTest} {...props}/>
      )}
    </div>
  )
}

export default Home
