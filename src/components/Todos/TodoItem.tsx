import React, {FC} from 'react'
import { observer } from 'mobx-react-lite'
import { ITodo } from '../../interface/todos'
import "./todos.scss";
import avatar from '../../assets/avatar.png'
import Checkbox from '../common/Checkbox';
import { useStore } from '../../hooks/useStore';
import Tag from '../common/Tag';

interface ITodoItemProps {
  todo: ITodo
}

const TodoItem: FC<ITodoItemProps> = observer(({todo}) => {
  const {todoStore} = useStore();
  return (
    <>
    <div className='todo-card'>
      <div className='todo-container'>
        <div className='todo-title'>
          <Checkbox name='completed' value={todo.completed} todoId={todo.id} handleSelect={todoStore.completeTodo} />
          <div className='text'>{todo.title}</div>
        </div>
        <div className='todo-timing'>
          <div>{todo.startDt}</div>
          <div>{todo.endDt}</div>
        </div>
        <div className='todo-desc'>
          {todo.desc}
        </div>
        <div className='todo-footer'>
          <div className='todo-tags'>
            {
              todo.tags.map((tag, idx) => {
                return(
                  <Tag text={tag.text} type={tag.type} key={idx} />
                )
              })
            }
          </div>
          <div className='avatart'>
            <img src={avatar} width={24} height={24} style={{borderRadius: "18px"}} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
})

export default TodoItem