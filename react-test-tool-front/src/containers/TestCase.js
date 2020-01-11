import React from "react"
import { Form, Row, Col, Button, FormGroup, FormControl, ControlLabel, FormLabel } from "react-bootstrap";
import TestStep from "./TestStep";
import "./Login.css";

class TestCase extends React.Component {
    state = {
      steps: [{name:""}],
      testCaseId: "",
      description: ""
    }
  handleChange = (e) => {
      if (["name"].includes(e.target.className) ) {
        let steps = [...this.state.steps]
        steps[e.target.dataset.id][e.target.className] = e.target.value
        this.setState({ steps }, () => console.log(this.state.steps))
      } else {
        this.setState({ [e.target.name]: e.target.value })
      }
    }
  addStep = (e) => {
      this.setState((prevState) => ({
        steps: [...prevState.steps, {name:""}],
      }));
    }
  handleSubmit = (e) => { e.preventDefault() }
  render() {
      let {testCaseId, description, steps} = this.state
      return (
<div>
<label htmlFor="name">Test Case ID</label> 
          <input type="text" name="testcaseId" id="testcaseId" value={testCaseId} />
          <label htmlFor="description">Description</label> 
          <input type="text" name="description" id="description" value={description} />
          <button onClick={this.addStep}>Add Step</button>
          {
            steps.map((val, idx)=> {
              let stepId = `step-${idx}`
              return (
<TestStep />
              )
            })
          }
</div>
      )
    }
  }
  export default TestCase