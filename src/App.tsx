import React, { FormEvent, useState } from 'react'
import Values from 'values.js'
import SingleColor, { Color } from './SingleColor'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState<Color[]>([])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => {
              setColor(e.target.value)
            }}
            placeholder="#ebcfdd"
            className={`${error ? 'error' : null}`}
          />
          <button className="btn" type="submit">
            generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} color={color} index={index} />
        })}
      </section>
    </>
  )
}

export default App
