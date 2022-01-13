import { connect } from 'react-redux'

import classes from './Counter.module.css'

const CounterConnect = props => {
  const incrementHandler = () => {
    props.increment()
  }

  const decrementHandler = () => {
    props.decrement()
  }

  const toggleCounterHandler = () => { }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter (Connect)</h1>
      <div className={classes.value}>Counter({props.counter})</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

// Redux state'i proplara mapleyen fonksiyon
// useSelectore'a karşılık gelir
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

// Redux dispatch fonksiyonlarını proplara mapleyen fonksiyon
// useDispatch'e karşılık gelir
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' })
  }
}

// connect fonksiyonu component'in store'a bağlanmasını sağlar.
// connect fonksiyonu argüman olarak iki fonksiyon alır ve yeni bir fonksiyon dönrürür.
// Dönen bu fonksiyon argüman olarak component'i alır.
export default connect(mapStateToProps, mapDispatchToProps)(CounterConnect)
