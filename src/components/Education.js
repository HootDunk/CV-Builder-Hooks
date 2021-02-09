import React, {useState} from 'react';
import '../styles/Education.css'
import SchoolInfo from "./SchoolInfo"
import EducationForm from "./EducationForm"
import uniqid from 'uniqid'
import EditEducation from "./EditEducation"

const Education = () => {
  const [degrees, setDegrees] = useState([]);
  const [inputs, setInputs] = useState({
    school: "",
    yearBegan: "",
    yearEnd: "",
    degreeTitle: "",
    gpa: "",
  })
  const [formIsActive, setFormIsActive] = useState(false);

  const toggleForm = () => {
    setFormIsActive(prevIsActive => !prevIsActive)
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputs(prevInputs => {
      return {
        ...prevInputs,
        [name]: value, 
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setDegrees(prevDegrees => {
      return [...prevDegrees, {
        id: uniqid(),
        school: inputs.school,
        yearBegan: inputs.yearBegan,
        yearEnd: inputs.yearEnd,
        degreeTitle: inputs.degreeTitle,
        gpa: inputs.gpa,
        activeEdit: false,
      }]
    })
    setInputs({
      school: "",
      yearBegan: "",
      yearEnd: "",
      degreeTitle: "",
      gpa: ""
    })
    setFormIsActive(false)
  }

  const handleDelete = (id) => {
    setDegrees(prevDegrees => {
      const list = prevDegrees.filter(item => item.id !== id)
      return list;
    })
  }

  const toggleObject = (id) => {
    const index = degrees.findIndex(obj => obj.id === id)
    let newArray = [...degrees]
    newArray[index] = {...newArray[index], activeEdit: !newArray[index].activeEdit}
    setDegrees(newArray)
  }

  const updateObject = (event, id, school, yearBegan, yearEnd, degreeTitle, gpa) => {
    event.preventDefault();
    const index = degrees.findIndex(element => element.id === id)
    let newArray = [...degrees]
    newArray[index] = {
      ...newArray[index],
      activeEdit: !newArray[index].activeEdit,
      school: school,
      yearBegan: yearBegan,
      yearEnd: yearEnd,
      degreeTitle: degreeTitle,
      gpa: gpa
    }
    setDegrees(newArray)
  }


  return (
    <div>
        <h3>Education</h3>
        {degrees.map((item, index) => {
          if(item.activeEdit){
            return (
              <EditEducation 
              updateObject={updateObject}
              toggleForm={toggleObject}
              key={degrees[index].id}
              id={degrees[index].id}
              school={degrees[index].school}
              yearBegan={degrees[index].yearBegan}
              yearEnd={degrees[index].yearEnd}
              degreeTitle={degrees[index].degreeTitle}
              gpa={degrees[index].gpa}
            />
            )
          } else {
            return(
              <SchoolInfo
                handleDelete={handleDelete}
                editSchool={toggleObject}
                key={item.id}
                id={item.id}
                school={item.school}
                yearBegan={item.yearBegan}
                yearEnd={item.yearEnd}
                degreeTitle={item.degreeTitle}
                gpa={item.gpa}
                activeEdit={item.activeEdit}
              />
            )
          }
        })}

        <EducationForm 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          toggleForm={toggleForm}
          isActive={formIsActive}
          school={inputs.school}
          yearBegan={inputs.yearBegan}
          yearEnd={inputs.yearEnd}
          degreeTitle={inputs.degreeTitle}
          gpa={inputs.gpa}
        />
      </div>
  )
}

export default Education





