import React from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm'; // Your form component

function App() {
  return (
    <div className="App">
      {/* Removed the default header/logo */}
      <main>
        <EmployeeForm />
      </main>
    </div>
  );
}

export default App;
