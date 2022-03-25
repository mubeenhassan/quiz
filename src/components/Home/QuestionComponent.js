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

  const reducePreviousCredit = () => {
    let reducedData = { ...points }
    options.map((item) => {
      if (isSelected === item.name) {
        reducedData = reduceCredit(item)
      }
    })
    return reducedData
  }

  const reduceCredit = (item) => {
    let data = { ...points }
    item.credit.map((value) => {
      data = {
        ...data,
        [value.to]: points[value.to] - value.points,
      }
    })
    return data
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
