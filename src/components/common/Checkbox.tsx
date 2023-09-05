import React from 'react'
import "./common.scss";

interface ICheckbox {
    name: string,
    value: boolean,
    todoId: number,
    handleSelect: (id: number) => void
}

const Checkbox: React.FC<ICheckbox> = ({name, value, todoId, handleSelect}) => {
  return (
    <div> 
      <input 
        type="checkbox" 
        className='custom-checkbox' 
        checked={value} 
        onChange={() => handleSelect(todoId)} 
      /> 
    </div>
  )
}

export default Checkbox