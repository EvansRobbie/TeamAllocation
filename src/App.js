
import './App.css';
import React, {useState, useEffect} from 'react'
import Employee from './Employee';
import Footer from './Footer';
import Header from './Header';
import EmployeeData from './EmployeeData';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import GroupedTeamMembers from './GroupedTeamMembers';
import Navbar  from './Navbar';
import NotFound from './NotFound';


function App() {
  const [selectedTeam, setSelectedTeam] = useState(JSON.parse(localStorage.getItem('selectedList')) ||"TeamC")
    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || EmployeeData);


    useEffect(()=>{
      localStorage.setItem('employeeList', JSON.stringify(employees))
    }, [employees])

    useEffect(()=>{
      localStorage.setItem('selectedList', JSON.stringify(selectedTeam))
    }, [selectedTeam])
    const handleChange = (e) =>{
      // console.log(e.target.value)
      setSelectedTeam(e.target.value)
  }
  const handleEmployeeClick = (id) =>{
      // console.log( parseInt(event.currentTarget.id))
     setEmployees(prevEmployees =>{
      return prevEmployees.map((employee) =>{
          return  employee.id === id ?employee.teamName === selectedTeam?
          {...employee, teamName:''}:{...employee, teamName:selectedTeam}:employee
      })
     })
    // const transformedEmployees = employees.map((employee) => employee.id === id ?employee.teamName === selectedTeam?
    //         {...employee, teamName:''}:{...employee, teamName:selectedTeam}:employee
    //     )
    //     setEmployees(transformedEmployees)
  }
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Header selectedTeam ={selectedTeam} teamMemberCount ={employees.filter((employee) =>employee.teamName === selectedTeam).length}/>
          <Routes>
          <Route path='/' element={<Employee employees={employees} handleChange ={handleChange} handleEmployeeClick ={handleEmployeeClick} selectedTeam={selectedTeam}/>}/>
          <Route path='/groupedTeamMembers' element={<GroupedTeamMembers employees={employees} selectedTeam ={selectedTeam} setSelectedTeam ={setSelectedTeam} />}/>
          <Route path='*' element={<NotFound/>}/>
          
          </Routes>
          <Footer/>
     </Router>
    </div>
  );
}

export default App;
