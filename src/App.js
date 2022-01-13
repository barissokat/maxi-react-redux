import { useSelector } from 'react-redux'

import Auth from './components/Auth'
import CounterRTK from './components/CounterRTK'
import Header from './components/Header'
import UserProfile from './components/UserProfile'

function App () {
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
    <>
      {/* <Counter /> */}
      {/* <CounterConnect /> */}
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <CounterRTK />
    </>
  )
}

export default App
