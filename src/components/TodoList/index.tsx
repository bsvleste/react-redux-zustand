import { useAppSelector} from '../../Store'
export function TodoList(){
  const todos = useAppSelector((store)=>store.todo)
  return(
    <ul>
      {
        todos.map((todo,index)=>(
          <li key={index}>{todo}</li>
        ))
      }
    </ul>
  )
}