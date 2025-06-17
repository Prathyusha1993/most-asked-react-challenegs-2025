import React, { useState } from 'react'

function AccordianReuse({items}) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (id) => {
        setActiveIndex(activeIndex === id ? null : id);
    }

  return (
    <div className='accordion'>
        {items.map((item) => (
            <div className='accordion-item' key={item.id}>
                <div className='accordion-header' onClick={() => handleToggle(item.id)}>
                {item.title}
                <span className='toggle-icon'>{activeIndex === items.id ? '-' : '+'}</span>
                </div>
                {activeIndex === item.id && (<div className='accordion-content'>{item.content}</div>)}
            </div>
            
        ))}
    </div>
  )
}

export default AccordianReuse;