import React, { useState } from 'react'

function FormInput() {
  const [value, setValue] = useState({
    title: '',
    address: ''
  })

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitting form", value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <label htmlFor="title-input">Title : </label>
          <input id="title-input" type="text" name="title"
            onChange={handleChange} />
          <br />
          <label htmlFor="address-input">Address : </label>
          <input id="address-input" type="text" name="address"
            onChange={handleChange} />
        </label>
        <br />
        <button>Submit</button>
      </form>
      <h3>Title: {value.title}</h3>
      <h3>Address: {value.address}</h3>
    </div>
  )
}

export default FormInput