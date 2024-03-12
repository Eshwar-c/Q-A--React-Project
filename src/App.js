import logo from './logo.svg';
import './App.css';
import './stylesheet.css';
import PostForm from './postform';
import React, { useState } from 'react';
function App() {
  const [postValue, setPostValue] = useState(false); 
  const handlePost = () => {
    setPostValue(true);
  };
  return (
    <div>
      <nav className='nav-bar'>
        <span className='text'>QA space</span>
        <a href="#home" className='home'>Home</a>
        <a href="#about" className='about'>About us</a>
      </nav>
      <div className="center-content">
        <h1>Search Answers for MCQ questions</h1>
        <div className='search-box'>
          <input type="text" placeholder='search here' className='searching' />
          <div className='buttons'>
            <button className='search'>search</button>
            <button className='post' onClick={handlePost}>post Q&A</button>
          </div>
        </div>
      </div>
      {postValue && <PostForm />}
    </div>
  );
}

export default App;
