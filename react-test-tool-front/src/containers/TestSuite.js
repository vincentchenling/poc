import React from "react"
class TestSuite extends React.Component {
    state = {
        project: "",
        testcases: [{
            testCaseId: "",
            description: "",
            run: "",
            steps: [{
                stepId: "",
                name: "",
                request: "",
                connector: ""
                
            }]
        }]
    }

    handleChange = (e) => {
        if (["name"].includes(e.target.className)) {
            let testcases = [...this.state.testcases]
            testcases[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({ testcases }, () => console.log(this.state.testcases))
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    addTestCase = (e) => {
        this.setState((prevState) => ({
            testcases: [...prevState.testcases, ...prevState.testcase.steps, {testCaseId: "", description: ""}],
        }));
    }

    addStep = (e) => {
        this.setState((prevState) => ({
            steps: [...prevState.testcases, { caseId: "", caseName: "" }],
        }));
    }
    handleSubmit = (e) => { e.preventDefault() }
    render() {
        let { testcases } = this.state
        return (
            <div>
            <button onClick={this.addTestCase}>Add Test Case</button>
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
            {
                 testcases.map((val, idx) => {
                     return (
                            <div>
                             <label htmlFor="name">Test Case ID</label>
                             <input type="text" name="testcaseId" id="testcaseId" value={testcases.testCaseId} />
                             <label htmlFor="description">Description</label>
                             <input type="text" name="description" id="description" value={testcases.description} />
                             
                             {
                                 testcases[idx].steps.map((val, idxStep) => {
                                     let stepId = `step-${idxStep}`

                                     return (
                                         <div>
                                             <input type="text" name="stepId" id="stepId" value={testcases[idx].steps.stepId} />
                                         </div>
                                     )
                                 })
                                }
                                </div>
                         
                 )})
            }
            </form>
            </div>


        )
    }
}

export default TestSuite