import React from 'react'; // Import React
import '../EmployeeForm.css'; // Import CSS for styling

// Define a class-based component
class EmployeeForm extends React.Component {
  // Initialize state to track form input values
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
    };
  }

  // Handle input field changes and update state dynamically
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Handle form submission: log current state and reset form
  handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    console.log('Form submitted with:', this.state); // Log form data
    // Clear the form inputs
    this.setState({ name: '', email: '', phone: '' });
  };

  // Render the component's UI
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="employee-form">
        {/* Main form title */}
        <h2>Add Employee</h2>

        {/* Name input field */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        {/* Email input field */}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>

        {/* Phone input field */}
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </label>

        {/* Submit button with label "Add" */}
        <button type="submit">Add</button>

        {/* Section below the form to show Employee List label */}
        <p style={{ marginTop: '1.5rem', textAlign: 'center', fontWeight: 'bold' }}>
          Employee List
        </p>
      </form>
    );
  }
}

export default EmployeeForm; // Export component to use in App.js
