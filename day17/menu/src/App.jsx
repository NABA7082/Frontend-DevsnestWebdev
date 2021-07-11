import Card from './components/Card';
import Menucard from './components/Menucard';
import './index.css';

function App(){
  return(
    <div className="app">

      <h1>Instructions</h1>
      <ul>
        <li>build a container</li>
        <li>create a seperate function and use it as a component</li>
        <li>pass props"calory and food" and call it to main component</li>
        </ul>
        <h1 className="heading">
          Calorie Read Only</h1>

      <Menucard></Menucard>
    </div>
  );
};
export default App;
