import React, { useState, createContext } from 'react'

const FormContext = createContext();


const FormState = (props) => {
  const [studentInfo, setStudentInfo] = useState([
    {
      name: "John Doe",
      email: "john@gmail.com",
      website: "john.com",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      gender: "Male",
      skills: ["Java","HTML","CSS",'C++']
    }
  ])
  return (
    <FormContext.Provider value={{ studentInfo, setStudentInfo }}>
      {
        props.children
      }
    </FormContext.Provider>
  )
}

export default FormState
export { FormContext }