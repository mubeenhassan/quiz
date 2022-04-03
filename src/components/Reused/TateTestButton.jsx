import React from "react"

const TateTestButton = (props) => {
  const { arrow, className, takeTest, setTakeTest } = props

  return (
    <div className={className}>
      <button onClick={()=>setTakeTest(true)} className="next-button">
        <span>Take The Test</span>
        <img src={arrow} alt="" />
      </button>
      <p>Only takes 10 minutes</p>
    </div>
  )
}

export default TateTestButton
