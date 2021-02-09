import userEvent from '@testing-library/user-event';
import React, {useRef} from 'react';

const EditEducation = (props) => {
  const school = useRef()
  const degreeTitle = useRef(null)
  const yearBegan = useRef()
  const yearEnd = useRef()
  const gpa = useRef()


  return (
    <div>
      <form 
        onSubmit={(e) =>  {
          props.updateObject(
          e, props.id, school.current.value, 
          yearBegan.current.value, yearEnd.current.value, degreeTitle.current.value, 
          gpa.current.value
              )
            }
          }
        className="school-info"
      >
        <div className="school">
          <input
            required
            type="text"
            defaultValue={props.school}
            ref={school}
            placeholder="Name of University"
          />
          <br />
          <input
            required
            className="year"
            type="text"
            defaultValue={props.yearBegan}
            ref={yearBegan}
            placeholder="YYYY"
          />
          -
          <input

            required
            className="year"
            type="text"
            defaultValue={props.yearEnd}
            ref={yearEnd}
            placeholder="YYYY"
          />
        </div>
        <div className="degree">
          <input
            onChange={props.handleChange}
            required
            type="text"
            defaultValue={props.degreeTitle}
            ref={degreeTitle}
            placeholder="Title of Degree"
          />
          <br />
          <input
            type="text"
            defaultValue={props.gpa}
            ref={gpa}
            placeholder="GPA"
          />
        </div>
        <div className="button-div">
          <i 
          onClick={() => props.toggleForm(props.id)}
          type="button" 
          className="fas fa-times"
        ></i>
          <label>
            <button></button>
            <i className="fas fa-check-square"></i>
          </label>
        </div>

      </form>
    </div>
    )
}

// Uncontrolled form for updating the degrees array in the Education components state
// state updates occur once form is submitted.  Form values are accessed using refs.


export default EditEducation