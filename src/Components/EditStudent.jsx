import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Data from './DataContext'
import './Students.css'


const EditStudent = () => {
    const context=useContext(Data).updateFunction;
    const context1=useContext(Data).entries;
    const location= useLocation().state.data;
    const navigate=useNavigate();

    var tempObj ={name: context1[location].name, age: context1[location].age, course: context1[location].course, batch:context1[location].batch};

    const ChangeHandler=(e)=>{
        tempObj = {...tempObj, [e.target.name]: e.target.value };
    }
   

    const submitHandler=()=>{
        context((obj)=>{
            obj[location]=tempObj;
            alert(`Students ${(tempObj).name}'s details is updated !`);
            return obj;
        })
        navigate('/Students')
    }

    const cancelEvent=()=>{
        navigate('/Students')
    }

  return (
    <div >
        <h1 id='name' >Edit Student Details</h1> <br/>
        <div className='foam  gird '>
            <form>
                <label htmlFor="name" id='text'>Name :- </label>
                <input type="text" className='inputbox ib1' placeholder='Enter new name' name='name' onChange={ChangeHandler} /><br/>
                
                <label htmlFor="age"  id='text'>Age :- </label>
                <input type="text" className='inputbox ib2' placeholder='Enter new age' name='age' onChange={ChangeHandler}/><br/>
                
                <label htmlFor="course"  id='text'>Course :- </label>
                <input type="text" className='inputbox ib3' placeholder='Enter new course' name='course' onChange={ChangeHandler}/><br/>
                
                <label htmlFor="batch" id='text'>Batch :- </label>
                <input type="text" className='inputbox ib4' placeholder='Enter new batch' name='batch' onChange={ChangeHandler}/><br/>

                <br /><br /><br />
            </form>
                <button onClick={cancelEvent}  className='btn_cancel'>Cancel</button>
                <button onClick={submitHandler} className="btn_submit" >Submit</button>
        </div>
        
    </div>
  )
}

export default EditStudent