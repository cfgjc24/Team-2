import React from 'react'
import { useState } from 'react'
function Admin() {
  const [count, setCount] = useState(0)
  const [module1, setModule1] = useState(0)
  const [module2, setModule2] = useState(0)
  const [module3, setModule3] = useState(0)
  const [module4, setModule4] = useState(0)
  const [module5, setModule5] = useState(0)
  const [module6, setModule6] = useState(0)
  const [module7, setModule7] = useState(0)
  const [module8, setModule8] = useState(0)
  const [loading, setLoading] = useState(false);

  return (

    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Admin