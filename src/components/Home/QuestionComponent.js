import React, { useState, useEffect } from 'react'
const QuestionComponent = (props) => {
  const { data, points, setPoints, questionID, isDisabled } = props
  const [questionData, setQuestionData] = useState(data)
  const [isSelected, setIsSelected] = useState('')
  const [checkBoxItems, setCheckBoxItems] = useState([])

  useEffect(() => {
    setQuestionData(data)
  }, [data])

  const { question, options, question_type } = questionData

  const handleChange = (event, item) => {
    let newPoints = reducePreviousValue(item)
    item.credit.map((i) => {
      newPoints[i.to] = newPoints[i.to] + i.points
    })
    setPoints(newPoints, questionID)
    setIsSelected(event.target.value)
  }

  const reducePreviousValue = (data) => {
    let newPoints = { ...points }
    if (isSelected.length > 0) {
      options.map((item) => {
        if (isSelected === item.name) {
          item.credit.map((i) => {
            newPoints[i.to] = newPoints[i.to] - i.points
          })
        }
      })
    }
    return newPoints
  }

  const checkIfChecked = (value) => {
    let result = false
    checkBoxItems.map((item) => {
      if (value === item) result = true
    })
    return result
  }

  const renderRadioButtons = () => {
    return options.map((item, key) => {
      return (
        <div key={key} className='option'>
          <input
            type='radio'
            id={'radio' + key + questionID}
            value={item.name}
            onChange={(event) => handleChange(event, item)}
            checked={isSelected === item.name}
            disabled={isDisabled}
          />
          <label htmlFor={'radio' + key + questionID}>{item.name}</label>
        </div>
      )
    })
  }

  const addCheckBoxCredit = (value, operator) => {
    let newPoints = { ...points }
    options.map((item) => {
      if (item.name === value) {
        item.credit.map((opt) => {
          if (operator === '+') {
            newPoints = {
              ...newPoints,
              [opt.to]: points[opt.to] + opt.points,
            }
          } else if (operator === '-') {
            newPoints = {
              ...newPoints,
              [opt.to]: points[opt.to] - opt.points,
            }
          }
        })
      }
    })
    setPoints(newPoints, questionID)
  }

  const handleCheckBoxes = (event) => {
    const { value, checked } = event.target
    let checkList = [...checkBoxItems]
    if (!checked) {
      checkList.map((item, key) => {
        if (item === value) {
          checkList.splice(key, 1)
          addCheckBoxCredit(item, '-')
        }
      })
    } else {
      checkList.push(value)
      addCheckBoxCredit(value, '+')
    }
    setCheckBoxItems(checkList)
  }

  const renderCheckBoxes = () => {
    return options.map((item, key) => {
      return (
        <div key={key} className='option multiple'>
          <input
            type='checkbox'
            id={'checkbox' + key + questionID}
            value={item.name}
            onChange={handleCheckBoxes}
            checked={checkIfChecked(item.name)}
            disabled={isDisabled}
          />
          <label htmlFor={'checkbox' + key + questionID}>{item.name}</label>
        </div>
      )
    })
  }

  return (
    <div
      id={`question_${questionID}`}
      className={`question ${isDisabled ? 'disabledClass' : ''}`}
    >
      <p className='question-text'>
        {/* <span style={{ fontWeight: 'bold' }}>Q No.{questionNumber}. </span> */}
        {question}
      </p>
      <p className="selection-hint">
        ({question_type === 'multiple'? "tick all that apply":"tick one"})
      </p>
      <div className='option-container'>
        {question_type === 'multiple'
          ? renderCheckBoxes()
          : renderRadioButtons()}
      </div>
    </div>
  )
}

export default QuestionComponent
