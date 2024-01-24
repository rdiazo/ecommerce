import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useEffect } from 'react'
import { getCountriesThunk } from './store/state/countries.state'

function App() {

  const countries = useSelector(states => states.countries)

   const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://restcountries.com/v3.1/name/venezuela'
     dispatch(getCountriesThunk(url))
  }, [])

  console.log(countries)

  return (
    <div>
      <h2>redux thunk</h2>
    </div>
  )
}

export default App