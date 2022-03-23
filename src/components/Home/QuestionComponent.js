import React, { useState, useEffect } from "react"

const QuestionComponent = (props) => {
  const { data, questionNumber, points, setPoints } = props

  const [questionData, setQuestionData] = useState(data)
  const [isSelected, setIsSelected] = useState("")
  const [checkBoxItems, setCheckBoxItems] = useState([])

  useEffect(() => {
    setQuestionData(data)
  }, [data])

  const { question, options, question_type } = questionData

  const handleChange = (event, item) => {
    // let data = { ...points }
    let data = reducePreviousCredit()
    item.credit.map((value, key) => {
      data = {
        ...data,
        [value.to]: points[value.to] + value.points,
      }
    })
    setIsSelected(event.target.value)
    setPoints(data)
  }

  const reducePreviousCredit=()=>{
   let reducedData={...points};
   options.map((item)=>{
    if(isSelected===item.name){
     reducedData = reduceCredit(item)
    }
   })
   return reducedData;
  }

  const reduceCredit=(item)=>{
   let data = { ...points }
   item.credit.map((value) => {
    data = {
      ...data,
      [value.to]: points[value.to] - value.points,
    }
  })
  return data;
  }

  const checkIfChecked = (value) => {
    let result = false
    checkBoxItems.map((item) => {
      if (value === item) result = true
    })
    return result
  }

  const handleCheckBoxes = (event) => {
    const { value, checked } = event.target
    let checkList = [...checkBoxItems]
    if (!checked) {
      checkList.map((item, key) => {
        if (item === value) {
          checkList.splice(key, 1)
        }
      })
    } else {
      checkList.push(value)
    }
    setCheckBoxItems(checkList)
  }

  const renderRadioButtons = () => {
    return options.map((item, key) => {
      return (
        <div key={key}>
          <input
            type="radio"
            value={item.name}
            onChange={(event) => handleChange(event, item)}
            checked={isSelected === item.name}
          />
          <label>{item.name}</label>
        </div>
      )
    })
  }
  const renderCheckBoxes = () => {
    return options.map((item, key) => {
      return (
        <div key={key}>
          <input
            type="checkbox"
            value={item.name}
            onChange={handleCheckBoxes}
            checked={checkIfChecked(item.name)}
          />
          <label>{item.name}</label>
        </div>
      )
    })
  }

  return (
    <div className="question">
      <p className="question-text">
        <span style={{ fontWeight: "bold" }}>Q No.{questionNumber}. </span>
        {question}
      </p>

      <div className="option-container">
        {question_type === "multiple"
          ? renderCheckBoxes()
          : renderRadioButtons()}
        {/* {questions.options.map((question, key1) => (
         <div
           className={`option ${
             questions.data_type == "multiple" ? "multiple" : ""
           }`}
         >
           {questions.data_type == "multiple" ? (
             <input type="checkbox" id={`option-${key1}-${key}`} name={key} />
           ) : (
             <input type="radio" id={`option-${key1}-${key}`} name={key} />
           )}
           <label for={`option-${key1}-${key}`}>{question.name}</label>
         </div>
       ))} */}
      </div>

      {/* <p className="question-text">
       <span style={{ fontWeight: "bold" }}>Q No.{key + 1}. </span>
       {questions.question}
     </p>
     <div className="option-container">
       {questions.options.map((question, key1) => (
         <div
           className={`option ${
             questions.data_type == "multiple" ? "multiple" : ""
           }`}
         >
           {questions.data_type == "multiple" ? (
             <input type="checkbox" id={`option-${key1}-${key}`} name={key} />
           ) : (
             <input type="radio" id={`option-${key1}-${key}`} name={key} />
           )}
           <label for={`option-${key1}-${key}`}>{question.name}</label>
         </div>
       ))}
     </div> */}
    </div>
  )
}

export default QuestionComponent
