import React, { useState } from 'react'

function Test() {
  const [value, setValue] = useState('')
  const [listArr, setListArr] = useState(['haha', 'hoho'])

  const handleSubmit = (e) => {
    e.preventDefault()
    setListArr(prevList => {
      return [value, ...prevList]
    })
    setValue('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {
          listArr.map((item, index) => (
            <div key={index}>
              <li>{item}</li>
              <input type="text" />
            </div>
          ))
        }
      </ul>
    </div>
  )
}

export default Test