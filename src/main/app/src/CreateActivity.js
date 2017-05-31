import React, { Component } from "react"
import { Button, Dropdown, Form, Label } from "semantic-ui-react"
import CurrencyInput from "react-currency-masked-input"

class CreateActivity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addressStates: [],
      ageRanges: [],
      categories: []
    }
  }
  componentDidMount() {
    fetch("/addressStates")
      .then(response => response.json())
      .then(addressStates => this.setState({ addressStates: addressStates }))
    fetch("/ageranges")
      .then(response => response.json())
      .then(ageRanges => this.setState({ ageRanges: ageRanges }))
    fetch("/categories")
      .then(response => response.json())
      .then(categories => this.setState({ categories: categories }))
  }
  render() {
    const { addressStates } = this.state
    const ageRangeOptions = this.state.ageRanges.map(ageRange => ({
      key: ageRange.order,
      text: ageRange.name,
      value: ageRange.name
    }))
    const categoryOptions = this.state.categories.map((category, index) => ({
      key: index,
      text: category.name,
      value: category.name
    }))
    return (
      <Form>
        <Form.Input id="activity-name-field" label="Name" required />
        <Form.Input
          id="activity-description-field"
          label="Description"
          control="textarea"
          rows="3"
          required
        />
        <Form.Input
          id="activity-cost-field"
          label="Cost"
          labelPosition="left"
          placeholder="0.00"
          width={4}
          required
        >
          <Label basic>$</Label>
          <CurrencyInput id="activity-cost-field" defaultValue="0.00" />
        </Form.Input>
        <Form.Select
          id="activity-age-range-field"
          label="Age range"
          placeholder="Select one..."
          options={ageRangeOptions}
          width={3}
          required
        />
        <Form.Select
          id="activity-age-range-field"
          label="Category"
          placeholder="Select one..."
          options={categoryOptions}
          width={3}
          required
        />
        <Form.Input id="address-street" label="Street address" required />
        <Form.Group>
          <Form.Input id="address-city" label="City" width={8} required />
          <Form.Field width={5} required>
            <label htmlFor="address-state">State</label>
            <select>
              {addressStates.map(addressState => (
                <option value={addressState}>{addressState}</option>
              ))}
            </select>
          </Form.Field>
          <Form.Input id="address-zip" label="Zip code" width={4} required />
        </Form.Group>
      </Form>
    )
  }
}

export default CreateActivity
