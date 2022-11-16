import React from 'react'

const Footer = () => {
    let today = new Date()
  return (
    <footer className='container'>
        <div className='row justify-content-center mt-3 mt-4'>
            <div className='col-8'>
                <h5>Team Allocation App - {today.getFullYear()}</h5>
            </div>
            </div>
    </footer>
  )
}

export default Footer