import React, { useState } from 'react';

function TextField() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter text"
      />
    </div>
  );
}

export default TextField;
