import{useState,FormEvent} from 'react'
import {useAppDispatch} from '../../Store'

export function AddTodo(){
  const [newTodo,setNewTodo] = useState('')
  const dispacth = useAppDispatch()
  function handleNewTodo(e:FormEvent){
    e.preventDefault()
    //dispacth(add({newTodo}))
  }
  return(
    <form onSubmit={handleNewTodo}>
      <input type="text" placeholder="Novo to-do"  value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <button>Add todo</button>
    </form>
  )
}