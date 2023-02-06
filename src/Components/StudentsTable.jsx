import React, { useContext } from 'react'
import Data from './DataContext'
import { Link } from 'react-router-dom'
import './Students.css'


const StudentsTable = () => {
    const context = useContext(Data).entries

    return (
        <div className="table ">
            <table width='100%'>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}>Name</th>
                        <th style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}>Age</th>
                        <th style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}>Course</th>
                        <th style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}>Batch</th>
                        <th style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}>Edit Info</th>
                    </tr>
                </thead>
                <tbody>

                    {context.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}>{item.name}</td>
                                <td style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}>{item.age}</td>
                                <td style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}>{item.course}</td>
                                <td style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}>{item.batch}</td>
                                
                                <td style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}>
                                    <Link to='/editstudent' state={{ data: index }} id='edit' >Edit</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default StudentsTable