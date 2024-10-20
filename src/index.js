
import ReactDOM from "react-dom/client"
import Counter from "./counter"
import TextToggle from "./toggle"
import SimpleNameForm from "./input"
import TodoList from "./todolist"
import ShoppingList from "./shopping"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<>
     <Counter />
     <TextToggle />  
      <SimpleNameForm /> 
      <TodoList />
     <ShoppingList />   
</>
)