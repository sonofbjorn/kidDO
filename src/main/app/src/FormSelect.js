import React from "react"
import { Form } from "semantic-ui-react"

const FormSelect = ({ id, label, options, required, width }) => (
  <Form.Field width={width} required={required}>
    <label htmlFor={id}>State</label>
    <select id={id} defaultValue="" required={required}>
      <option value="" disabled>Select one...</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  </Form.Field>
)

export default FormSelect
