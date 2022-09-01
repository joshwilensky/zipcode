/** @format */

import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const initialCityState = { city: '', state: '' }
  const [cityState, setCityState] = useState(initialCityState)
  const [zipcode, setZipcode] = useState('')

  return (
    <div className="App">
      <h1>City/State Lookup Tool</h1>
      <form action="" className="form-data">
        <label htmlFor="zip">Enter zipcode here</label>
        <input className="zip" value={zipcode} type="text" id="zip" onChange={(event) => {
          const { value } = event.target
          setZipcode(value.replace(/[^\d{5}]$/, "").substring(0, 5))
        }} />

        <label htmlFor={`city`}>Enter city here</label>
        <input className="city" value={cityState.city} type="text" id="city" />

        <label htmlFor="zip">Enter state here</label>
        <input
          className={`state`}
          value={cityState.state}
          type="text"
          id="state"
        />
      </form>
      <pre>
        <code>
          {JSON.stringify({
            zipcode: zipcode,
            city: cityState.city,
            state: cityState.state,
          })}
        </code>
      </pre>
    </div>
  )
}

export default App
