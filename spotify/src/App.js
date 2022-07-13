import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import Sidebar from './sidebar';
const code = new URLSearchParams(window.location.search).get('code');
console.log(code, "code")
function App() {
  return (
    <div>
       <div className=''><Sidebar/></div>
 
    <div className="App">
 <div>This is the spotify clone</div>

 <Login/>
    </div>
    </div>
  );
}

export default App;
