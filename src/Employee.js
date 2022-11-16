import React from 'react'

import femaleProfile from './assets/femaleProfile.jpg'
import maleProfile from './assets/maleProfile.jpg'
import Team from './Team'

const Employee = ({employees, selectedTeam,handleChange, handleEmployeeClick}) => {
    
    const employeeElement = employees?.map((employee) =>{
        // console.log(employee.gender)
    return(
            
            <div className={(employee.teamName=== selectedTeam?'card m-2 standout': 'card m-2')}  key = {employee.id} style ={{cursor: 'pointer'}} onClick={() =>handleEmployeeClick(employee.id)}> 
           { employee.gender === 'female'?<img src=  {femaleProfile} alt ='' className='card-img-top'/>:<img src=  {maleProfile} alt ='' className='card-img-top'/>}
             <div className='card-body'>
                <h5 className='card-title'>Full Name: {employee.fullName}</h5>
                <p className='card-text'>Designation: {employee.designation}</p>
             </div>
             </div>    
        
        
    )
})

  return (
    <main className='container '>
       <Team selectedTeam={selectedTeam} handleChange={handleChange}/>
    <div className="row flex justify-content-center mt-4 mb-3">
        <div className='col-8'>
            <div className='card-collection' >
            {employeeElement}
            </div>
        </div>
    </div>
    </main>
)
}

export default Employee