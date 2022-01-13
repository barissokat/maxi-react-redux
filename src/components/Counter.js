import { useDispatch, useSelector } from 'react-redux'

import classes from './Counter.module.css'

const Counter = () => {
  // useDispatch Hook'u çağırılarak dispatch fonksiyonunu elde ederiz.
  const dispatch = useDispatch()
  // useSelector ile state içerisindeki counter verisini alabiliriz.
  const counter = useSelector(state => state.counter)

  const incrementHandler = () => {
    // Dispatch fonksiyonu ile belirtilen actionlar tetiklenir
    dispatch({ type: 'increment' })
  }

  const increaseHandler = () => {
    // Dispatch fonksiyonu ile belirtilen actionlar tetiklenir
    dispatch({ type: 'increase', amount: 10 })
  }

  const decrementHandler = () => {
    // Dispatch fonksiyonu ile belirtilen actionlar tetiklenir
    dispatch({ type: 'decrement' })
  }

  const toggleCounterHandler = () => { }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>Counter({counter})</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase +10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
