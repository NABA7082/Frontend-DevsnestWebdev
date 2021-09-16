
import './App.css';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';


function App() {
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;
