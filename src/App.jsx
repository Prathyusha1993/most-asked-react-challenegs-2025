import { useState } from 'react'
import TodoApp from './components/todoApp/TodoApp'
import AppModal from './components/aboutModal/AppModal'
import AppAccordian from './components/accordian/AppAccordian'
import AppDropdown from './components/dropdownExample/AppDropdown'
import DynamicFormUsage from './components/dynamicFormJsonScheme/DynamicFormUsage'
import AutoCompleteInput from './components/autoCompleteInput/AutoCompleteInput'
// import './App.css'

function App() {

  return (
    <>
      <h1>React Practise</h1>
      <TodoApp />
      <AppModal />
      <AppAccordian />
      <AppDropdown />
      <DynamicFormUsage />
      <AutoCompleteInput />
    </>
  )
}

export default App
