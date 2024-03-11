import logo from './logo.svg';
import './App.css';
import './stylesheet.css';

function App() {
  return (
    <div>
      <nav className='nav-bar'>
        <text className='text'>QA space</text>
        <button className='home'>Home</button>
        <button className='about'>About us</button>
      </nav>
      <div className="center-content">
      <h1>Search Answers for MCQ questions</h1>
      <input type="text" placeholder='search here'></input>
      <button placeholder='search'></button>
      <button placeholder='post q&a'></button>
    </div>
    </div>
    
  );
}

export default App;
