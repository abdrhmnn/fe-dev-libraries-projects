import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from "../../redux/random_q_machine/index.js";


function RandomQuoteMachine() {
  const { value, data } = useSelector(state => state.rqm)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h2>{value}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>Adding by Value</button>
      <br />
    </div>
  )
}

export default RandomQuoteMachine