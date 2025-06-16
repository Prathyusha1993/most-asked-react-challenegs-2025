import { useState } from 'react'
import TodoApp from './components/todoApp/TodoApp'
import AppModal from './components/aboutModal/AppModal'
import AppAccordian from './components/accordian/AppAccordian'
import AppDropdown from './components/dropdownExample/AppDropdown'
// import './App.css'

function App() {

  return (
    <>
      <h1>React Practise</h1>
      <TodoApp />
      <AppModal />
      <AppAccordian />
      <AppDropdown />
    </>
  )
}

export default App
