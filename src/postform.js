import React from 'react';
function PostForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your question here:
        <input type="text" />
      </label>
      <label>
        Enter your answer here:
        <input type="text" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default PostForm;