import React from 'react';
import './stylesheet.css'
function PostForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className='question'>
      <label>
        Enter your question here:
        <input type="text" />
      </label>
      </div>
      <div className='answer'>
      <label>
        Enter your answer here:
        <input type="text" />
      </label>
      </div>
      <div>
      <button type="submit">Submit</button>

      </div>
    </form>
  );
}
export default PostForm;