import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ title, info }) => {
  const [show, setShow] = useState(false)
  return (
    <article>
      <div className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={() => setShow((estado) => !estado)}>
            {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {show && <p>{info}</p>}
      </div>
    </article>
  )
}

export default Question
