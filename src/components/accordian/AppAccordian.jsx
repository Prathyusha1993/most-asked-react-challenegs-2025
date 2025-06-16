import React from 'react'
import AccordianReuse from './AccordianReuse';
import './accordion.css';

function AppAccordian() {

    const faqItems = [
        {
            id:1,
            title: 'What is React?',
            content: 'React is javascript library for building user interfaces.'
        },
        {
            id:2,
            title: 'What is components in React?',
            content: 'Components are independent and reusbale bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via the render() function.'
        },
        {
            id:3,
            title: 'What is Jsx?',
            content: 'JSX stands for JavaScript XML. It is a syntax extension to JavaScript that allows you to write HTML-like code within your JavaScript files. It gets transformed into regular JavaScript function calls.'
        },
        {
            id:4,
            title: 'What is React?',
            content: 'React is javascript library for building user interfaces.'
        },
    ]
  return (
    <div>
        <h3>Accordian for Frequently asked questions</h3>
        <AccordianReuse items={faqItems} />
    </div>
  )
}

export default AppAccordian;