import React, { Component } from "react"
import { Button, Dropdown, Form, Label } from "semantic-ui-react"
import CurrencyInput from "react-currency-masked-input"
import Select from "./FormSelect"

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
    const ageRangeOptions = this.state.ageRanges.map(ageRange => ageRange.name)
    const categoryOptions = this.state.categories.map(category => category.name)
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
        <Select
          id="activity-age-range-field"
          label="Age range"
          options={ageRangeOptions}
          width={4}
          required
        />
        <Select
          id="activity-age-range-field"
          label="Category"
          options={categoryOptions}
          width={4}
          required
        />
        <Form.Input id="address-street-field" label="Street address" required />
        <Form.Group>
          <Form.Input id="address-city-field" label="City" width={8} required />
          <Select
            id="address-state-field"
            label="State"
            options={addressStates}
            required
          />
          <Form.Input id="address-zip" label="Zip code" required />
        </Form.Group>
      </Form>
    )
  }
}
export const useKeyOnly = (val, key) => val && key
export default CreateActivity
