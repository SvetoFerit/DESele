import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class AddStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      age: "",
      nationality: "",
      responseToPost: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("/students/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        age: this.state.age,
        nationality: this.state.nationality
      })
    });
    const body = await response.text();
    this.setState({
      id: "",
      firstName: "",
      lastName: "",
      age: "",
      nationality: "",
      responseToPost: body
    });
  };
  render() {
    return (
      <div class="student-form">
        <form onSubmit={this.handleSubmit}>
          <h2 class="text-center">Please enter all details:</h2>
          <p>
            <input
              type="number"
              name="id"
              class="form-control"
              placeholder="ID"
              required="required"
              value={this.state.id}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              type="text"
              class="form-control"
              placeholder="First Name"
              required="required"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              type="text"
              class="form-control"
              placeholder="Last Name"
              required="required"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              type="number"
              class="form-control"
              placeholder="Age"
              required="required"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <input
              type="text"
              class="form-control"
              placeholder="Nationality"
              required="required"
              name="nationality"
              value={this.state.nationality}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <button type="submit" class="btn btn-primary btn-block">
              Create new student
            </button>
          </p>
        </form>
      </div>
    );
  }
}

export default AddStudent;
