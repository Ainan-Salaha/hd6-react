import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Data from './DataContext'
import './Students.css'


const AddNewStudent = () => {
    const navigate = useNavigate();
    const context = useContext(Data).updateFunction;

    var tempObj = {
        name: " ",
        age: " ",
        course: " ",
        batch: " "
    }
    const ChangeHandler = (e) => {
        tempObj = { ...tempObj, [e.target.name]: e.target.value };
    }

    const submitHandler = () => {
        context((obj) => {
            obj.push(tempObj);
            console.log(tempObj)
            alert(`New Student ${(tempObj).name} is Added`);
            return obj;
        });
        navigate('/Students');
    }

    const cancelEvent = () => {
        navigate('/Students');
    }


    return (
        <div >
            <h1 id='name'>Add New Student</h1><br />
            <div className="foam ">
                <form>
                <label htmlFor="name" id='text'>Name :- </label>
                <input type="text" className='inputbox ib1' placeholder='Enter new name' name='name' onChange={ChangeHandler}/><br/>
                
                <label htmlFor="age"  id='text'>Age :- </label>
                <input type="text" className='inputbox ib2' placeholder='Enter new age' name='age' onChange={ChangeHandler}/><br/>
                
                <label htmlFor="course"  id='text'>Course :- </label>
                <input type="text" className='inputbox ib3' placeholder='Enter new course' name='course' onChange={ChangeHandler}/><br/>
                
                <label htmlFor="batch" id='text'>Batch :- </label>
                <input type="text" className='inputbox ib4' placeholder='Enter new batch' name='batch' onChange={ChangeHandler}/><br/>
                    
                    <br /><br /><br />
                    
                    <button onClick={cancelEvent} className="btn_cancel">Cancel</button>
                    <button onClick={submitHandler} className="btn_submit">Submit</button>

                </form>
            </div>
        </div>
    )
}

export default AddNewStudent