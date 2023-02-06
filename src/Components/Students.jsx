
import React from 'react'
import { Link } from 'react-router-dom'
import StudentsTable from './StudentsTable'
import './Students.css'

const Students = () => {
  return (
    <div>
        <span id='name'>Student Details</span>
        <Link to='/addnewstudent' className='add'>
            <button className='btn'>Add New Students</button>
        </Link>
        <StudentsTable/>

        

    </div>
  )
}

export default Students