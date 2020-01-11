import React from "react"
import { Form, Row, Col, Button, FormGroup, FormControl, ControlLabel, FormLabel } from "react-bootstrap";
import "./Login.css";

class TestSuite extends React.Component {
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
                  <label htmlFor={stepId}>{`Step Name`}</label>
                  <input
                    type="text"
                    name={stepId}
                    data-id={idx}
                    id={stepId}
                    value={steps[idx].name} 
                    className="name"
                  />
                  
                </div>
              )
          }
      
    
  }
  export default TestSuite