import uniqid from 'uniqid'
import React, {useState} from 'react';
import '../styles/Experience.css'
import ExperienceForm from './ExperienceForm'
import WorkInfo from './WorkInfo'


const Experience = () => {
  const [jobs, setJobs] = useState([]);
  const [inputs, setInputs] = useState({
    company: "",
    location: "",
    yearBegan: "",
    yearEnd: "",
    title: "",
    description: "Write approximately 2-3 sentences",
  });
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
    setJobs(prevJobs => {
      return [...prevJobs, {
        id: uniqid(),
        company: inputs.company,
        yearBegan: inputs.yearBegan,
        yearEnd: inputs.yearEnd,
        location: inputs.location,
        title: inputs.title,
        description: inputs.description
      }]
    })
    setInputs({
      company: "",
      location: "",
      yearBegan: "",
      yearEnd: "",
      title: "",
      description: "Write approximately 2-3 sentences",
      activeEdit: false,
    })
    setFormIsActive(false)
  }

  const handleDelete = (id) => {
    setJobs(prevJobs => {
      const list = prevJobs.filter(item => item.id !== id)
      return list;
    })
  }

  const toggleObject = (id) => {
    const index = jobs.findIndex(obj => obj.id === id)
    let newArray = [...jobs]
    newArray[index] = {...newArray[index], activeEdit: !newArray[index].activeEdit}
    setJobs(newArray)
  }

  const submitObjectChange = (event, id) => {
    event.preventDefault();
    toggleObject(id);
  }

  const handleObjectChange = (event, id) => {
    const {name, value} = event.target;
    const index = jobs.findIndex(obj => obj.id === id)
    let newArray = [...jobs]
    newArray[index] = {...newArray[index], [name]: value}
    setJobs(newArray)
  }

  return (
    <div>
    <h3>Work Experience</h3>
      {jobs.map((item) => {
        if(!item.activeEdit){
          return (
            <WorkInfo
              key={item.id}
              id={item.id}
              company={item.company}
              location={item.location}
              yearBegan={item.yearBegan}
              yearEnd={item.yearEnd}
              title={item.title}
              description={item.description}
              handleDelete={handleDelete}
              editExperience={toggleObject}
            />
        )
        } else {
          return (
            <ExperienceForm
              key={item.id}
              id={item.id}
              isActive={true}
              company={item.company}
              location={item.location}
              yearBegan={item.yearBegan}
              yearEnd={item.yearEnd}
              title={item.title}
              description={item.description}
              handleObjectChange={handleObjectChange}
              toggleForm={toggleObject}
              submitObjectChange={submitObjectChange}
            />
          )
        }

      })}
      <ExperienceForm
        isActive={formIsActive}
        toggleForm={toggleForm}
        description={inputs.description}
        company={inputs.company}
        location={inputs.location}
        yearBegan={inputs.yearBegan}
        yearEnd={inputs.yearEnd}
        title={inputs.title}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      /> 
  </div>
  )
}

export default Experience;