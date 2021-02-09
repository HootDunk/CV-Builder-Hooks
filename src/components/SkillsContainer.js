import React, { useState } from 'react'
import SkillsComponent from './SkillsComponent'
import uniqid from 'uniqid'
import '../styles/SkillsContainer.css'

const SkillsContainer = () => {
  const [skills, setSkills] = useState([])
  const [skill, setSkill] = useState("")

  const handleChange = (event) => {
    setSkill(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSkills(prevSkills => [...prevSkills, {id: uniqid(), text: skill}])
    setSkill("")
  }

  const handleDelete = (id) => {
    setSkills(prevSkills => prevSkills.filter(item => item.id !== id))
  }

  return (
    <div>
      <SkillsComponent
        skill={skill}
        skills={skills}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
      />
    </div>
  )
}


export default SkillsContainer