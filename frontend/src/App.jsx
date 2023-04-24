import React, { useState } from 'react';
import './App.css';
import AdsGrid from './AdGrid';

function App() {
  const [keyword, setKeyword] = useState('');

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{margin:'10px'}}      
      />
      <AdsGrid keyword={keyword} />
    </div>
  );
}

export default App;
