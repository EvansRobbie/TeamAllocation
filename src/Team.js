import React from 'react'

const Team = ({selectedTeam, handleChange}) => {
  return (
    <div className="row flex justify-content-center mt-4 mb-3">
    <div className='col-6'>
        <select className='form-select form-select-md' value={selectedTeam} onChange={handleChange}>
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
        </select>
    </div>
    </div>
  )
}

export default Team