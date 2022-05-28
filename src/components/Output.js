import React, { useContext } from 'react'
import { FormContext } from '../context/FormState'
import "../css/output.css"
export default function Output() {
    const { studentInfo } = useContext(FormContext)
    return (
        <>
            <div className='main-container'>
                <div className='row headings mb-2'>
                    <div className='col-8'>
                        <h5>Description</h5>
                    </div>
                    <div className='col-4'>
                        <h5>Image   </h5>
                    </div>
                </div>
                {
                   studentInfo && studentInfo.map((element, index) => {
                        return <div key={index} className='row mb-3'>
                            <div className='col-8'>

                                <h6>Name : {element.name}</h6>
                                <h6>Email : {element.email}</h6>
                                <h6>Website : {element.website}</h6>
                                <h6>Gender : {element.gender}</h6>
                                <h6>Skills : {
                                   element.skills && element.skills.map((element,index)=>{
                                        return <label key={index}>{element},&nbsp;</label>
                                    })
                                }</h6>
                            </div>
                            <div className='col-4'>
                                <img src={element.image} alt='' />
                            </div>
                        </div>
                    })
                }

            </div>
        </>
    )
}
