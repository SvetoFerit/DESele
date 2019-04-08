import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import sortBy from "lodash/sortBy";
import uniqBy from "lodash/uniqBy";
import "bootstrap/dist/css/bootstrap.min.css";

class ShowStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nationalities: ["hello"],
      value: "American",
      studentsData: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.setNationalities = this.setNationalities.bind(this);
  }

  componentDidMount() {
    this.setNationalities();
  }

  setNationalities = () => {
    fetch("/students/getData")
      .then(response => response.json())
      .then(data => {
        let tempNationalities = data.data.map(product => {
          return { value: product.nationality, display: product.nationality };
        });
        let tempStudentsData = data.data.map(data => {
          return {
            firstName: data.firstName,
            lastName: data.lastName,
            age: data.age,
            nationality: data.nationality
          };
        });
        this.setState({
          nationalities: [...this.state.nationalities, ...tempNationalities],
          studentsData: [...this.state.studentsData, ...tempStudentsData]
        });
      });
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div class="mycard">
        <select
          value={this.state.value}
          onChange={this.handleChange}
          class="mycard-header"
          style={{
            marginBottom: "20px"
          }}
        >
          {sortBy(uniqBy(this.state.nationalities, "value"), "value").map(
            nationality => (
              <option key={nationality.value} value={nationality.value}>
                {nationality.display}
              </option>
            )
          )}
        </select>
        <ul class="mylist-group">
          {this.state.studentsData.map(data => {
            if (data.nationality === this.state.value) {
              return (
                <div className="form-control2">
                  {data.firstName} {data.lastName} ({data.age})
                </div>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}
export default ShowStudents;
