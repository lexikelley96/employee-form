import React from 'react'; // Import React to use class-based components
import '../EmployeeForm.css'; // Import the external CSS for styling

// Create a class-based component called EmployeeForm
class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state to track form inputs and a list of employees
    this.state = {
      name: '',
      email: '',
      phone: '',
      employees: [], // Stores all added employees
    };
  }

  // Lifecycle method: Runs once when the component loads
  componentDidMount() {
    // Retrieve any employees already saved in Local Storage
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      this.setState({ employees: JSON.parse(storedEmployees) }); // Load employees into state
    }
  }

  // Handle changes in input fields (updates state)
  handleChange = (event) => {
    const { name, value } = event.target; // Destructure name and value from the input
    this.setState({ [name]: value }); // Update the corresponding field in state
  };

  // Handle form submission: add new employee and save to Local Storage
  handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh when submitting form

    const { name, email, phone, employees } = this.state;

    // Validation: make sure all fields are filled
    if (!name || !email || !phone) {
      alert('Please fill out all fields');
      return;
    }

    // Create a new employee object
    const newEmployee = { name, email, phone };

    // Create a new array with existing employees plus the new one
    const updatedEmployees = [...employees, newEmployee];

    // Update the component's state with the new employee list
    this.setState({
      employees: updatedEmployees,
      name: '',
      email: '',
      phone: '',
    });

    // Save the updated employee list to Local Storage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  // Render method: defines the UI of the component
  render() {
    return (
      <div className="employee-form">
        {/* Title */}
        <h2>Add Employee</h2>

        {/* Form to collect employee information */}
        <form onSubmit={this.handleSubmit}>
          {/* Name input field */}
          <div className="form-group">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
          </div>

          {/* Email input field */}
          <div className="form-group">
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
          </div>

          {/* Phone input field */}
          <div className="form-group">
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div className="form-button">
			<button type="submit">Add</button>
		  </div>
        </form>

        {/* Display the list of employees */}
        <p style={{ marginTop: '1.5rem', textAlign: 'center', fontWeight: 'bold' }}>
          Employee List
        </p>

        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {/* Map through employees and display their info */}
          {this.state.employees.map((employee, index) => (
            <li key={index}>
              {employee.name} | {employee.email} | {employee.phone}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// Export the component so it can be used elsewhere
export default EmployeeForm;
