import React, { useState, useEffect } from 'react'
const QuestionComponent = (props) => {
  const { data, questionNumber, points, setPoints, questionID } = props

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
    setPoints(newPoints)
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
    setPoints(newPoints)
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
          />
          <label htmlFor={'checkbox' + key + questionID}>{item.name}</label>
        </div>
      )
    })
  }

  return (
    <div className='question'>
      <p className='question-text'>
        <span style={{ fontWeight: 'bold' }}>Q No.{questionNumber}. </span>
        {question}
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
