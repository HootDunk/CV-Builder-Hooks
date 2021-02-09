import React from 'react';
import "../styles/SchoolInfo.css"

function SchoolInfo(props){
    return (
      <div className="school-info">
        <div className="school">
          <p>{props.school}</p>
          <p>{props.yearBegan} - {props.yearEnd}</p>
        </div>
        <div className="degree">
          <p>{props.degreeTitle}</p>
          <p>{props.gpa}</p>
        </div>
        <div className="button-div">
          <i onClick={() => props.editSchool(props.id)} className="fas fa-edit"></i>
          <i className="fas fa-trash" onClick={() => props.handleDelete(props.id)}></i>
        </div>
      </div>
    )
}

export default SchoolInfo

// had to use anonymous function in the button since we are passing in a variable that is available only in this context.