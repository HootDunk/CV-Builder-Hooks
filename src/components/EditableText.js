import React, {useState} from 'react';
import '../styles/EditableText.css'


const EditableText = (props) => {
  const [text, setText] = useState("");
  const[isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(prevIsActive => !prevIsActive)
  }

  const handleChange = (event) => {
    const {value} = event.target;
    setText(value)
  }

  const handleKeyUp = (event) => {
    if (event.charCode === 13) {
      toggleActive()
    }
  }

  if(isActive){
    return (
      <input
        className={props.class}
        autoFocus
        onKeyPress={handleKeyUp}
        onBlur={toggleActive}
        type="text"
        value={text}
        name="text"
        onChange={handleChange}
      />
    )
  }
  else {
    return (
          <p 
          onClick={toggleActive}
          className={props.class}
          >
            {(text)? text : props.initialText}
          </p>
      )
  }
}

export default EditableText
