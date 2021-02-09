import React from 'react';
import EditableText from './EditableText'
import '../styles/ResumeHeader.css'

function ResumeHeader() {
    return (
      <div className="main">
        <div className="left-side">
          <EditableText class="main-text" initialText="First Name"/>
          <EditableText class="main-text" initialText="Last Name"/>
          <EditableText class="base-text" initialText="Occupation"/> 
        </div>

        <div className="right-side">
          <EditableText class="base-text-right" initialText="Address Line 1"/>
          <EditableText class="base-text-right" initialText="Address Line 2"/>
          <EditableText class="base-text-right" initialText="Phone"/>
          <EditableText class="base-text-right" initialText="Email"/>
        </div>
      </div>
    )
}

export default ResumeHeader;
