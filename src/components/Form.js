import React, { useState,useContext } from 'react'
import { FormContext } from '../context/FormState';
import "../css/form.css"
export default function Form() {
    const {studentInfo,setStudentInfo}= useContext(FormContext)
    const [info, setInfo] = useState({
        name: "",
        email: "",
        website: "",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        gender: "Male",
        skills: []
    });
    const [skills, setSkills] = useState([]);
   

    const clearForm = (e) => {
        e.preventDefault()
        document.getElementById("enrollForm").reset();
    }

    const enrollStudent = (e) => {
        e.preventDefault();
        if(info.name.length<3 || info.email.length<9 || info.website.length===0 || info.image.length===0 ){
            alert("Fill All the fields");
        }
        else{
            setStudentInfo([...studentInfo,info])
            clearForm(e);
        }
    }

    const onchange = (e) => {
        setInfo({...info,[e.target.name]:e.target.value})
    }

    let temp=[...skills];
    const onchangeCheck=(e)=>{
        if (e.target.checked){
            temp.push(e.target.value);
        } else {
            temp.slice(temp.indexOf(e.target.value),1);
        }
        setSkills(temp);
        setInfo({...info,skills:temp})
        console.log(info)
    }
    return (
        <>
            <form id='enrollForm'>
                <div className='main-form'>
                    <div className='row mb-2'>
                        <div className='col-md-6 col-3'>
                            <h4>Name </h4>
                        </div>
                        <div className='col-md-6 col-9'>
                            <input type="text" name='name' onChange={onchange} className='input' />
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-md-6 col-3'>
                            <h4>Email </h4>
                        </div>
                        <div className='col-md-6 col-9'>
                            <input type="Email" name='email' onChange={onchange} className='input' />
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-md-6 col-3'>
                            <h4>Website </h4>
                        </div>
                        <div className='col-md-6 col-9'>
                            <input type="url" name='website' onChange={onchange} className='input' />
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-md-6 col-3'>
                            <h4>Image link </h4>
                        </div>
                        <div className='col-md-6 col-9'>
                            <input type="url" name='image' onChange={onchange} className='input' />
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-md-6 col-3'>
                            <h4>Gender </h4>
                        </div>
                        <div className='col-md-6 col-9'>
                            <input type="radio" name="gender" value="Male" onChange={onchange} /> <label>Male</label>
                            <input type="radio" name="gender" value="Female" onChange={onchange}/><label>Female</label>
                            <input type="radio" name="gender" value="other" onChange={onchange}/><label>Other</label>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-md-6 col-3'>
                            <h4>Skills </h4>
                        </div>
                        <div className='col-md-6 col-9'>
                            <input type="checkbox" name="skills" value="Java" onChange={onchangeCheck}/> <label>Java</label>
                            <input type="checkbox" name="skills" value="HTML" onChange={onchangeCheck}/><label>HTML</label>
                            <input type="checkbox" name="skills" value="CSS" onChange={onchangeCheck}/> <label>CSS</label>
                            <input type="checkbox" name="skills" value="C++" onChange={onchangeCheck}/><label>C++</label>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-6'>
                            <button type="submit" onClick={enrollStudent}className='btn btn-success' >Enroll Student</button>
                        </div>
                        <div className='col-6'>
                            <button className='btn btn-danger' onClick={clearForm}>Clear</button>
                        </div>
                    </div>

                </div>
            </form>
        </>
    )
}
