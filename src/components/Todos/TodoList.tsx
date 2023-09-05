import React, { useEffect, FC } from 'react'
import "./todos.scss";
import { observer } from 'mobx-react-lite';
import TodoItem from './TodoItem';
import { useStore } from '../../hooks/useStore';


const TodoList: FC<{}> = observer(() => {
  const {todoStore} = useStore();
  
  useEffect(() => {
    todoStore.getTodos();
  }, [])

  return (
    <>
      <div className='todo-list-container'>
        <div className='header'>
          <div>Today</div>
          <div className='details'>
            <div className='add-btn'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={20} width={20} fill='#3D8FEC'><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
            </div>
            <div className='count'>2</div>
          </div>
        </div>

        <div className='todo-list'>
          {
            todoStore.todos.map(t => {
              return(
                <TodoItem todo={t} key={t.id} />
              )
            })
          }
        </div>
      </div>
    </>
  )
})

export default TodoList