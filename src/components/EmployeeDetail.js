import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function EmployeeDetail() {
  const { id } = useParams(); // Get index from URL
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const savedEmployees = localStorage.getItem('employees');
    if (savedEmployees) {
      const employees = JSON.parse(savedEmployees);
      const selectedEmployee = employees[id];
      setEmployee(selectedEmployee);
    }
  }, [id]);

  if (!employee) {
    return <p>Employee not found.</p>;
  }

  return (
    <div className="employee-detail">
      <h1>Employee Details</h1>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Phone:</strong> {employee.phone}</p>
      <Link to="/employees">← Back to List</Link>
    </div>
  );
}

export default EmployeeDetail;
