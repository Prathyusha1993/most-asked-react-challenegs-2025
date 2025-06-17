import React from 'react'
import formData from './formData.json';
import DynamicForm from './DynamicForm';

function DynamicFormUsage() {
    const handleSubmit = () => {
        console.log('Form Submitted');
    }

  return (
    <div>
        <DynamicForm schema={formData} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default DynamicFormUsage;