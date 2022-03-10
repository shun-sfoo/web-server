import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { PathList } from './screen';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    window.fetch('http://127.0.0.1:9000/').then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        setList(data);
      } else {
        Promise.reject(data);
      }
    });
  }, []);

  return (
    <div className="App">
      <PathList list={list} />
    </div>
  );
}

export default App;